"use client"
import Link from 'next/link'
import style from './coin-table.module.css'
import { BiCategory } from 'react-icons/bi'
import { TfiMenuAlt } from "react-icons/tfi";
import { SlLockOpen } from 'react-icons/sl'
import Image from 'next/image'
import { VscSettings } from 'react-icons/vsc';
import { FaCaretDown } from 'react-icons/fa';
import { useState } from 'react';
import Pagination from '../pagination/pagination';
import MyLineChart from '../chart/chart1';
const data = [
    {
      sl:1,
      Name: "Bitcoin BTC",
      Icon: '/assets/images/icon/1.png' ,
      Price: "1,000 BTC",
      Onehr: "0.00%",
      TwentyFourhr: "0.00%",
      SevenDay: "0.00%",
      Marketcap: "19,711,209 BTC",
      Volume: "430,425 BTC",
      VolumeMove: "430,425 BTC",
      Circulating: " 19,711,209 BTC",
      Lastsevendays: "-ve",
      move: "down"
    },
    {
        sl:2,
        Name: "Ethereum",
        Icon: '/assets/images/icon/1027.png' ,
        Price: "1,000 BTC",
        Onehr: "0.00%",
        TwentyFourhr: "0.00%",
        SevenDay: "0.00%",
        Marketcap: "19,711,209 BTC",
        Volume: "430,425 BTC",
        VolumeMove: "430,425 BTC",
        Circulating: " 19,711,209 BTC",
        Lastsevendays: "-ve",
        move: "down"
      },
    {
        sl:3,
        Name: "Tether",
        Icon: '/assets/images/icon/825.png' ,
        Price: "1,000 BTC",
        Onehr: "0.00%",
        TwentyFourhr: "0.00%",
        SevenDay: "0.00%",
        Marketcap: "19,711,209 BTC",
        Volume: "430,425 BTC",
        VolumeMove: "430,425 BTC",
        Circulating: " 19,711,209 BTC",
        Lastsevendays: "-ve",
        move: "up"
      },
      {
        sl:4,
        Name: "BNB",
        Icon: '/assets/images/icon/1839.png' ,
        Price: "1,000 BTC",
        Onehr: "0.00%",
        TwentyFourhr: "0.00%",
        SevenDay: "0.00%",
        Marketcap: "19,711,209 BTC",
        Volume: "430,425 BTC",
        VolumeMove: "430,425 BTC",
        Circulating: " 19,711,209 BTC",
        Lastsevendays: "-ve",
        move: "down"
      },
      {
        sl:5,
        Name: "Solana",
        Icon: '/assets/images/icon/5426.png' ,
        Price: "1,000 BTC",
        Onehr: "0.00%",
        TwentyFourhr: "0.00%",
        SevenDay: "0.00%",
        Marketcap: "19,711,209 BTC",
        Volume: "430,425 BTC",
        VolumeMove: "430,425 BTC",
        Circulating: " 19,711,209 BTC",
        Lastsevendays: "-ve",
        move: "up"
      },
      {
        sl:6,
        Name: "USDC        ",
        Icon: '/assets/images/icon/3408.png' ,
        Price: "1,000 BTC",
        Onehr: "0.00%",
        TwentyFourhr: "0.00%",
        SevenDay: "0.00%",
        Marketcap: "19,711,209 BTC",
        Volume: "430,425 BTC",
        VolumeMove: "430,425 BTC",
        Circulating: " 19,711,209 BTC",
        Lastsevendays: "-ve",
        move: "down"
      },
      {
        sl:7,
        Name: "XRP",
        Icon: '/assets/images/icon/52.png' ,
        Price: "1,000 BTC",
        Onehr: "0.00%",
        TwentyFourhr: "0.00%",
        SevenDay: "0.00%",
        Marketcap: "19,711,209 BTC",
        Volume: "430,425 BTC",
        VolumeMove: "430,425 BTC",
        Circulating: " 19,711,209 BTC",
        Lastsevendays: "-ve",
        move: "down"
      },
      {
        sl:8,
        Name: "Toncoin",
        Icon: '/assets/images/icon/11419.png' ,
        Price: "1,000 BTC",
        Onehr: "0.00%",
        TwentyFourhr: "0.00%",
        SevenDay: "0.00%",
        Marketcap: "19,711,209 BTC",
        Volume: "430,425 BTC",
        VolumeMove: "430,425 BTC",
        Circulating: " 19,711,209 BTC",
        Lastsevendays: "-ve",
        move: "down"
      },
      {
        sl:9,
        Name: "Dogecoin",
        Icon: '/assets/images/icon/74.png' ,
        Price: "1,000 BTC",
        Onehr: "0.00%",
        TwentyFourhr: "0.00%",
        SevenDay: "0.00%",
        Marketcap: "19,711,209 BTC",
        Volume: "430,425 BTC",
        VolumeMove: "430,425 BTC",
        Circulating: " 19,711,209 BTC",
        Lastsevendays: "-ve",
        move: "down"
      },
      {
        sl:10,
        Name: "Cardano",
        Icon: '/assets/images/icon/2010.png' ,
        Price: "1,000 BTC",
        Onehr: "0.00%",
        TwentyFourhr: "0.00%",
        SevenDay: "0.00%",
        Marketcap: "19,711,209 BTC",
        Volume: "430,425 BTC",
        VolumeMove: "430,425 BTC",
        Circulating: " 19,711,209 BTC",
        Lastsevendays: "-ve",
        move: "down"
      },
      {
        sl:11,
        Name: "TRON",
        Icon: '/assets/images/icon/1958.png' ,
        Price: "1,000 BTC",
        Onehr: "0.00%",
        TwentyFourhr: "0.00%",
        SevenDay: "0.00%",
        Marketcap: "19,711,209 BTC",
        Volume: "430,425 BTC",
        VolumeMove: "430,425 BTC",
        Circulating: " 19,711,209 BTC",
        Lastsevendays: "-ve",
        move: "down"
      },
      {
        sl:12,
        Name: "Avalanche",
        Icon: '/assets/images/icon/5805.png' ,
        Price: "1,000 BTC",
        Onehr: "0.00%",
        TwentyFourhr: "0.00%",
        SevenDay: "0.00%",
        Marketcap: "19,711,209 BTC",
        Volume: "430,425 BTC",
        VolumeMove: "430,425 BTC",
        Circulating: " 19,711,209 BTC",
        Lastsevendays: "-ve",
        move: "down"
      },







  ]
export default function CoinTable(){
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 112;
  
    const handlePageChange = (pageNumber:number) => {
      setCurrentPage(pageNumber);
    };
    return(
        <>
            <section className={style.coinTable}>
            
                <div className='container'>
                <div className={style.coinTableHead}>
         
                    <div className={style.coinTableHeadInner}>
                        <div className={style.coinTableHeadSingle}>
                            <Link href={'#'} className={`${style.CoinHeadLink} ${style.active}`}><BiCategory /> All</Link>
                            <Link href={'#'} className={style.CoinHeadLink}><TfiMenuAlt /> Categories</Link>
                            <Link href={'#'} className={style.CoinHeadLink}><SlLockOpen /> Token Unlocks</Link>
                            <Link href={'#'} className={style.CoinHeadLink}> NFTs</Link>
                        </div> 
                        <div className={`${style.coinTableHeadSingle} d-none d-lg-inline-block` }>
                            <Link href={'#'} className={style.CoinHeadBtn}> <Image width={0} height={0} sizes="100vw" style={{ width: '20px', height: 'auto' }} src={'/assets/images/icon/trending2.png'} alt="" className={'img-fluid'} />
                             Memes</Link>
                             <Link href={'#'} className={style.CoinHeadBtn}> <Image width={0} height={0} sizes="100vw" style={{ width: '20px', height: 'auto' }} src={'/assets/images/icon/trending2.png'} alt="" className={'img-fluid'} />
                             Strategy Games</Link>
                             <Link href={'#'} className={style.CoinHeadBtn}> <Image width={0} height={0} sizes="100vw" style={{ width: '20px', height: 'auto' }} src={'/assets/images/icon/trending2.png'} alt="" className={'img-fluid'} />
                             AI</Link>
                             
                        </div>
                        <div className={style.coinTableHeadSingle}>
                            <Link href={'#'} className={style.CoinHeadLink}><VscSettings /> Customize</Link>
                        </div> 
                    </div>
                
                    </div>
                    <div className={`${style.CoinTableList} coin-table` }>
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr>
                               
                                    <th html-width="50px">#</th>
                                    <th html-width="200px">Name</th>
                                    <th html-width="132px">Price</th>
                                    <th html-width="120px">1h %</th>
                                    <th html-width="120px">24h %</th>
                                    <th html-width="180px">7d %</th>
                                    <th html-width="175px">Market Cap</th>
                                    <th html-width="240px">Volume(24h)</th>
                                    <th html-width="240px">Circulating Supply</th>
                                    <th >Last 7 Days</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                            {
                            data.map((item, index) => (
                                <tr>
                                <td >{item.sl}</td>
                                <td >{ <Image src={item.Icon} alt="btc" width={0} height={0} sizes="100vw" style={{ width: '24px', height: 'auto' }} className={style.coinIcon}/>} {item.Name}</td>
                                <td >{item.Price}</td>
                                <td ><span className={item.move==="down"?style.down:style.up}><FaCaretDown /> {item.Onehr}</span></td>
                                <td ><span className={item.move==="down"?style.down:style.up}><FaCaretDown /> {item.TwentyFourhr}</span></td>
                                <td ><span className={item.move==="down"?style.down:style.up}><FaCaretDown /> {item.SevenDay}</span></td>
                                <td >{item.Marketcap}</td>
                                <td >{item.Volume} <small>{item.VolumeMove}</small> </td>
                                <td >{item.Circulating}</td>
                                <td ><MyLineChart/> </td>
                                </tr>
                            ))
                            }
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className={style.coinTableFooter}>
                            <div className='row align-items-center'>
                                <div className='col-lg-6 text-center text-md-start mt-3 mt-md-0'>
                                    <p>Find out how we work by clicking here.   <Link href={'#'}>Read More</Link> </p>
                                </div>
                                <div className='col-lg-6'>
                                <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}