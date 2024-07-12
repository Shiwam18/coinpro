"use client"
import Image from "next/image";
import style from "./page.module.css";

import Banner from "./components/banner/banner";
import CoinTable from "./components/coin-table/coin-table";
import { useSession } from "next-auth/react";
import Dashboard from "./dashboard/page";

export default function Home() {
    const session = useSession();
  return (
    <>
      
      {!session.data?<><Banner />
      <CoinTable />
      <section className={`${style.faq} faq`}>
        <div className="container">
          <div className="section-head">
            <h2 className="section-title text-center">Crypto Questions Uncovered</h2>
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
                  1. How Do We Calculate Our Cryptocurrency Prices?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Almost. We have a process that we use to verify assets. Once verified, we create a coin description page like this. The world of crypto now contains many coins and tokens that we feel unable to verify. In those situations, our Dexscan product lists them automatically by taking on-chain data for newly created smart contracts. We do not cover every chain, but at the time of writing we track the top 70 crypto chains, which means that we list more than 97% of all tokens.
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
                  2. Does CryptoCoinsBazar.com List All Cryptocurrencies?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Almost. We have a process that we use to verify assets. Once verified, we create a coin description page like this. The world of crypto now contains many coins and tokens that we feel unable to verify. In those situations, our Dexscan product lists them automatically by taking on-chain data for newly created smart contracts. We do not cover every chain, but at the time of writing we track the top 70 crypto chains, which means that we list more than 97% of all tokens.
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
                  3. How Big Is the Global Coin Market?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Almost. We have a process that we use to verify assets. Once verified, we create a coin description page like this. The world of crypto now contains many coins and tokens that we feel unable to verify. In those situations, our Dexscan product lists them automatically by taking on-chain data for newly created smart contracts. We do not cover every chain, but at the time of writing we track the top 70 crypto chains, which means that we list more than 97% of all tokens.
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
                  4. What Is an NFT?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Almost. We have a process that we use to verify assets. Once verified, we create a coin description page like this. The world of crypto now contains many coins and tokens that we feel unable to verify. In those situations, our Dexscan product lists them automatically by taking on-chain data for newly created smart contracts. We do not cover every chain, but at the time of writing we track the top 70 crypto chains, which means that we list more than 97% of all tokens.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className={style.subscribe}>
        <Image  width={0} height={0}  sizes="100vw" style={{ width: 'auto', height: 'auto' }}  src="/assets/images/subscribe-bg.jpg" alt="" className={`${style.subscribeBg} img-fluid`} /> 
        <div className={style.subscribeContent}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
              <h2 className="section-title">Stay Ahead in Crypto</h2>
            <p>Keep yourself updated with the latest cryptocurrency news, research findings, reward programs, event updates, coin listings, and more from CryptoCoinsBazar. Subscribe to our email updates and never miss a beat in the crypto world!</p>
            <div className={style.subscribefrom}>
              <form>
                <input type="email" placeholder="Enter your e-mail address"/>
                <button type="submit">Subscribe</button>

              </form>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section></>:<><Dashboard /></>}
      
    </>
  );
}
