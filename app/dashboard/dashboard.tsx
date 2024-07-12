"use client";
import React from "react";
import style from "./dashboard.module.css";
import Link from "next/link";
import { LuDownload } from "react-icons/lu";
import { MdCandlestickChart, MdOutlineShowChart } from "react-icons/md";
import DashboardSidebar from "./sidebar/sidebar";
import Compare from "./compare/compare";
import Transation from "./transation/transation";
import Conveter from "./converter/Converter";
import HistoryData from "./history/History";
import MyLineChart4 from "../components/chart/chart4";
import { useSession } from "next-auth/react";

export default function UserDashboard() {
    const session = useSession();
  return (
    <>
      { session.data && <>  <section className="dashboard section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={style.dashboardHeader}>
                <ul>
                  <li>
                    <Link href={"#"} className={style.active}>
                      Chart
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>Markets</Link>
                  </li>
                  <li>
                    <Link href={"#"}>News</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Similar Coins</Link>
                  </li>
                  <li>
                    <Link href={"#"}>About</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className={style.dashboardHead}>
                <div className={style.dashboardHeadleft}>
                  <ul className="nav nav-tabs dashboardtabHead">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#home"
                      >
                        Price
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#menu1"
                      >
                        Market Cap
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#menu2"
                      >
                        Treading view
                      </a>
                    </li>
                  </ul>
                  <ul
                    className={`${style.dashboardHeadleftRight} dashboardtabHead`}
                  >
                    <li>
                      <Link href={"#"} className="nav-link active">
                        <MdOutlineShowChart />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        <MdCandlestickChart />{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={style.dashboardHeadleft}>
                  <ul
                    className={`${style.dashboardHeadRightleft} dashboardtabHead`}
                  >
                    <li>
                      <Link href={"#"} className="nav-link active">
                        1D
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>7D</Link>
                    </li>
                    <li>
                      <Link href={"#"}>1M</Link>
                    </li>
                    <li>
                      <Link href={"#"}>1Y</Link>
                    </li>
                    <li>
                      <Link href={"#"}>ALL</Link>
                    </li>
                    <li>
                      <Link href={"#"}>LOG</Link>
                    </li>
                  </ul>
                  <div className={style.dashboardHeadRightRight}>
                    <button className={style.downloadbtn}>
                      <LuDownload />
                    </button>
                    <div className={`${style.switch} form-check form-switch`}>
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Show annotations
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content">
                <div className="tab-pane container active" id="home">
                  <MyLineChart4 />
                </div>
                <div className="tab-pane container fade" id="menu1">
                  <MyLineChart4 />
                </div>
                <div className="tab-pane container fade" id="menu2">
                  <MyLineChart4 />
                </div>
              </div>
              <Compare />
              <div className="row">
                <div className="col-md-4 mb-3 mb-lg-0">
                  <h2 className={style.sectionHead}>ETH Converter</h2>
                  <Conveter />
                </div>
                <div className="col-md-8 mb-3 mb-lg-0">
                  <h2 className={style.sectionHead}>ETH Historical Price</h2>
                  <HistoryData />
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-md-4 mt-lg-0">
              <DashboardSidebar />
            </div>
          </div>
        </div>
      </section>

      <Transation />

      <section className={`${style.faq} faq`}>
        <div className="container">
          <div className="section-head pb-3">
            <h2 className="section-title">About Ethereum</h2>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  1. What Is Ethereum (ETH)?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Ethereum is a decentralized open-source blockchain system
                    that features its own cryptocurrency, Ether. ETH works as a
                    platform for numerous other cryptocurrencies, as well as for
                    the execution of decentralized smart contracts.
                  </p>
                  <p>
                    Ethereum was first described in a 2013 whitepaper by Vitalik
                    Buterin. Buterin, along with other co-founders, secured
                    funding for the project in an online public crowd sale in
                    the summer of 2014. The project team managed to raise $18.3
                    million in Bitcoin, and Ethereum&rsquo;s price in the
                    Initial Coin Offering (ICO) was $0.311, with over 60 million
                    Ether sold. Taking Ethereum&rsquo;s price now, this puts the
                    return on investment (ROI) at an annualized rate of over
                    270%, essentially almost quadrupling your investment every
                    year since the summer of 2014.
                  </p>
                  <p>
                    The Ethereum Foundation officially launched the blockchain
                    on July 30, 2015, under the prototype codenamed
                    &ldquo;Frontier.&rdquo; Since then, there has been several
                    network updates &mdash; &ldquo;Constantinople&rdquo; on Feb.
                    28, 2019, &ldquo;Istanbul&rdquo; on Dec. 8, 2019,
                    &ldquo;Muir Glacier&rdquo; on Jan. 2, 2020,
                    &ldquo;Berlin&rdquo; on April 14, 2021, and most recently on
                    Aug. 5, 2021, the &ldquo;London&rdquo; hard fork.
                  </p>
                  <p>
                    Ethereum&rsquo;s own purported goal is to become a global
                    platform for decentralized applications, allowing users from
                    all over the world to write and run software that is
                    resistant to censorship, downtime and fraud.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  2. What Makes Ethereum Unique?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Ethereum is a decentralized open-source blockchain system
                    that features its own cryptocurrency, Ether. ETH works as a
                    platform for numerous other cryptocurrencies, as well as for
                    the execution of decentralized smart contracts.
                  </p>
                  <p>
                    Ethereum was first described in a 2013 whitepaper by Vitalik
                    Buterin. Buterin, along with other co-founders, secured
                    funding for the project in an online public crowd sale in
                    the summer of 2014. The project team managed to raise $18.3
                    million in Bitcoin, and Ethereum&rsquo;s price in the
                    Initial Coin Offering (ICO) was $0.311, with over 60 million
                    Ether sold. Taking Ethereum&rsquo;s price now, this puts the
                    return on investment (ROI) at an annualized rate of over
                    270%, essentially almost quadrupling your investment every
                    year since the summer of 2014.
                  </p>
                  <p>
                    The Ethereum Foundation officially launched the blockchain
                    on July 30, 2015, under the prototype codenamed
                    &ldquo;Frontier.&rdquo; Since then, there has been several
                    network updates &mdash; &ldquo;Constantinople&rdquo; on Feb.
                    28, 2019, &ldquo;Istanbul&rdquo; on Dec. 8, 2019,
                    &ldquo;Muir Glacier&rdquo; on Jan. 2, 2020,
                    &ldquo;Berlin&rdquo; on April 14, 2021, and most recently on
                    Aug. 5, 2021, the &ldquo;London&rdquo; hard fork.
                  </p>
                  <p>
                    Ethereum&rsquo;s own purported goal is to become a global
                    platform for decentralized applications, allowing users from
                    all over the world to write and run software that is
                    resistant to censorship, downtime and fraud.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  3. History of Ethereum
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Ethereum is a decentralized open-source blockchain system
                    that features its own cryptocurrency, Ether. ETH works as a
                    platform for numerous other cryptocurrencies, as well as for
                    the execution of decentralized smart contracts.
                  </p>
                  <p>
                    Ethereum was first described in a 2013 whitepaper by Vitalik
                    Buterin. Buterin, along with other co-founders, secured
                    funding for the project in an online public crowd sale in
                    the summer of 2014. The project team managed to raise $18.3
                    million in Bitcoin, and Ethereum&rsquo;s price in the
                    Initial Coin Offering (ICO) was $0.311, with over 60 million
                    Ether sold. Taking Ethereum&rsquo;s price now, this puts the
                    return on investment (ROI) at an annualized rate of over
                    270%, essentially almost quadrupling your investment every
                    year since the summer of 2014.
                  </p>
                  <p>
                    The Ethereum Foundation officially launched the blockchain
                    on July 30, 2015, under the prototype codenamed
                    &ldquo;Frontier.&rdquo; Since then, there has been several
                    network updates &mdash; &ldquo;Constantinople&rdquo; on Feb.
                    28, 2019, &ldquo;Istanbul&rdquo; on Dec. 8, 2019,
                    &ldquo;Muir Glacier&rdquo; on Jan. 2, 2020,
                    &ldquo;Berlin&rdquo; on April 14, 2021, and most recently on
                    Aug. 5, 2021, the &ldquo;London&rdquo; hard fork.
                  </p>
                  <p>
                    Ethereum&rsquo;s own purported goal is to become a global
                    platform for decentralized applications, allowing users from
                    all over the world to write and run software that is
                    resistant to censorship, downtime and fraud.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  4. What can Ether (ETH) be Used For?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Ethereum is a decentralized open-source blockchain system
                    that features its own cryptocurrency, Ether. ETH works as a
                    platform for numerous other cryptocurrencies, as well as for
                    the execution of decentralized smart contracts.
                  </p>
                  <p>
                    Ethereum was first described in a 2013 whitepaper by Vitalik
                    Buterin. Buterin, along with other co-founders, secured
                    funding for the project in an online public crowd sale in
                    the summer of 2014. The project team managed to raise $18.3
                    million in Bitcoin, and Ethereum&rsquo;s price in the
                    Initial Coin Offering (ICO) was $0.311, with over 60 million
                    Ether sold. Taking Ethereum&rsquo;s price now, this puts the
                    return on investment (ROI) at an annualized rate of over
                    270%, essentially almost quadrupling your investment every
                    year since the summer of 2014.
                  </p>
                  <p>
                    The Ethereum Foundation officially launched the blockchain
                    on July 30, 2015, under the prototype codenamed
                    &ldquo;Frontier.&rdquo; Since then, there has been several
                    network updates &mdash; &ldquo;Constantinople&rdquo; on Feb.
                    28, 2019, &ldquo;Istanbul&rdquo; on Dec. 8, 2019,
                    &ldquo;Muir Glacier&rdquo; on Jan. 2, 2020,
                    &ldquo;Berlin&rdquo; on April 14, 2021, and most recently on
                    Aug. 5, 2021, the &ldquo;London&rdquo; hard fork.
                  </p>
                  <p>
                    Ethereum&rsquo;s own purported goal is to become a global
                    platform for decentralized applications, allowing users from
                    all over the world to write and run software that is
                    resistant to censorship, downtime and fraud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>}
    </>
  );
}
