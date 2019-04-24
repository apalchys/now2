import React from "react";
import Head from "next/head";

function getBrowser() {
  if (window && window.navigator.platform.substr(0, 2) === "iP") {
    //iOS (iPhone, iPod or iPad)
    var lte9 = /constructor/i.test(window.HTMLElement);
    var nav = window.navigator,
      ua = nav.userAgent,
      idb = !!window.indexedDB;
    if (ua.indexOf("Safari") !== -1 && ua.indexOf("Version") !== -1 && !nav.standalone) {
      return "Safari";
    } else if ((!idb && lte9) || !window.statusbar.visible) {
      return "UIWebView";
    } else if ((window.webkit && window.webkit.messageHandlers) || !lte9 || idb) {
      return "WKWebView";
    }
  }
  return "n/a";
}

export default class Index extends React.Component {
  state = {
    browser: "n/a",
  };

  componentDidMount() {
    this.setState({
      browser: getBrowser(),
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
