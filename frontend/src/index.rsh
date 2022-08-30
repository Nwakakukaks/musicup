'reach 0.1';
'use strict';
/* eslint-disable */

const Person = {
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const MusicUp = Participant('PlatformCommission', {
      ...Person,
    platformCommission: UInt,
    ready: Fun([], Null) });
  

  const Organizer = Participant('Organizer', {
    ...Person,
    eventFee: UInt,
    deadline: UInt,
    approveInvitee: Fun([], Null),
    ready: Fun([], Null),
    acceptPlatformCommission: Fun([UInt], Null),
  });


  const RSVPier = API('RSVPier', {
    iWillGo: Fun([], Bool),
  });

   const Checkin = API('Check', {
    isCheckin: Fun([Address], Bool),
    isTime:  Fun([], Bool),
  });
  init();
  
 
  MusicUp.only(() => {
    const PlatformCommission = declassify(interact.platformCommission); 
  });

  MusicUp.publish(PlatformCommission);
   MusicUp.interact.ready();
  commit();

  Organizer.only(() => {
    const eventFee = declassify(interact.eventFee);
    const deadline = declassify(interact.deadline);
  });

  Organizer.only(() => {
     interact.approveInvitee();
  });

  Organizer.publish(eventFee, deadline);
  commit();
  Organizer.publish();
  Organizer.interact.ready();
  
  const deadlineBlock = relativeTime(deadline);
  const RSVPs = new Set();

  const [ keepGoing, total ] =
    parallelReduce([true, 0])
    .define(() => {
      const checkIWillGo = (who) => {
        check( ! RSVPs.member(who), "not yet RSVPied" );
        return () => {
          RSVPs.insert(who);
          return [ keepGoing, total + 1 ];
        };
      };
      const checkTheyCame = (actor, who) => {
        check( actor == Organizer, "you are the event Organizer");
        check( RSVPs.member(who), "yeah" );
        return () => {
          transfer(eventFee).to(who);
          RSVPs.remove(who);
          return [ keepGoing, total - 1 ];
        };
      };
    })
    .invariant(
      balance() == total * eventFee
      && RSVPs.Map.size() == total
    )
    .while( keepGoing )
    .api(RSVPier.iWillGo,
      () => { const _ = checkIWillGo(this); },
      () => eventFee,
      (k) => {
        k(true);
        return checkIWillGo(this)();
    })
    .api(Checkin.isCheckin,
      (who) => { const _ = checkTheyCame(this, who); },
      (_) => 0,
      (who, k) => {
        k(true);
        return checkTheyCame(this, who)();
    })
    .timeout( deadlineBlock, () => {
      const [ [], k ] = call(Checkin.isTime);
      k(true);
      return [ false, total ]
    });

  const leftovers = total * eventFee
  const musicupFee = leftovers / 2
    transfer(musicupFee).to(MusicUp);
    transfer(balance()).to(Organizer);
  commit();
 
  each([Organizer, MusicUp], () => {
    interact.seeOutcome(leftovers);
  });
  exit();
});