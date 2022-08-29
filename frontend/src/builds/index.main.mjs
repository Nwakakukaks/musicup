// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Data({
    Attendee_iWillGo0_81: ctc3,
    Checkin_theyCame0_81: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v305 = stdlib.protect(ctc2, interact.deadline, 'for Admin\'s interact field deadline');
  const v306 = stdlib.protect(ctc2, interact.price, 'for Admin\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v306, v305],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:24:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:24:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v310, v311], secs: v313, time: v312, didSend: v29, from: v309 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v310, v311], secs: v313, time: v312, didSend: v29, from: v309 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v309, v310, v311, v312],
    evt_cnt: 0,
    funcNum: 1,
    lct: v312,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v316, time: v315, didSend: v34, from: v314 } = txn2;
      
      ;
      const v317 = stdlib.addressEq(v309, v314);
      ;
      
      const v325 = stdlib.add(v312, v311);
      const v327 = stdlib.checkedBigNumberify('./index.rsh:33:27:decimal', stdlib.UInt_max, '0');
      const v328 = true;
      const v329 = v315;
      
      if (await (async () => {
        
        return v328;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v493 = stdlib.mul(v327, v310);
        sim_r.txns.push({
          amt: v493,
          kind: 'from',
          to: v309,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v316, time: v315, didSend: v34, from: v314 } = txn2;
  ;
  const v317 = stdlib.addressEq(v309, v314);
  stdlib.assert(v317, {
    at: './index.rsh:26:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:27:19:application',
    fs: ['at ./index.rsh:27:19:application call to [unknown function] (defined at: ./index.rsh:27:19:function exp)', 'at ./index.rsh:27:19:application call to "liftedInteract" (defined at: ./index.rsh:27:19:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  const v325 = stdlib.add(v312, v311);
  let v327 = stdlib.checkedBigNumberify('./index.rsh:33:27:decimal', stdlib.UInt_max, '0');
  let v328 = true;
  let v329 = v315;
  
  while (await (async () => {
    
    return v328;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: ['time', v325],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc3],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v483], secs: v485, time: v484, didSend: v273, from: v482 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v486 = true;
      await txn4.getOutput('Checkin_timesUp', 'v486', ctc7, v486);
      const cv327 = v327;
      const cv328 = false;
      const cv329 = v484;
      
      v327 = cv327;
      v328 = cv328;
      v329 = cv329;
      
      continue;
      }
    else {
      const {data: [v382], secs: v384, time: v383, didSend: v207, from: v381 } = txn3;
      switch (v382[0]) {
        case 'Attendee_iWillGo0_81': {
          const v385 = v382[1];
          undefined /* setApiDetails */;
          ;
          const v395 = true;
          await txn3.getOutput('Attendee_iWillGo', 'v395', ctc7, v395);
          const v401 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v381), null);
          let v402;
          switch (v401[0]) {
            case 'None': {
              const v403 = v401[1];
              v402 = false;
              
              break;
              }
            case 'Some': {
              const v404 = v401[1];
              v402 = true;
              
              break;
              }
            }
          const v405 = v402 ? false : true;
          stdlib.assert(v405, {
            at: './index.rsh:36:14:application',
            fs: ['at ./index.rsh:62:28:application call to "checkIWillGo" (defined at: ./index.rsh:35:34:function exp)', 'at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:11:function exp)'],
            msg: 'not yet',
            who: 'Admin'
            });
          await stdlib.mapSet(map0, v381, null);
          const v407 = stdlib.add(v327, stdlib.checkedBigNumberify('./index.rsh:39:41:decimal', stdlib.UInt_max, '1'));
          const cv327 = v407;
          const cv328 = true;
          const cv329 = v383;
          
          v327 = cv327;
          v328 = cv328;
          v329 = cv329;
          
          continue;
          break;
          }
        case 'Checkin_theyCame0_81': {
          const v432 = v382[1];
          undefined /* setApiDetails */;
          ;
          const v458 = v432[stdlib.checkedBigNumberify('./index.rsh:64:9:spread', stdlib.UInt_max, '0')];
          const v459 = true;
          await txn3.getOutput('Checkin_theyCame', 'v459', ctc7, v459);
          const v466 = stdlib.addressEq(v381, v309);
          stdlib.assert(v466, {
            at: './index.rsh:43:14:application',
            fs: ['at ./index.rsh:69:29:application call to "checkTheyCame" (defined at: ./index.rsh:42:42:function exp)', 'at ./index.rsh:67:16:application call to [unknown function] (defined at: ./index.rsh:67:16:function exp)'],
            msg: 'you are the boss',
            who: 'Admin'
            });
          const v467 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v458), null);
          let v468;
          switch (v467[0]) {
            case 'None': {
              const v469 = v467[1];
              v468 = false;
              
              break;
              }
            case 'Some': {
              const v470 = v467[1];
              v468 = true;
              
              break;
              }
            }
          stdlib.assert(v468, {
            at: './index.rsh:44:14:application',
            fs: ['at ./index.rsh:69:29:application call to "checkTheyCame" (defined at: ./index.rsh:42:42:function exp)', 'at ./index.rsh:67:16:application call to [unknown function] (defined at: ./index.rsh:67:16:function exp)'],
            msg: 'yep',
            who: 'Admin'
            });
          ;
          await stdlib.mapSet(map0, v458, undefined /* Nothing */);
          const v476 = stdlib.sub(v327, stdlib.checkedBigNumberify('./index.rsh:48:41:decimal', stdlib.UInt_max, '1'));
          const cv327 = v476;
          const cv328 = true;
          const cv329 = v383;
          
          v327 = cv327;
          v328 = cv328;
          v329 = cv329;
          
          continue;
          break;
          }
        }}
    
    }
  const v493 = stdlib.mul(v327, v310);
  ;
  return;
  
  
  
  
  };
export async function Attendee_iWillGo(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attendee_iWillGo expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attendee_iWillGo expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Data({
    Attendee_iWillGo0_81: ctc4,
    Checkin_theyCame0_81: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v309, v310, v325, v327] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v349 = ctc.selfAddress();
  const v351 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:58:10:application call to [unknown function] (defined at: ./index.rsh:58:10:function exp)', 'at ./index.rsh:33:19:application call to "runAttendee_iWillGo0_81" (defined at: ./index.rsh:57:9:function exp)', 'at ./index.rsh:33:19:application call to [unknown function] (defined at: ./index.rsh:33:19:function exp)'],
    msg: 'in',
    who: 'Attendee_iWillGo'
    });
  const v353 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v349), null);
  let v354;
  switch (v353[0]) {
    case 'None': {
      const v355 = v353[1];
      v354 = false;
      
      break;
      }
    case 'Some': {
      const v356 = v353[1];
      v354 = true;
      
      break;
      }
    }
  const v357 = v354 ? false : true;
  stdlib.assert(v357, {
    at: './index.rsh:36:14:application',
    fs: ['at ./index.rsh:58:37:application call to "checkIWillGo" (defined at: ./index.rsh:35:34:function exp)', 'at ./index.rsh:58:10:application call to [unknown function] (defined at: ./index.rsh:58:10:function exp)', 'at ./index.rsh:58:10:application call to [unknown function] (defined at: ./index.rsh:58:10:function exp)', 'at ./index.rsh:33:19:application call to "runAttendee_iWillGo0_81" (defined at: ./index.rsh:57:9:function exp)', 'at ./index.rsh:33:19:application call to [unknown function] (defined at: ./index.rsh:33:19:function exp)'],
    msg: 'not yet',
    who: 'Attendee_iWillGo'
    });
  const v360 = ['Attendee_iWillGo0_81', v351];
  
  const txn1 = await (ctc.sendrecv({
    args: [v309, v310, v325, v327, v360],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v310, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v382], secs: v384, time: v383, didSend: v207, from: v381 } = txn1;
      
      switch (v382[0]) {
        case 'Attendee_iWillGo0_81': {
          const v385 = v382[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Attendee_iWillGo"
            });
          sim_r.txns.push({
            amt: v310,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v395 = true;
          const v396 = await txn1.getOutput('Attendee_iWillGo', 'v395', ctc7, v395);
          
          const v401 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v381), null);
          let v402;
          switch (v401[0]) {
            case 'None': {
              const v403 = v401[1];
              v402 = false;
              
              break;
              }
            case 'Some': {
              const v404 = v401[1];
              v402 = true;
              
              break;
              }
            }
          const v405 = v402 ? false : true;
          ;
          await stdlib.simMapSet(sim_r, 0, v381, null);
          const v407 = stdlib.add(v327, stdlib.checkedBigNumberify('./index.rsh:39:41:decimal', stdlib.UInt_max, '1'));
          const v957 = v407;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Checkin_theyCame0_81': {
          const v432 = v382[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v382], secs: v384, time: v383, didSend: v207, from: v381 } = txn1;
  switch (v382[0]) {
    case 'Attendee_iWillGo0_81': {
      const v385 = v382[1];
      undefined /* setApiDetails */;
      ;
      const v395 = true;
      const v396 = await txn1.getOutput('Attendee_iWillGo', 'v395', ctc7, v395);
      if (v207) {
        stdlib.protect(ctc0, await interact.out(v385, v396), {
          at: './index.rsh:57:10:application',
          fs: ['at ./index.rsh:57:10:application call to [unknown function] (defined at: ./index.rsh:57:10:function exp)', 'at ./index.rsh:61:10:application call to "k" (defined at: ./index.rsh:60:11:function exp)', 'at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:11:function exp)'],
          msg: 'out',
          who: 'Attendee_iWillGo'
          });
        }
      else {
        }
      
      const v401 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v381), null);
      let v402;
      switch (v401[0]) {
        case 'None': {
          const v403 = v401[1];
          v402 = false;
          
          break;
          }
        case 'Some': {
          const v404 = v401[1];
          v402 = true;
          
          break;
          }
        }
      const v405 = v402 ? false : true;
      stdlib.assert(v405, {
        at: './index.rsh:36:14:application',
        fs: ['at ./index.rsh:62:28:application call to "checkIWillGo" (defined at: ./index.rsh:35:34:function exp)', 'at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:11:function exp)'],
        msg: 'not yet',
        who: 'Attendee_iWillGo'
        });
      await stdlib.mapSet(map0, v381, null);
      const v407 = stdlib.add(v327, stdlib.checkedBigNumberify('./index.rsh:39:41:decimal', stdlib.UInt_max, '1'));
      const v957 = v407;
      return;
      
      break;
      }
    case 'Checkin_theyCame0_81': {
      const v432 = v382[1];
      return;
      break;
      }
    }
  
  
  };
export async function Checkin_theyCame(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Checkin_theyCame expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Checkin_theyCame expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Attendee_iWillGo0_81: ctc5,
    Checkin_theyCame0_81: ctc4
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v309, v310, v325, v327] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v362 = ctc.selfAddress();
  const v364 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)', 'at ./index.rsh:33:19:application call to "runCheckin_theyCame0_81" (defined at: ./index.rsh:64:9:function exp)', 'at ./index.rsh:33:19:application call to [unknown function] (defined at: ./index.rsh:33:19:function exp)'],
    msg: 'in',
    who: 'Checkin_theyCame'
    });
  const v365 = v364[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v368 = stdlib.addressEq(v362, v309);
  stdlib.assert(v368, {
    at: './index.rsh:43:14:application',
    fs: ['at ./index.rsh:65:41:application call to "checkTheyCame" (defined at: ./index.rsh:42:42:function exp)', 'at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)', 'at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)', 'at ./index.rsh:33:19:application call to "runCheckin_theyCame0_81" (defined at: ./index.rsh:64:9:function exp)', 'at ./index.rsh:33:19:application call to [unknown function] (defined at: ./index.rsh:33:19:function exp)'],
    msg: 'you are the boss',
    who: 'Checkin_theyCame'
    });
  const v369 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v365), null);
  let v370;
  switch (v369[0]) {
    case 'None': {
      const v371 = v369[1];
      v370 = false;
      
      break;
      }
    case 'Some': {
      const v372 = v369[1];
      v370 = true;
      
      break;
      }
    }
  stdlib.assert(v370, {
    at: './index.rsh:44:14:application',
    fs: ['at ./index.rsh:65:41:application call to "checkTheyCame" (defined at: ./index.rsh:42:42:function exp)', 'at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)', 'at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)', 'at ./index.rsh:33:19:application call to "runCheckin_theyCame0_81" (defined at: ./index.rsh:64:9:function exp)', 'at ./index.rsh:33:19:application call to [unknown function] (defined at: ./index.rsh:33:19:function exp)'],
    msg: 'yep',
    who: 'Checkin_theyCame'
    });
  const v376 = ['Checkin_theyCame0_81', v364];
  
  const txn1 = await (ctc.sendrecv({
    args: [v309, v310, v325, v327, v376],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:66:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v382], secs: v384, time: v383, didSend: v207, from: v381 } = txn1;
      
      switch (v382[0]) {
        case 'Attendee_iWillGo0_81': {
          const v385 = v382[1];
          
          break;
          }
        case 'Checkin_theyCame0_81': {
          const v432 = v382[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Checkin_theyCame"
            });
          ;
          const v458 = v432[stdlib.checkedBigNumberify('./index.rsh:64:9:spread', stdlib.UInt_max, '0')];
          const v459 = true;
          const v460 = await txn1.getOutput('Checkin_theyCame', 'v459', ctc7, v459);
          
          const v466 = stdlib.addressEq(v381, v309);
          ;
          const v467 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v458), null);
          let v468;
          switch (v467[0]) {
            case 'None': {
              const v469 = v467[1];
              v468 = false;
              
              break;
              }
            case 'Some': {
              const v470 = v467[1];
              v468 = true;
              
              break;
              }
            }
          ;
          sim_r.txns.push({
            amt: v310,
            kind: 'from',
            to: v458,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v458, undefined /* Nothing */);
          const v476 = stdlib.sub(v327, stdlib.checkedBigNumberify('./index.rsh:48:41:decimal', stdlib.UInt_max, '1'));
          const v969 = v476;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v382], secs: v384, time: v383, didSend: v207, from: v381 } = txn1;
  switch (v382[0]) {
    case 'Attendee_iWillGo0_81': {
      const v385 = v382[1];
      return;
      break;
      }
    case 'Checkin_theyCame0_81': {
      const v432 = v382[1];
      undefined /* setApiDetails */;
      ;
      const v458 = v432[stdlib.checkedBigNumberify('./index.rsh:64:9:spread', stdlib.UInt_max, '0')];
      const v459 = true;
      const v460 = await txn1.getOutput('Checkin_theyCame', 'v459', ctc7, v459);
      if (v207) {
        stdlib.protect(ctc0, await interact.out(v432, v460), {
          at: './index.rsh:64:10:application',
          fs: ['at ./index.rsh:64:10:application call to [unknown function] (defined at: ./index.rsh:64:10:function exp)', 'at ./index.rsh:68:10:application call to "k" (defined at: ./index.rsh:67:16:function exp)', 'at ./index.rsh:67:16:application call to [unknown function] (defined at: ./index.rsh:67:16:function exp)'],
          msg: 'out',
          who: 'Checkin_theyCame'
          });
        }
      else {
        }
      
      const v466 = stdlib.addressEq(v381, v309);
      stdlib.assert(v466, {
        at: './index.rsh:43:14:application',
        fs: ['at ./index.rsh:69:29:application call to "checkTheyCame" (defined at: ./index.rsh:42:42:function exp)', 'at ./index.rsh:67:16:application call to [unknown function] (defined at: ./index.rsh:67:16:function exp)'],
        msg: 'you are the boss',
        who: 'Checkin_theyCame'
        });
      const v467 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v458), null);
      let v468;
      switch (v467[0]) {
        case 'None': {
          const v469 = v467[1];
          v468 = false;
          
          break;
          }
        case 'Some': {
          const v470 = v467[1];
          v468 = true;
          
          break;
          }
        }
      stdlib.assert(v468, {
        at: './index.rsh:44:14:application',
        fs: ['at ./index.rsh:69:29:application call to "checkTheyCame" (defined at: ./index.rsh:42:42:function exp)', 'at ./index.rsh:67:16:application call to [unknown function] (defined at: ./index.rsh:67:16:function exp)'],
        msg: 'yep',
        who: 'Checkin_theyCame'
        });
      ;
      await stdlib.mapSet(map0, v458, undefined /* Nothing */);
      const v476 = stdlib.sub(v327, stdlib.checkedBigNumberify('./index.rsh:48:41:decimal', stdlib.UInt_max, '1'));
      const v969 = v476;
      return;
      
      break;
      }
    }
  
  
  };
export async function Checkin_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Checkin_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Checkin_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v309, v310, v325, v327] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v481 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:72:7:application',
    fs: ['at ./index.rsh:72:7:application call to [unknown function] (defined at: ./index.rsh:72:7:function exp)', 'at ./index.rsh:71:33:application call to [unknown function] (defined at: ./index.rsh:71:33:function exp)'],
    msg: 'in',
    who: 'Checkin_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v309, v310, v325, v327, v481],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:72:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v483], secs: v485, time: v484, didSend: v273, from: v482 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Checkin_timesUp"
        });
      ;
      const v486 = true;
      const v487 = await txn1.getOutput('Checkin_timesUp', 'v486', ctc5, v486);
      
      const v976 = stdlib.mul(v327, v310);
      sim_r.txns.push({
        amt: v976,
        kind: 'from',
        to: v309,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v483], secs: v485, time: v484, didSend: v273, from: v482 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v486 = true;
  const v487 = await txn1.getOutput('Checkin_timesUp', 'v486', ctc5, v486);
  stdlib.protect(ctc0, await interact.out(v483, v487), {
    at: './index.rsh:72:7:application',
    fs: ['at ./index.rsh:72:7:application call to [unknown function] (defined at: ./index.rsh:72:7:function exp)', 'at ./index.rsh:73:8:application call to "k" (defined at: ./index.rsh:72:7:function exp)', 'at ./index.rsh:71:33:application call to [unknown function] (defined at: ./index.rsh:71:33:function exp)'],
    msg: 'out',
    who: 'Checkin_timesUp'
    });
  
  const v976 = stdlib.mul(v327, v310);
  ;
  return;
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Attendee_iWillGo()byte`, `Checkin_theyCame(address)byte`, `Checkin_timesUp()byte`],
    pure: [],
    sigs: [`Attendee_iWillGo()byte`, `Checkin_theyCame(address)byte`, `Checkin_timesUp()byte`]
    },
  appApproval: `BiAJAAEEKCAwCLuBwd8Cs/b77wMmAwEAAQEAIjUAMRhBAvYqZEkiWzUBIQZbNQIxGSMSQQAIMQAoKGZCAsQ2GgAXSUEAQSI1BCM1BkkhBwxAAChJIQgMQAARIQgSRCo1/yg0/1AyA1BCAI4hBxJENhoBNf8pNP9QQgB+gYT1l5EBEkQqQgAdNhoCFzUENhoDNhoBF0mBAwxAAUtJJAxAAFckEkQkNAESRDQESSISTDQCEhFEKGRJNQMlWzX/STUFNf6ABNTgGC00/lCwMgY0/w9EgAkAAAAAAAAB5gGwKTUHNANXACA0AyEEWzT/NAMhBVsiMgZCAYpIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+JVs1/SEFWzX8STUFNfuABBSRQNQ0+1CwMgY0/QxENPsiVUAARjT+iAHrgAkAAAAAAAABiwGwKTUHMQCIAcpJNfkiVUAABiI1+kIABiM1+kIAADT6FEQxACgpZjT/NP40/TT8IwgjMgZCAP00+1cBIDX6NPo1+YAJAAAAAAAAAcsBsCk1BzEANP8SRDT5iAF4STX3IlVAAAYiNfhCAAYjNfhCAAA0+ESxIrIBNP6yCCOyEDT5sgezNPkoKGY0/zT+NP00/CMJIzIGQgCcSSMMQABCIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABJqLkXSwNP8xABJENP80AyEEWzQDIQVbNAMlWwgiIzIGQgBUSCI0ARJENARJIhJMNAISEURJNQVJIls1/yEGWzX+gASs0R/DNP8WUDT+FlCwgaCNBogAzTEANP8WUDT+FlAyBhZQKEsBVwA4Z0gjNQEyBjUCQgBjNf81/jX9Nfw1+zX6NP5BACA0+jT7FlA0/BZQNP0WUChLAVcAOGdIJDUBMgY1AkIAMrEisgE0/TT7C7III7IQNPqyB7NCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/w0kxGGFAAANIKIkoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 56,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v310",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v311",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v310",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v311",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attendee_iWillGo0_81",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_Checkin_theyCame0_81",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T12",
                "name": "v382",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v483",
                "type": "bool"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v395",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v459",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v486",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Attendee_iWillGo",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Checkin_theyCame",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Checkin_timesUp",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attendee_iWillGo0_81",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_Checkin_theyCame0_81",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T12",
                "name": "v382",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v483",
                "type": "bool"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620017c5380380620017c583398101604081905262000026916200024a565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000143565b620000c0604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252436060808801828152600160008190559290925582519586019690965292519084015251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906200013a9291906200016d565b505050620002e7565b81620001695760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017b90620002aa565b90600052602060002090601f0160209004810192826200019f5760008555620001ea565b82601f10620001ba57805160ff1916838001178555620001ea565b82800160010185558215620001ea579182015b82811115620001ea578251825591602001919060010190620001cd565b50620001f8929150620001fc565b5090565b5b80821115620001f85760008155600101620001fd565b604080519081016001600160401b03811182821017156200024457634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025e57600080fd5b6200026862000213565b835181526040601f19830112156200027f57600080fd5b6200028962000213565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002bf57607f821691505b60208210811415620002e157634e487b7160e01b600052602260045260246000fd5b50919050565b6114ce80620002f76000396000f3fe60806040526004361061008f5760003560e01c80634e634106116100565780634e63410614610132578063832307571461013a578063a98bf2231461014f578063ab53f2c614610162578063af020d631461018557005b80631e93b0f1146100985780632c10a159146100bc5780632fe76ef0146100cf578063310e7397146100f25780633bc5b7bf1461010557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611000565b61018d565b6100e26100dd366004611038565b6101c6565b60405190151581526020016100b3565b610096610100366004611055565b61025f565b34801561011157600080fd5b50610125610120366004611038565b610294565b6040516100b3919061109b565b6100e26102c0565b34801561014657600080fd5b506001546100a9565b61009661015d366004611000565b61030c565b34801561016e57600080fd5b50610177610341565b6040516100b39291906110cd565b6100e26103de565b60408051606081018252600080825260208201819052918101919091526101c26101bc368490038401846111d3565b82610461565b5050565b604080516060810182526000808252602082018190529181018290526101ea610e5e565b610219604080516060810190915280600081526000602080830182905260408051918201815291815291015290565b60408051602080820183526001600160a01b038816825283830191909152600183528151808201909252828252830152610253828461060b565b50506020015192915050565b60408051606081018252600080825260208201819052918101919091526101c261028e36849003840184611209565b8261060b565b60408051606081018252600080825260208201819052918101919091526102ba82610a5e565b92915050565b604080516060810182526000808252602082018190529181018290526102e4610ea8565b60408051602080820190925260008152908201526103028183610b37565b5060400151919050565b60408051606081018252600080825260208201819052918101919091526101c261033b368490038401846112b5565b82610b37565b6000606060005460028080546103569061130d565b80601f01602080910402602001604051908101604052809291908181526020018280546103829061130d565b80156103cf5780601f106103a4576101008083540402835291602001916103cf565b820191906000526020600020905b8154815290600101906020018083116103b257829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101829052610402610e5e565b610431604080516060810190915280600081526000602080830182905260408051918201815291815291015290565b600060208281018290529082526040805180830190915282815290830152610459828461060b565b505051919050565b610471600160005414600a610cfe565b815161048c90158061048557508251600154145b600b610cfe565b60008080556002805461049e9061130d565b80601f01602080910402602001604051908101604052809291908181526020018280546104ca9061130d565b80156105175780601f106104ec57610100808354040283529160200191610517565b820191906000526020600020905b8154815290600101906020018083116104fa57829003601f168201915b505050505080602001905181019061052f91906113c1565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161058634156008610cfe565b805161059e906001600160a01b031633146009610cfe565b6105a6610ed2565b815181516001600160a01b039091169052602080830151825190910152604082015160608301516105d791906113f3565b8151604090810191909152602080830180516000905280516001920191909152514391015261060581610d23565b50505050565b61061b6004600054146011610cfe565b815161063690158061062f57508251600154145b6012610cfe565b6000808055600280546106489061130d565b80601f01602080910402602001604051908101604052809291908181526020018280546106749061130d565b80156106c15780601f10610696576101008083540402835291602001916106c1565b820191906000526020600020905b8154815290600101906020018083116106a457829003601f168201915b50505050508060200190518101906106d991906113c1565b90506107066040805160608101825260008082528251602080820185528282528301529181019190915290565b610717826040015143106013610cfe565b7fc289ca3e207d721ab955106ce191e510af88ba4cd696f7fe8c1bc4014d31a47a338560405161074892919061140b565b60405180910390a1600060208501515151600181111561076a5761076a611067565b14156108af5761078182602001513414600c610cfe565b604051600181527fb9ce44f7358591640f066cc5d123329f6d2238dd6f93442b62a8fa612ae480a69060200160405180910390a16001835260006107c433610a5e565b5160018111156107d6576107d6611067565b14156107e5576000815261080d565b60016107f033610a5e565b51600181111561080257610802611067565b141561080d57600181525b80516108289061081e576001610821565b60005b600d610cfe565b336000908152600460205260409020805462ff00ff1916600117905561084c610ed2565b825181516001600160a01b0390911690526020808401518251909101526040808401518251909101526060830151610886906001906113f3565b60208083018051929092528151600191015251436040909101526108a981610d23565b50610605565b60016020850151515160018111156108c9576108c9611067565b1415610605576020808501515160400151908201526108ea3415600e610cfe565b604051600181527f599e17de05b4e964658ea33518ef7e3a453d53a1f32d8305a0b4a23a4da8bc999060200160405180910390a160016020840152815161093d906001600160a01b03163314600f610cfe565b600060208201515161094e90610a5e565b51600181111561096057610960611067565b141561097257600060408201526109a3565b600160208201515161098390610a5e565b51600181111561099557610995611067565b14156109a357600160408201525b6109b281604001516010610cfe565b60208082015151908301516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156109f3573d6000803e3d6000fd5b50602080820151516001600160a01b03166000908152600490915260409020805462ffffff19169055610a24610ed2565b825181516001600160a01b039091169052602080840151825190910152604080840151825190910152606083015161088690600190611462565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610aaa57610aaa611067565b1415610b27576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610aeb57610aeb611067565b6001811115610afc57610afc611067565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b610b476004600054146015610cfe565b8151610b62901580610b5b57508251600154145b6016610cfe565b600080805560028054610b749061130d565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba09061130d565b8015610bed5780601f10610bc257610100808354040283529160200191610bed565b820191906000526020600020905b815481529060010190602001808311610bd057829003601f168201915b5050505050806020019051810190610c0591906113c1565b9050610c1981604001514310156017610cfe565b6040805133815284516020808301919091528501515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a1610c6d34156014610cfe565b604051600181527f50f9f0b5a8ba9da8370049b10297cf449193f5a3b29ac5c271862d63d3aff3cb9060200160405180910390a160016040830152610cb0610ed2565b815181516001600160a01b0390911690526020808301518251820152604080840151835182015260608401518284018051919091528051600093019290925290514391015261060581610d23565b816101c25760405163100960cb60e01b81526004810182905260240160405180910390fd5b80602001516020015115610df357610d65604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b0316808252825160209081015181840190815284516040908101518186019081528387015151606080880191825260046000554360015583519586019690965292519184019190915251928201929092529051608082015260a00160405160208183030381529060405260029080519060200190610dee929190610f19565b505050565b8051805160209182015191830151516001600160a01b03909116916108fc91610e1c9190611479565b6040518115909202916000818181858888f19350505050158015610e44573d6000803e3d6000fd5b5060008080556001819055610e5b90600290610f9d565b50565b604051806040016040528060008152602001610ea360408051608081018252600060208083018281528385018390528451918201909452908152606082015290815290565b905290565b604051806040016040528060008152602001610ea360405180602001604052806000151581525090565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b828054610f259061130d565b90600052602060002090601f016020900481019282610f475760008555610f8d565b82601f10610f6057805160ff1916838001178555610f8d565b82800160010185558215610f8d579182015b82811115610f8d578251825591602001919060010190610f72565b50610f99929150610fd3565b5090565b508054610fa99061130d565b6000825580601f10610fb9575050565b601f016020900490600052602060002090810190610e5b91905b5b80821115610f995760008155600101610fd4565b600060408284031215610ffa57600080fd5b50919050565b60006040828403121561101257600080fd5b61101c8383610fe8565b9392505050565b6001600160a01b0381168114610e5b57600080fd5b60006020828403121561104a57600080fd5b813561101c81611023565b600060808284031215610ffa57600080fd5b634e487b7160e01b600052602160045260246000fd5b60028110610e5b57634e487b7160e01b600052602160045260246000fd5b815160608201906110ab8161107d565b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b81811015611101578581018301518582016060015282016110e5565b81811115611113576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff8111828210171561115b57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561115b57634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561115b57634e487b7160e01b600052604160045260246000fd5b80358015158114610b3257600080fd5b6000604082840312156111e557600080fd5b6111ed61112a565b823581526111fd602084016111c3565b60208201529392505050565b6000818303608081121561121c57600080fd5b61122461112a565b833581526060601f198301121561123a57600080fd5b611242611161565b61124a611192565b60208601356002811061125c57600080fd5b815261126a604087016111c3565b60208201526020605f198501121561128157600080fd5b611289611161565b9350606086013561129981611023565b8452604081019390935291825260208101919091529392505050565b600081830360408112156112c857600080fd5b6112d061112a565b833581526020601f19830112156112e657600080fd5b6112ee611161565b91506112fc602085016111c3565b825260208101919091529392505050565b600181811c9082168061132157607f821691505b60208210811415610ffa57634e487b7160e01b600052602260045260246000fd5b60006080828403121561135457600080fd5b6040516080810181811067ffffffffffffffff8211171561138557634e487b7160e01b600052604160045260246000fd5b8060405250809150825161139881611023565b808252506020830151602082015260408301516040820152606083015160608201525092915050565b6000608082840312156113d357600080fd5b61101c8383611342565b634e487b7160e01b600052601160045260246000fd5b60008219821115611406576114066113dd565b500190565b6001600160a01b038381168252825160208084019190915283015151805160a084019291906114398161107d565b806040860152506020810151151560608501528160408201515116608085015250509392505050565b600082821015611474576114746113dd565b500390565b6000816000190483118215151615611493576114936113dd565b50029056fea2646970667358221220773ad9d56644e04a1e8b30ac045be9f611328308583eebd99a2b35f737a1087364736f6c634300080c0033`,
  BytecodeLen: 6085,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:25:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:78:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:33:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Attendee_iWillGo": Attendee_iWillGo,
  "Checkin_theyCame": Checkin_theyCame,
  "Checkin_timesUp": Checkin_timesUp
  };
export const _APIs = {
  Attendee: {
    iWillGo: Attendee_iWillGo
    },
  Checkin: {
    theyCame: Checkin_theyCame,
    timesUp: Checkin_timesUp
    }
  };
