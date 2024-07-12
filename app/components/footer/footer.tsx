import Link from "next/link";
import style from './footer.module.css'
import Image from "next/image";
import { FaDiscord, FaFacebookF, FaGithub, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { RiRedditLine } from "react-icons/ri";



const Footer = () => {

  var curYear = (new Date()).getFullYear() ; 
    return(
      <>

      <footer className={style.footer}>
          <div className="container">
            <div className="row">
              <div className={style.footerHead}>
                <div className="row align-items-center justify-content-between">
                <div className="col-md-4">

<a className={style.FooterLogo} href="/">
     <Image  width={0} height={0}  sizes="100vw" style={{ width: '100%', height: 'auto' }}  src="/assets/images/footer-logo.png" alt="" className="img-fluid" />
    </a>

</div>
                  <div className="col-md-7 ">
                 <p>CryptoCoin Bazar is the world's most-referenced price-tracking website for cryptoassets in the rapidly growing cryptocurrency space. Its mission is to make crypto discoverable and efficient globally by empowering retail users with unbiased, high quality and accurate information for drawing their own informed conclusions.</p>
                  </div>
                </div>
              </div>
              
            </div>
            <div className={style.footertop}>
              <div className="row">
                <div className="col-lg-2 col-md-6">
                  <div className={style.footerSingle}>
                    <h4>Company</h4>
                    <ul className={style.footerMenu}>
                      <li><Link href={'#'}>About us</Link></li>
                      <li><Link href={'#'}>Terms of use</Link></li>
                      <li><Link href={'#'}>Privacy Policy</Link></li>
                      <li><Link href={'#'}>Cookie preferences</Link></li>
                      <li><Link href={'#'}>Cookie policy</Link></li>
                      <li><Link href={'#'}>Community Rules</Link></li>
                      <li><Link href={'#'}>Disclaimer</Link></li> 
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className={style.footerSingle}>
                    <h4>Resources</h4>
                    <ul className={style.footerMenu}>
                      <li><Link href={'#'}>Product Updates</Link></li>
                      <li><Link href={'#'}>CMC Labs</Link></li>
                      <li><Link href={'#'}>Crypto API</Link></li>
                      <li><Link href={'#'}>Crypto Indices</Link></li>
                      <li><Link href={'#'}>Doodles</Link></li>
                      <li><Link href={'#'}>Sitemap</Link></li>
                      <li><Link href={'#'}>Advertise</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-5">
                  <div className={style.footerSingle}>
                    <h4>Support</h4>
                    <ul className={style.footerMenu}>
                      <li><Link href={'#'}>Request Form</Link></li>
                      <li><Link href={'#'}>Advertising</Link></li>
                      <li><Link href={'#'}>Candy Rewards </Link></li>
                      <li><Link href={'#'}>Listing </Link></li>
                      <li><Link href={'#'}>Help Center </Link></li>
                      <li><Link href={'#'}>Bug Bounty </Link></li>
                      <li><Link href={'#'}>FAQ </Link></li>
                    </ul>
                  </div>
                </div>
               
                <div className="col-lg-6 col-md-7">
                  <div className={`${style.footerSingle} text-md-end d-flex flex-wrap`}>
                  <ul className={`${style.footerSocial} w-100`}>
                    <li><span>FOLLOW US ON</span></li>
                    <li><Link href={"#"}><FaFacebookF /></Link></li>
                    <li><Link href={"#"}><FaGithub /></Link></li>
                    <li><Link href={"#"}><FaInstagram /></Link></li>
                    <li><Link href={"#"}><FaXTwitter /></Link></li>
                    <li><Link href={"#"}><FaDiscord /></Link></li>
                    <li><Link href={"#"}><RiRedditLine /></Link></li>
                    <li><Link href={"#"}><FaTelegramPlane /></Link></li>
                    
                    
                  </ul>
                  <div className={`${style.appDownloads} w-100`}>
                    <Link href={'#'}>
                    <Image  width={0} height={0}  sizes="100vw" style={{ width: 'auto', height: 'auto' }}  src="/assets/images/playstore.png" alt="" className="img-fluid" />
                    </Link>
                    <Link href={'#'}>
                    <Image  width={0} height={0}  sizes="100vw" style={{ width: 'auto', height: 'auto' }}  src="/assets/images/appstore.png" alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <p className="mt-md-auto w-100 text-md-end mt-2 ">&nbsp; {curYear} CryptoCoinsBazar. All Rights Reserved.</p>
                  </div>
                </div>
               
              </div>
            </div>
            <div className={style.footerBottom}>
              <div className="row align-items-center">
              
                <div className="col-md-12">
                  <p><strong>IMPORTANT DISCLAIMER:</strong>  All content provided herein our website, hyperlinked sites, associated applications, forums, blogs, social media accounts and other platforms (“Site”) is for your general information only, procured from third party sources. We make no warranties of any kind in relation to our content, including but not limited to accuracy and updatedness. No part of the content that we provide constitutes financial advice, legal advice or any other form of advice meant for your specific reliance for any purpose. Any use or reliance on our content is solely at your own risk and discretion. You should conduct your own research, review, analyse and verify our content before relying on them. Trading is a highly risky activity that can lead to major losses, please therefore consult your financial advisor before making any decision. No content on our Site is meant to be a solicitation or offer.
</p>
                </div>
              </div>
            </div>
          </div>
      </footer>
      
      </>
)
}
export default Footer;