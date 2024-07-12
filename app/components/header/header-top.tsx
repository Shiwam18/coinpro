"use client"
import { FaCaretDown } from 'react-icons/fa'
import style from './header-top.module.css'
import Link from 'next/link'
import { BsFuelPump } from 'react-icons/bs'
import Image from 'next/image'
import LoginSignUp from '../login-signup/login-signup'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
export default function HeaderTop(){
    const session = useSession();
    const router= useRouter();
    const logOut = () => {
        signOut();
    }
    useEffect(()=>{
        if(session.status === 'unauthenticated'){
            router.push('/');
        }
    },[session.status])
    return(
        <>
        <div className={style.headerTop}>
            <div className='container-fluid'>
                <div className={style.headerTopInner}>
                    <div className={`${style.headerTopLeft} d-none d-md-inline` }>
                        <ul className={style.headerInfoList}>
                            <li>Cryptos: <Link href={'#'}>2.4M+</Link></li>
                            <li>Exchanges: <Link href={'#'}>782</Link></li>
                            <li>Market Cap:  <Link href={'#'}>36.4M BTC</Link> <span className={style.up}><FaCaretDown /> 3.59%</span></li>
                            <li>24h Vol: <Link href={'#'}>1.23M BTC</Link> <span className={style.down}><FaCaretDown /> 48.93%</span> </li>
                            <li>Dominance:  <Link href={'#'}>BTC: 54.0% ETH: 17.4%</Link></li>
                            <li><BsFuelPump /> ETH Gas:   <Link href={'#'}> 13 Gwei</Link></li>
                        </ul>
                    </div>
                    <div className={style.headerRight}>
                    <div className={`${style.languageDropdown} dropdown`}>
                    <button
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        English
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                        <a className="dropdown-item" href="#">
                        English 1
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                        English 2
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                        English 3
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                        English 3
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                        English 3
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                        English 3
                        </a>
                        </li><li>
                        <a className="dropdown-item" href="#">
                        English 3
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className={`${style.languageDropdown} dropdown`}>
                    <button
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                       <Image  width={0} height={0}  sizes="100vw" style={{ width: '15px', height: '15px' }}  src="/assets/images/icon/bitcoin.png" alt="" className="img-fluid" /> 
                       BTC
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                        <a className="dropdown-item" href="#">
                       USD
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                        ETH
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                        BNB
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className={style.headerButtons}>
                        {!session.data? <div>
                        <Link href={'#'} className={`${style.headerBtn} btn theme-btn`} data-bs-toggle="modal" data-bs-target="#LoginSignUp">
                            <span>Login</span>
                        </Link>
                        <Link href={'#'} className={`${style.headerBtn} btn theme-btn border-btn`} data-bs-toggle="modal" data-bs-target="#LoginSignUp">
                            <span>Sign up</span>
                        </Link>
                        <LoginSignUp/></div>:<div>
                        <Link href={'#'} className={`${style.headerBtn} btn theme-btn border-btn`} onClick={logOut}>
                            <span>Log out</span>
                        </Link></div>}
                        
                    </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}