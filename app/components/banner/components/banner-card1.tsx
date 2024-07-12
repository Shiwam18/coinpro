import Link from "next/link";
import style from './banner-card.module.css'
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight, FaCaretDown } from "react-icons/fa";




const BannerCard1 = () => {
    const coinList =[
        { id: 1, name: "io.net   IO", image: "/assets/images/icon/io-coin.png", change:"13.93%" ,move: "down"},
        { id: 1, name: "AI Analysis Token   AIAT", image: "/assets/images/icon/ai-token.png", change:"8.02%" ,move: "up"},
        { id: 1, name: "Super Trump   STRUMP", image: "/assets/images/icon/super-trump.png", change:"9.73%" ,move: "down"},
     
        
    ];
    
  return (
    <>
      <div className={style.bannerCard}>
       <div className={style.coinListHead}>
        <span> <Image width={0} height={0} sizes="100vw" style={{ width: '16px', height: 'auto' }} src={'/assets/images/icon/trending.png'} alt="" className={'img-fluid'} />Trending</span>
        <Link href={'#'}>View More <FaArrowRight /></Link>
       </div>
        <ul className={style.bannerCardUl}>
        {coinList.map ((data:any,i:any) => (
            <li>
           
           
            <div className={style.bannerCardUlSingle}>
            <Image width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} src={data.image} alt="" className={style.bannerCardIcon} />
            <span className={style.coinName}>{data.name} </span>
            
            </div>
            
            <div className={`${style.bannerCardUlSingle} ${style.coinChange}`}>
               
                <span className={data.move==="down"?style.down:style.up}><FaCaretDown /> {data.change}</span>
               
                
            </div>
            </li>
                ))}

           
        </ul>
      </div>

    </>
  )
}
export default BannerCard1;