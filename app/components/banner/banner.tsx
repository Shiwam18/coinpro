import Link from 'next/link'
import style from './banner.module.css'
import { FaCaretDown } from 'react-icons/fa'
import Image from 'next/image'
import BannerCard1 from './components/banner-card1'
import BannerCard2 from './components/banner-card2'
import BannerCard3 from './components/banner-card3'
export default function Banner(){
    return (
        <>
            <section className={style.banner}>
            <Image  width={0} height={0}  sizes="100vw" style={{ width: 'auto', height: 'auto' }}  src="/assets/images/banner.jpg" alt="" className={`${style.bannerImg} img-fluid`} /> 
                <div className={style.bannerContent}>
                <div className={style.bannerContentTop}>
                <div className="container">
                    <h1>Stay Updated with Live Crypto Prices</h1>
                    <p>The global cryptocurrency market cap today is $2.57 Trillion, <span className={`${style.down} ${style.coinMove}`}><FaCaretDown /> 3.59%</span> a change in the last 24 hours. <Link href='#'>Read More</Link> </p>
                </div>
                </div>
                

                </div>
            </section>
            <div className={style.bannerContentBottom}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <BannerCard1/>
                            </div>
                            <div className='col-lg-4'>
                                <BannerCard2/>
                            </div>
                            <div className='col-lg-4'>
                                <BannerCard3/>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}