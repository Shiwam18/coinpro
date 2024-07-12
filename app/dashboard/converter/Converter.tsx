import { IoMdArrowDropdown } from 'react-icons/io';
import style from './converter.module.css'
const Conveter = () => {
    return(
        <>
       
         <div className={style.converter}>
                    <div className={style.converterHead}>
                        <span>1Y</span>
                        <span>ETH</span>
                    </div>
                    <div className={style.converterBody}>
                        <span className={style.down}>3515.03</span>
                        <select
                    className={`${style.compareDropdown} form-select`}
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                >
                    <option >INR</option>
                    <option value={1}>USD</option>
                    <option value={2}>GPB</option>
                </select>
                    </div>
                </div>
        </>
    )
}
export default Conveter;