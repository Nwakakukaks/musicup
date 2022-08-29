import React from "react";
// import { Lines } from 'react-preloaders';
import ReactLoading from "react-loading";
import "./components/home.css";
import UAuth from "@uauth/js";
import { useState } from "react";

import * as backend from "./builds/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
// import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
const stdlib = loadStdlib("ALGO");

stdlib.setWalletFallback(
  stdlib.walletFallback({
    providerEnv: "TestNet",
    MyAlgoConnect,
  })
);

const { standardUnit } = stdlib;
const defaultPrice = "20";
const defaultDeadline = "50";

const uauth = new UAuth({
  // These can be copied from the bottom of your app's configuration page.
  clientID: 'e6f20d26-5bca-4429-a9b4-942054fcdfc2',

  // These are the scopes your app is requesting from the ud server.
  scope: "openid email wallet",

  // This is the url that the auth server will redirect back to after every authorization attempt.
  redirectUri:'http://localhost:3000',
});

// const [errorMessage, setErrorMessage] = useState(null);



//       }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      mode: "Connect",
      first: true,
      errorMessage: "",
      user: "",
      redirectTo: "" };
  }

  componentDidMount() {
   const checker = () => {
      uauth.user()
        .then((user) => {
          // user exists
          // console.log("User information:", user)})
          this.setState({user: user}) })
        .catch(error => {
          console.error('profile error:', error)
          this.setState({redirectTo: + error.message})
          // setRedirectTo('/login?error=' + error.message)
        })
    }

    const callBack = () => {
      // Try to exchange authorization code for access and id tokens.
      uauth
        .loginCallback()
        // Successfully logged and cached user in `window.localStorage`
        .then(response => {
          console.log('loginCallback ->', response)
          // setRedirectTo('/profile')
        })
        // Failed to exchange authorization code for token.
        .catch(error => {
          console.error('callback error:', error)
          // setRedirectTo('/login?error=' + error.message)
        })
    }

    callBack();

    checker();
  }

  handleLoginButtonClick = (e) => {
    this.setState({errorMessage : ""});
    uauth.login().catch(function (error) {
      console.error("login error:", error);
      this.setState({errorMessage : error});
    });
  };

  changeColor = () => {
    this.setState({ first: !this.state.first });
  };

  asyncCallCreate = async () => {
    const acc = await stdlib.getDefaultAccount();
    // try {
    //   const faucet = await stdlib.getFaucet();
    //   stdlib.transfer(faucet, acc, stdlib.parseCurrency(100));
    // } catch (e) {
    //   console.error(e);
    // }
    console.log("acc", acc);
    this.setState({ mode: "Select", acc });
  };

  // asyncCallEvent = async () => {
  //     const acc = await stdlib.getDefaultAccount();
  //     try {
  //       const faucet = await stdlib.getFaucet();
  //       stdlib.transfer(faucet, acc, stdlib.parseCurrency(100));
  //     } catch (e) {
  //       console.error(e);
  //     }
  //     this.setState({mode: 'SelectEvent', acc });
  // }

  selectRole(role) {
    this.setState({ mode: "RunRole", role });
  }
  doCreate() {
    this.selectRole(<Create acc={this.state.acc} />);
  }
  doRSVP() {
    this.selectRole(<RSVP acc={this.state.acc} />);
  }
  doCheckin() {
    this.selectRole(<Checkin acc={this.state.acc} />);
  }
  doClose() {
    this.selectRole(<Close acc={this.state.acc} />);
  }
  render() {
    const { mode, addr, bal, role } = this.state;
    const parent = this;
    let app = null;
    if (mode === "Connect") {
      app = (
        <section className="hero">
          <div className="main-width">
            <header>
              <div className="logo">
               <p>MusicUP</p>
              </div>

              <nav>
                <div className="hamb" onClick={this.changeColor}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <ul className={this.state.first ? "nav-list" : "nav-list open"}>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li className="btn">
                    <a href="#">Sign up</a>
                  </li>
                </ul>
              </nav>
            </header>

            <div className="container">
              <div className="hero-text">
                <h1>
                  Welcome{" "}
                  <span className="input">To MusicUP.</span>
                </h1>
                <div className="list">
                  An RSVP application built with reach and deployed on algorand network,
                </div>
                <div></div>
                <div class="forbuttons">
                  <button type="button" onClick={this.asyncCallCreate}>
                    Connect Wallet
                  </button>
                </div>
              </div>

              <div className="bottom">
                <p>@ 2022 MusicUP - All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </section>
      );
    } else if (mode === "Select") {
      app = (
        <section className="hero">
          <div className="main-width">
          <header>
              <div className="logo">
               <p>MusicUP</p>
              </div>

              <nav>
                <div className="hamb" onClick={this.changeColor}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <ul className={this.state.first ? "nav-list" : "nav-list open"}>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li className="btn">
                    <a href="#">Sign up</a>
                  </li>
                </ul>
              </nav>
            </header>

            <div className="container">
              <div className="hero-text">
            
                <h1>
                  Welcome <span className="input">To MusicUP.</span>
                </h1>

                <div className="social">
                 <p>Quick Steps to Get Started !!</p>
                 <ul>
                  <li>Click on Create Events to Register new Event</li>
                  <li>Use the Events button to discover and RSVP for existing events </li>
                 </ul>
                </div>
                <div class="forbuttons">
                  <button type="button" onClick={() => parent.doCreate()}>
                    Create Events
                  </button>
                  <button type="button" onClick={() => parent.doRSVP()}>
                    Events
                  </button>
                </div>
              </div>

              <div className="bottom">
                <p>@ 2022 MusicUP - All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      // 'RunRole'
      app = role;
    }
    return <div className="App">{app}</div>;
  }
}

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ mode: "EnterInfo" });
  }

  callClose = () => {
    this.setState({ mode: "close" });
  };
  callCheckin = () => {
    this.setState({ mode: "checkin" });
  };

  async enterInfo(priceStandard, deadline) {
    const ctc = this.props.acc.contract(backend);
    this.setState({ mode: "Wait", priceStandard, deadline, ctc });
    console.log({ priceStandard, deadline });
    try {
      await ctc.p.Admin({
        price: stdlib.parseCurrency(priceStandard),
        deadline: stdlib.bigNumberify(deadline),
        ready: () => {
          throw 42;
        },
      });
    } catch (e) {
      if (e !== 42) {
        throw e;
      }
    }
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({ mode: "Done", ctcInfoStr });
  }
  render() {
    let me = null;
    const parent = this;
    const mode = this.state?.mode || "EnterInfo";
    if (mode === "EnterInfo") {
      const priceStandard = this.state?.priceStandard || defaultPrice;
      const deadline = this.state?.deadline || defaultDeadline;
      me = (
        <div className="hero">
          <div className="rsvp_part">
            <div className="form">
              <div className="title">Create An Event</div>

              <div className="input-container ic1">
                <input
                  className="inputy"
                  id="rsvp"
                  onChange={(e) =>
                    this.setState({
                      priceStandard: e.currentTarget.value,
                    })
                  }
                
                />
                <div class="cut"></div>
                <label for="rsvp" class="placeholder">
                  Rsvp fee
                </label>
              </div>

              <div className="input-container ic1">
                <input
                  className="inputy"
                  id="rsvp"
                  onChange={(e) =>
                    this.setState({
                      deadline: e.currentTarget.value,
                    })
                  }
                  
                />
                <div class="cut"></div>
                <label for="rsvp" class="placeholder">
                  Deadline
                </label>
              </div>
              <button
                class="submit"
                onClick={() => parent.enterInfo(priceStandard, deadline)}
              >
                Launch
              </button>
            </div>
          </div>
        </div>
      );
    } else if (mode === "Wait") {
      me = (
        <div className="loading_page">
          <ReactLoading
            type={"cylon"}
            color={"#f836e5"}
            height={300}
            width={200}
          />
          Please wait while your event is initialized.
        </div>
      );
    } else if (mode === "Done") {
      // 'Done'
      const ctcInfoStr = this.state?.ctcInfoStr || "";
      me = (
        <section class="hero">
          <div class="main-width">
          <header>
              <div className="logo">
               <p>MusicUP</p>
              </div>

              <nav>
                <div className="hamb" onClick={this.changeColor}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <ul className={this.state.first ? "nav-list" : "nav-list open"}>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li className="btn">
                    <a href="#">Sign up</a>
                  </li>
                </ul>
              </nav>
            </header>

            <div class="container">
              <div class="hero-text">
                <div className="form2">
                  <div className="subtitle1"> Admin </div>
                  <br />
                  <div className="subtitle">
                    {" "}
                    Your event is ready for users to RSVP to!
                    <br />
                    Please share the following contract info with them:
                    <pre className="ContractInfo">{ctcInfoStr}</pre>
                  </div>
                </div>
                <div class="forbuttons">
                  <button type="button" onClick={this.callClose}>
                    Close Event
                  </button>
                  <button type="button" onClick={this.callCheckin}>
                    Check-in 
                  </button>
                </div>
              </div>

              <div class="bottom">
                <p>@ 2022 MusicUP - All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </section>
        //div
      );
    } else if (mode === "close") {
      me = (
        <div>
          <Close acc={this.props.acc} />
        </div>
      );
    } else {
      me = (
        <div>
          <Checkin acc={this.props.acc} />
        </div>
      );
    }
    return <div className="Create">{me}</div>;
  }
}

class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ mode: "EnterInfo" });
  }
  async doRSVP(ctcInfoStr) {
    const ctcInfo = JSON.parse(ctcInfoStr);
    const ctc = this.props.acc.contract(backend, ctcInfo);
    this.setState({ mode: "Wait", ctc });
    // await ctc.apis.Attendee.iWillGo();
    this.setState({ mode: "Done" });
  }
  render() {
    let me = null;
    const parent = this;
    const mode = this.state?.mode || "EnterInfo";
    if (mode === "EnterInfo") {
      const ctcInfoStr = this.state?.ctcInfoStr || "";
      me = (
        <div className="hero">
          <div className="rsvp_part">
            <div className="form">
              <div className="title">RSVP an Event</div>
              <div className="input-container ic1">
                <input
                  id="ContractInfo"
                  className="inputy"
                  spellCheck="false"
                  onChange={(e) =>
                    this.setState({ ctcInfoStr: e.currentTarget.value })
                  }
                 
                />
                <div class="cut"></div>
                <label for="ContractInfo" className="placeholder">
                contract
                </label>
              </div>

              <button
                className="submit"
                disabled={!ctcInfoStr}
                onClick={() => parent.doRSVP(ctcInfoStr)}
              >
                RSVP
              </button>
            </div>
          </div>
        </div>
      );
    } else if (mode === "Wait") {
      me = (
        <div className="loading_page">
          <ReactLoading
            type={"cylon"}
            color={"#f836e5"}
            height={300}
            width={200}
          />
          Please wait while your RSVP is confirmed.{" "}
        </div>
      );
    } else {
      // 'Done'
      const { acc } = this.props;
      me = (
        <div className="loading_page">
         <p> You have RSVP'd.</p>
         <br/>  
        <p> Your address is:<span className="ContractInfo">{stdlib.formatAddress(acc)}</span></p> 
        </div>
      );
    }
    return <div className="RSVP">{me}</div>;
  }
}

class Checkin extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ mode: "EnterInfo" });
  }
  async doCheckin(ctcInfoStr, who) {
    const ctcInfo = JSON.parse(ctcInfoStr);
    const ctc = this.props.acc.contract(backend, ctcInfo);
    this.setState({ mode: "Wait", ctc, who });
    // await ctc.apis.Checkin.theyCame(who);
    this.setState({ mode: "Done" });
  }
  render() {
    let me = null;
    const parent = this;
    const mode = this.state?.mode || "EnterInfo";
    if (mode === "EnterInfo") {
      const ctcInfoStr = this.state?.ctcInfoStr || "";
      const who = this.state?.who || "";
      me = (
        <div className="hero">
          <div className="rsvp_part">
            <div className="form">
              <div class="title">Checkin </div>
              <div className="input-container ic1">
                <input
                  id="ContractInfo"
                  className="inputy"
                  spellCheck="false"
                  onChange={(e) =>
                    this.setState({ ctcInfoStr: e.currentTarget.value })
                  }
                />
                <div class="cut"></div>
                <label for="ContractInfo" class="placeholder">
                  Event Info
                </label>
              </div>

              <div className="input-container ic2">
                <input
                  id="who"
                  className="inputy"
                  onChange={(e) =>
                    this.setState({
                      who: e.currentTarget.value,
                    })
                  }
                />
                <div className="cut"></div>
                <label for="who" className="placeholder">
                  who
                </label>
              </div>

              <button
                className="submit"
                disabled={!ctcInfoStr}
                onClick={() => parent.doCheckin(ctcInfoStr, who)}
              >
                RSVP
              </button>
            </div>
          </div>
        </div>
      );
    } else if (mode === "Wait") {
      me = (
        <div>
          <ReactLoading
            type={"cylon"}
            color={"#f836e5"}
            height={300}
            width={200}
          />
          Please wait while your checkin is confirmed.
        </div>
      );
    } else {
      // 'Done'
      const who = this.state?.who || "";
      me = (
        <div>
          Done! You have checked in: <span>{who}</span> .
          <br />
        </div>
      );
    }
    return <div className="Checkin">{me}</div>;
  }
}

class Close extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ mode: "EnterInfo" });
  }
  async doClose(ctcInfoStr) {
    const ctcInfo = JSON.parse(ctcInfoStr);
    const ctc = this.props.acc.contract(backend, ctcInfo);
    this.setState({ mode: "Wait", ctc });
    await ctc.apis.Checkin.timesUp();
    this.setState({ mode: "Done" });
  }
  render() {
    let me = null;
    const parent = this;
    const mode = this.state?.mode || "EnterInfo";
    if (mode === "EnterInfo") {
      const ctcInfoStr = this.state?.ctcInfoStr || "";
      me = (
        <div className="hero">
          <div className="rsvp_part">
            <div className="form">
              <div class="title">Checkin an Event</div>
              <div className="input-container ic1">
                <input
                  id="ContractInfo"
                  className="inputy"
                  spellCheck="false"
                  onChange={(e) =>
                    this.setState({ ctcInfoStr: e.currentTarget.value })
                  }
                  placeholder="{}"
                />
                <div class="cut"></div>
                <label for="ContractInfo" class="placeholder">
                  Close Contract
                </label>
              </div>
              <button
                className="submit"
                // disabled={!ctcInfoStr}
                onClick={() => parent.doClose(ctcInfoStr)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      );
    } else if (mode === "Wait") {
      me = (
        <div className="loading_page">
          <ReactLoading
            type={"cylon"}
            color={"#f836e5"}
            height={300}
            width={200}
          />
          Please wait while your close is confirmed.
        </div>
      );
    } else {
      // 'Done'
      me = <div>You have closed the event.</div>;
    }
    return <div className="Close">{me}</div>;
  }
}

export default App;
