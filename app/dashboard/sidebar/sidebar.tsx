import { FaEthereum, FaGithub, FaRegBookmark } from 'react-icons/fa'
import style from './sidebar.module.css'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrPieChart } from 'react-icons/gr'
import Image from 'next/image'
import { IoMdArrowDropdown } from 'react-icons/io'
import { BsCopy } from 'react-icons/bs'
const DashboardSidebar = () => {
    return(
    <>
        <div className={style.dashboardSidebar}>
        <div className={style.dashboardSidebarSingle}>
        <div className={style.dashboardSidebarSingleHead}>
            <span className={style.walletLogo}>
            <FaEthereum />
            </span>
            <span className={`${style.walletName} me-auto ms-2`}>Ethereum <small>ETH</small></span>
            <span className={style.walletBatch}>
            <FaRegBookmark />
            </span>
        </div>
        <div >
            <span className={style.walletBalance}>0.0525 BTC <small className={`${style.walletBalanceMove} ${style.up} ms-auto`}><IoMdArrowDropdown /> 3.59% (1D)</small> </span>
        </div>
        <button className={style.sidebarbtn}><span><FaRegBookmark />  Add to Watchlist	</span>				<AiOutlinePlus /></button>
        <button className={style.sidebarbtn}><span><GrPieChart />  Add to Watchlist</span>					<AiOutlinePlus /></button>
        </div>
        <div className={style.dashboardSidebarSingle}>
        
        <ul className={style.marketInfo}>
            <li>
                <span>Market Cap</span>
                <span><small className={`${style.marketInfoMove} ${style.up} ms-auto`}><IoMdArrowDropdown /> 48.93%</small> 6,304,691 BTC</span>
            </li>
            <li>
            <div className={`${style.progress} progress`} style={{ height: 7 }}>
            <div
                className={`${style.progressBar} progress-bar`}
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
            />
            </div>
            <span className={style.rank}>#2</span>

            </li>
            <li>
                <span>Volume (24h)</span>
                <span><small className={`${style.marketInfoMove} ${style.down} ms-auto`}><IoMdArrowDropdown /> 48.93%</small> 210,256 BTC</span>
            </li>
            <li>
            <div className={`${style.progress} progress`} style={{ height: 7 }}>
            <div
                className={`${style.progressBar} progress-bar`}
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
            />
            </div>
            <span className={style.rank}>#2</span>

            </li>
            <li>
                <span>Volume/Market cap (24h)</span>
                <span>3.30%</span>
            </li>
            <li>
                <span>Circulating supply</span>
                <span>120,151,114 ETH</span>
            </li>
            <li>
                <span>Total supply</span>
                <span>120,151,114 ETH</span>
            </li>
            <li>
                <span>Max. supply</span>
                <span> ~~</span>
            </li>
            <li>
                <span>Fully diluted market cap</span>
                <span>6,328,420 BTC</span>
            </li>

            
        </ul>
        </div>
        <div className={style.dashboardSidebarSingle}>
        <div className={style.dashboardSidebarSingleHead}>
           
            <span className={style.walletName}>Info</span>
           
        </div>
        <ul className={style.marketInfo}>
            <li>
                <span>Website</span>
                <span className={style.infoSingleBg}>ethereum.org</span>
            </li>
            <li>
                <span>Explorers</span>
                <span className={style.infoSingleBg}>
                <select
                    className="form-select"
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                    >
                    <option >Etherscan</option>
                    <option value={1}>Etherscan 2</option>
                    <option value={2}>Etherscan 3</option>
                    <option value={3}>Etherscan 4</option>
                    </select>
                </span>
            </li>
            <li>
                <span>Wallets</span>
                <span className={style.infoSingleBg}>
                <select
                    className="form-select"
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                    >
                    <option >Ledger</option>
                    <option value={1}>Ledger 2</option>
                    <option value={2}>Ledger 3</option>
                    <option value={3}>Ledger 4</option>
                    </select>

                </span>
            </li>
            <li>
                <span>Source Code</span>
                <span className={style.infoSingleBg}><FaGithub /> Github</span>
            </li>
            <li>
                <span>API ID</span>
                <span className={style.infoSingleBg}>ethereum <BsCopy /></span>
            </li>
            <li>
                <span>Chains</span>
                <span className={style.infoSingleBg}>Ethereum Ecosystem</span>
            </li>
            <li className='flex-wrap'>
                <span className='w-100 mb-3'>Categories</span>
                <span className={style.infoSingleBg}>Smart Contract Platform</span>
                <span className={style.infoSingleBg}>
                <select
                    className="form-select"
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                    >
                    <option >10 more</option>
                    <option value={1}>20 more</option>
                    <option value={2}>30 more</option>
                    <option value={3}>40 more</option>
                    </select>

                </span>
            </li>
          


        </ul>
        </div>
        </div>
    </>
    )
}
export default DashboardSidebar;