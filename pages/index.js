import React from "react";
import Head from "next/head";

function getBrowser() {
  if (window && window.navigator.platform.substr(0, 2) === "iP") {
    if ((window.webkit && window.webkit.messageHandlers)) {
      return "WKWebView";
    } else {
      return "Safari";
    }
  }
  return "n/a";
}

function getUserAgent() {
  return window.navigator.userAgent;
}

export default class Index extends React.Component {
  state = {
    browser: "n/a",
    userAgent: '',
  };

  componentDidMount() {
    this.setState({
      browser: getBrowser(),
      userAgent: getUserAgent(),
    });
  }

  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <div className="hero">
          <h1 className="title">{this.state.browser}</h1>
          <h1 className="title">{this.state.userAgent}</h1>
        </div>

        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
            text-align: center;
          }
          .title {
            font-family: sans-serif;
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
        `}</style>
      </div>
    );
  }
}
