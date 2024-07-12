import { IoMdArrowDropdown } from 'react-icons/io';
import style from './history.module.css'
const HistoryData = () => {
    const History = [
        {
            id: 1,
            time:'24H Range',
            price:'₹3,434.52 – ₹3,531.11',
            move:''

        },
        {
            id: 1,
            time:'7D Range',
            price:'₹3,434.52 – ₹3,844.40',
            move:''

        },
        {
            id: 1,
            time:'All-Time High',
            price:'₹4,878.26',
            change:'48.93%',
            timeline:'Nov 10, 2021 (over 2 years)',
            move:'down'

        },
        {
            id: 1,
            time:'All-Time Low',
            price:'₹0.433',
            change:'806577.8%',
            timeline:'Oct 20, 2015 (over 8 years)',
            move:'up'

        },

    ]
    return(
        <>
       
         <div className={style.historyBody}>
                    <ul>
                    {
              History.map((data) => (
                <li>
                <span>{data.time}</span>
                <span className={style.price}>{data.price} <small className={data.move==="down"?style.down:style.up}> {data.move===""?<></>:<IoMdArrowDropdown />} {data.change}</small></span>
                <span className={`${style.timeline} w-100 text-end`}>{data.timeline}</span>
            </li>
              ))}
                       
                        
                    </ul>
                </div>
        </>
    )
}
export default HistoryData;