"use client"
import Link from 'next/link'
import style from './transation.module.css'
import { BiCategory } from 'react-icons/bi'
import { TfiMenuAlt } from "react-icons/tfi";
import { SlLockOpen } from 'react-icons/sl'
import Image from 'next/image'
import { VscSettings } from 'react-icons/vsc';
import { FaCaretDown } from 'react-icons/fa';
import { useState } from 'react';
import MyLineChart from '@/app/components/chart/chart1';
import Pagination from '@/app/components/pagination/pagination';

const data = [
    {
      sl:1,
      Name: "Binance",
       Icon: "/assets/images/icon/binance.png",    Price: "1,000 BTC",
      Pair: "ETH/INRT",
      Depth2Pos: "177 BTC",
     Depth2Neg: "156 BTC",
      Volume24: "14,380 BTC",
      Volume: "6.85%",
     Liquidity: "1,053",
      Circulating: " 19,711,209 BTC",
      updated: "3 hours ago",
      move: "down"
    },
    {
        sl:2,
        Name: "Binance",
         Icon: "/assets/images/icon/binance.png",
        Price: "1,000 BTC",
        Pair: "ETH/INRT",
        Depth2Pos: "177 BTC",
       Depth2Neg: "156 BTC",
        Volume24: "14,380 BTC",
        Volume: "6.85%",
       Liquidity: "1,053",
        Circulating: " 19,711,209 BTC",
        updated: "3 hours ago",
        move: "down"
      },
    {
        sl:3,
        Name: "Binance",
         Icon: "/assets/images/icon/binance.png",        Price: "1,000 BTC",
        Pair: "ETH/INRT",
        Depth2Pos: "177 BTC",
       Depth2Neg: "156 BTC",
        Volume24: "14,380 BTC",
        Volume: "6.85%",
       Liquidity: "1,053",
        Circulating: " 19,711,209 BTC",
        updated: "3 hours ago",
        move: "up"
      },
      {
        sl:4,
        Name: "Binance",
         Icon: "/assets/images/icon/binance.png",
        Price: "1,000 BTC",
        Pair: "ETH/INRT",
        Depth2Pos: "177 BTC",
       Depth2Neg: "156 BTC",
        Volume24: "14,380 BTC",
        Volume: "6.85%",
       Liquidity: "1,053",
        Circulating: " 19,711,209 BTC",
        updated: "3 hours ago",
        move: "down"
      },
      {
        sl:5,
        Name: "Binance",
         Icon: "/assets/images/icon/binance.png",
        Price: "1,000 BTC",
        Pair: "ETH/INRT",
        Depth2Pos: "177 BTC",
       Depth2Neg: "156 BTC",
        Volume24: "14,380 BTC",
        Volume: "6.85%",
       Liquidity: "1,053",
        Circulating: " 19,711,209 BTC",
        updated: "3 hours ago",
        move: "up"
      },
      {
        sl:6,
        Name: "Binance",
         Icon: "/assets/images/icon/binance.png",
        Price: "1,000 BTC",
        Pair: "ETH/INRT",
        Depth2Pos: "177 BTC",
       Depth2Neg: "156 BTC",
        Volume24: "14,380 BTC",
        Volume: "6.85%",
       Liquidity: "1,053",
        Circulating: " 19,711,209 BTC",
        updated: "3 hours ago",
        move: "down"
      },
      {
        sl:7,
        Name: "Binance",
         Icon: "/assets/images/icon/binance.png",       Price: "1,000 BTC",
        Pair: "ETH/INRT",
        Depth2Pos: "177 BTC",
       Depth2Neg: "156 BTC",
        Volume24: "14,380 BTC",
        Volume: "6.85%",
       Liquidity: "1,053",
        Circulating: " 19,711,209 BTC",
        updated: "3 hours ago",
        move: "down"
      },
      {
        sl:8,
        Name: "Binance",
         Icon: "/assets/images/icon/binance.png",
        Price: "1,000 BTC",
        Pair: "ETH/INRT",
        Depth2Pos: "177 BTC",
       Depth2Neg: "156 BTC",
        Volume24: "14,380 BTC",
        Volume: "6.85%",
       Liquidity: "1,053",
        Circulating: " 19,711,209 BTC",
        updated: "3 hours ago",
        move: "down"
      },
      {
        sl:9,
        Name: "Binance",
         Icon: "/assets/images/icon/binance.png",       Price: "1,000 BTC",
        Pair: "ETH/INRT",
        Depth2Pos: "177 BTC",
       Depth2Neg: "156 BTC",
        Volume24: "14,380 BTC",
        Volume: "6.85%",
       Liquidity: "1,053",
        Circulating: " 19,711,209 BTC",
        updated: "3 hours ago",
        move: "down"
      },
      {
        sl:10,
        Name: "Binance",
         Icon: "/assets/images/icon/binance.png",
        Price: "1,000 BTC",
        Pair: "ETH/INRT",
        Depth2Pos: "177 BTC",
       Depth2Neg: "156 BTC",
        Volume24: "14,380 BTC",
        Volume: "6.85%",
       Liquidity: "1,053",
        Circulating: " 19,711,209 BTC",
        updated: "3 hours ago",
        move: "down"
      },
      {
        sl:11,
        Name: "Binance",
         Icon: "/assets/images/icon/binance.png",
        Price: "1,000 BTC",
        Pair: "ETH/INRT",
        Depth2Pos: "177 BTC",
       Depth2Neg: "156 BTC",
        Volume24: "14,380 BTC",
        Volume: "6.85%",
       Liquidity: "1,053",
        Circulating: " 19,711,209 BTC",
        updated: "3 hours ago",
        move: "down"
      },
      {
        sl:12,
        Name: "Binance",
        Icon: "/assets/images/icon/binance.png",
        Price: "1,000 BTC",
        Pair: "ETH/INRT",
        Depth2Pos: "177 BTC",
       Depth2Neg: "156 BTC",
        Volume24: "14,380 BTC",
        Volume: "6.85%",
       Liquidity: "1,053",
        Circulating: " 19,711,209 BTC",
        updated: "3 hours ago",
        move: "down"
      },







  ]
export default function Transation(){
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 112;
  
    const handlePageChange = (pageNumber:number) => {
      setCurrentPage(pageNumber);
    };
    return(
        <>
            <section className={style.coinTable}>
            <div className='container'>
        <div className="col-md-12">
                            <div className={style.dashboardHead}>
                            <h2 className={style.sectionHead}>Ethereum Markets</h2>
                            <div className={style.dashboardHeadleft}>
                              
                            <ul className=" dashboardtabHead">
                            <li className="nav-item">
                            <a className="nav-link active" href='#'>
                            ALL
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href='#' >
                            CEX
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href='#'>
                            DEX
                            </a>
                            </li>
                        </ul>
                        
                        <ul className=" dashboardtabHead">
                            <li className="nav-item">
                            <a className="nav-link active" href='#'>
                            Spot
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href='#' >
                            Perpetuals
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href='#'>
                            Futures
                            </a>
                            </li>
                        </ul>
                        
                       
                            </div>
                            

                        </div>
                        
                           
                        </div>
        </div>
                <div className='container'>
                <div className={style.coinTableHead}>
         
                    
                
            </div>
                    <div className={`${style.CoinTableList} coin-table` }>
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr>
                               
                                    <th html-width="50px">#</th>
                                    <th html-width="200px">Exchange</th>
                                    <th html-width="132px">Pair</th>
                                    <th html-width="120px">Price</th>
                                    <th html-width="120px">+2% Depth</th>
                                    <th html-width="180px">-2% Depth</th>
                                    <th html-width="175px">Volume 24H</th>
                                    <th html-width="240px">Volume %</th>
                                    <th html-width="240px">Liquidity Score</th>
                                    <th >Updated</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                            {
                            data.map((item, index) => (
                                <tr>
                                <td >{item.sl}</td>
                                <td >{ <Image src={item.Icon} alt="btc" width={0} height={0} sizes="100vw" style={{ width: '24px', height: 'auto' }} className={style.coinIcon}/>} {item.Name}</td>
                                <td >{item.Pair}</td>
                                <td > {item.Price}</td>
                                <td >{item.Depth2Pos}</td>
                                <td > {item.Depth2Neg}</td>
                                <td >{item.Volume24}</td>
                                <td >{item.Volume} </td>
                                <td >{item.Liquidity}</td>
                                <td >{item.updated} </td>
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
                                    <p>Showing 1 - 10 out of 4047</p>
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