"use client"
import Link from "next/link";
import style from './banner-card.module.css'
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight, FaCaretDown } from "react-icons/fa";
import DoughnutChart from "../../chart/chart3";
import { useState } from "react";
import { ChartData, ChartOptions } from 'chart.js';



const BannerCard3 = () => {
  
  
  const [data, setData] = useState<ChartData<'doughnut'>>({
    // labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [9, 9, 9, 9, 9],
        backgroundColor: [
          'rgba(234, 57, 67, 1)',
          'rgba(234, 140, 0, 1)',
          'rgba(252, 244, 201, 1)',
          'rgba(147, 217, 0, 1)',
          'rgba(22, 199, 132, 1)',
        ],
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 56,
      },
    ],
  });

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '95%',
    circumference : 180,
    rotation: 270,
    aspectRatio:1,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
    
  return (
    <>
      <div className={style.bannerCard}>
       <div className={style.coinListHead}>
        <span> Fear & Greed Index</span>
        <Link href={'#'}>View More <FaArrowRight /></Link>
       </div>
       <div className={style.chartDonat}>
       <DoughnutChart data={data} options={options}  />
       </div>
      </div>

    </>
  )
}
export default BannerCard3;