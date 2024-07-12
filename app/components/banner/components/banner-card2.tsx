"use client"
import Link from "next/link";
import style from './banner-card.module.css'
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight, FaCaretDown } from "react-icons/fa";
import MyLineChart2 from "../../chart/chart2";
import MyLineChart from "../../chart/chart1";




const BannerCard2 = () => {
    const coinList =[
        { id: 1, name: "io.net   IO", image: "/assets/images/icon/io-coin.png", change:"13.93%" ,move: "down"},
        { id: 1, name: "AI Analysis Token   AIAT", image: "/assets/images/icon/ai-token.png", change:"8.02%" ,move: "up"},
        { id: 1, name: "Super Trump   STRUMP", image: "/assets/images/icon/super-trump.png", change:"9.73%" ,move: "down"},
        { id: 1, name: "MANTRA", image: "/assets/images/icon/mantra.png", change:"9.68%" ,move: "down"},
        
    ];
    
  return (
    <>
      <div className={style.bannerCard}>
      <div className={style.chartSingle}>
      <div className={style.chartSingleContent}>
        <h4>$ 2,572,576,604,106 </h4>
        <p>Market Cap <span className={style.down}><FaCaretDown /> 3.7%</span></p>
      </div>
      <div className={style.chartSingleChart}>

                        <MyLineChart  />
     
      </div>
      </div>
      <div className={style.chartSingle}>
      <div className={style.chartSingleContent}>
        <h4>₹ 119,738,302,159</h4>
        <p>24h Trading Volume</p>
      </div>
      <div className={style.chartSingleChart}>

                        <MyLineChart2 />

      </div>
      </div>
      
      </div>

    </>
  )
}
export default BannerCard2;