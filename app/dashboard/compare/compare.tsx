
import Link from 'next/link';
import style from './compare.module.css'

import Image from 'next/image'
import { IoMdArrowDropdown } from 'react-icons/io';

const Compare = () => {
    const data = [
        {
            id: 1,
            time:'1H',
            change:'48.93%',
            move:'up'

        },
        {
            id: 1,
            time:'1H',
            change:'48.93%',
            move:'up'

        },
        {
            id: 1,
            time:'1H',
            change:'48.93%',
            move:'up'

        },
        {
            id: 1,
            time:'1H',
            change:'48.93%',
            move:'up'

        },
        {
            id: 1,
            time:'1H',
            change:'48.93%',
            move:'up'

        }

    ]
    return (
        <>
            <div className={style.compareHead}>
                <select
                    className={`${style.compareDropdown} form-select`}
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                >
                    <option >10 more</option>
                    <option value={1}>20 more</option>
                    <option value={2}>30 more</option>
                    <option value={3}>40 more</option>
                </select>
                <span>Need more data?   <Link href='#'>Explore our API</Link> </span>
            </div>
            <div className={style.compareList}>
            {/* {
              data.map((data) => (
<div className={style.compareListSingle}>
                    <div className={style.compareListSingleHead}>
                        <span>{data.time}</span>
                    </div>
                    <div className={style.compareListSingleBody}>
                        <span className={style.{data.change}}><IoMdArrowDropdown /> {data.change}</span>
                    </div>
                </div>
              ))
} */}
                
                <div className={style.compareListSingle}>
                    <div className={style.compareListSingleHead}>
                        <span>24H</span>
                    </div>
                    <div className={style.compareListSingleBody}>
                        <span className={style.up}><IoMdArrowDropdown /> 48.93%</span>
                    </div>
                </div>
                <div className={style.compareListSingle}>
                    <div className={style.compareListSingleHead}>
                        <span>7D</span>
                    </div>
                    <div className={style.compareListSingleBody}>
                        <span className={style.up}><IoMdArrowDropdown /> 48.93%</span>
                    </div>
                </div>
                <div className={style.compareListSingle}>
                    <div className={style.compareListSingleHead}>
                        <span>14D</span>
                    </div>
                    <div className={style.compareListSingleBody}>
                        <span className={style.down}><IoMdArrowDropdown /> 48.93%</span>
                    </div>
                </div>
                <div className={style.compareListSingle}>
                    <div className={style.compareListSingleHead}>
                        <span>30D</span>
                    </div>
                    <div className={style.compareListSingleBody}>
                        <span className={style.up}><IoMdArrowDropdown /> 48.93%</span>
                    </div>
                </div>
                <div className={style.compareListSingle}>
                    <div className={style.compareListSingleHead}>
                        <span>1Y</span>
                    </div>
                    <div className={style.compareListSingleBody}>
                        <span className={style.down}><IoMdArrowDropdown /> 48.93%</span>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Compare;