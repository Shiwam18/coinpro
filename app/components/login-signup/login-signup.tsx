'use client'
import { FcGoogle } from 'react-icons/fc'
import style from './login-signup.module.css'
import { FaFacebookF, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react';
import { signIn } from 'next-auth/react'
import { signup } from '@/actions'
import { useRouter } from 'next/navigation'
import { Toast } from 'react-bootstrap'
import toast from 'react-hot-toast'
export default function LoginSignUp() {
    const router =useRouter();
    const [email, setEmail]=useState<string>('');
    const [password, setPassword]=useState<string>('');
    const [displayName, setDisplayName] = useState<string>('');
    const [digiId, setDigiId]=useState<string>('');

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);
    const loginSubmit = async () => {
    
        // const response = await signIn('credentials',{
        //     email,
        //     password,
        //     redirect:false,
        // })
        try {
        
            const loginResponse  = await signIn('credentials', {
              
              email, 
              password,
              redirect:false,
            })
            
            if(!loginResponse || loginResponse.ok!==true){
                setEmail("")
                setPassword("")
                toast.error("Invalid credientials, Try again")
            }
            else{
                router.push('/dashboard');
            }
        } catch (error:any) {
            setEmail("");
            setPassword("");
            // console.log(error.message);
            
        }
    }
    const signupSubmit = async () => {
        const userData = {
            email:email,
            password:password,
            name:displayName,
            digiId:digiId
        }
        const response = await signup(userData);
        // console.log(response, "This is response after signing up!")
        if(response.status===200) {
            signIn('credentials', {
                email,
                password,
                redirect:false
            })
            setEmail('');
            setPassword('');
            router.push('/dashboard');
        
        
        }
        else if(response.status===400) {
            toast.error("User already exists try again.")
            setEmail('');
            setPassword('');
        }
        else{
            router.push('/');
        }


    }
    

    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    };
    const togglePasswordVisibility2 = () => {
        setPasswordVisible2(prevState => !prevState);
    };
    return (
        <>
            <div
                className="modal fade"
                id="LoginSignUp"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="LoginSignUpLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered login-modal-dialog ">
                    <div className="modal-content">

                        <div className={`${style.modalBody} modal-body login-modal`}>
                            <button
                                type="button"
                                className={`${style.modalClose} btn-close`}
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="" role="presentation">
                                    <button
                                        className="active"
                                        id="LogIn-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#LogIn"
                                        type="button"
                                        role="tab"
                                        aria-controls="LogIn"
                                        aria-selected="true"
                                    >
                                        Log In
                                    </button>
                                </li>
                                <li className="" role="presentation">
                                    <button
                                        className=""
                                        id="SignUp-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#SignUp"
                                        type="button"
                                        role="tab"
                                        aria-controls="SignUp"
                                        aria-selected="false"
                                    >
                                        Sign Up
                                    </button>
                                </li>

                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="LogIn"
                                    role="tabpanel"
                                    aria-labelledby="LogIn-tab"
                                >
                                    <div className={style.LoginContent}>
                                        <h2>Login to track your favorite coin easily</h2>
                                        <form action={loginSubmit}>
                                            <div className='form-group mb-3 mb-md-4'>
                                                <label>Email Address</label>
                                                <input type='email' placeholder='Enter your email address...' required className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                                            </div>
                                            <div className='form-group mb-3 mb-md-4 '>
                                                <label>Password <Link href={'#'}>Forgot your password? </Link></label>
                                                <div className='position-relative w-100'>
                                                    <input type={passwordVisible ? 'text' : 'password'} value={password} placeholder='Enter your password' required className='form-control' onChange={(e)=>setPassword(e.target.value)}></input>
                                                    <span className='passwordEyeIcon' id="togglePassword"
                                                        onClick={togglePasswordVisibility}> <FaRegEye className='eyeOpen' /><FaRegEyeSlash className='eyeClose' /></span>
                                                </div>

                                            </div>
                                            <button data-bs-dismiss={`${password.length && email.length? "modal":""}`} type='submit' className='btn theme-btn w-100'><span>Login</span> </button>
                                        </form>

                                    </div>
                                    <div className={style.LoginFooter}>
                                        <span className={style.LoginOr}><small>or continue with</small></span>
                                        <div className={style.LoginOptions}>
                                            <button onClick={()=>signIn('google')}><FcGoogle /> Continue with Google</button>
                                            <button onClick={()=>signIn('github')}><FaFacebookF /> Continue with Facebook</button>
                                        </div>
                                        <div className={style.LoginCopy}>
                                            <p>By continuing, you agree to Cryptocoin Bazar  <Link href={'#'}>Terms of Service</Link>  and
                                                acknowledge you’ve read our  <Link href={'#'}>Privacy Policy</Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="SignUp"
                                    role="tabpanel"
                                    aria-labelledby="SignUp-tab"
                                >
                                 <div className={style.LoginContent}>
                                        <h2>Sign Up for Free Crypto Tracking</h2>
                                        <form action={signupSubmit}>
                                            <div className='form-group mb-3 mb-md-4'>
                                                <label>Email Address</label>
                                                <input type='email' value={email} placeholder='Enter your email address...' required className='form-control' onChange={(e)=>setEmail(e.target.value)}></input>
                                            </div>
                                            <div className='form-group mb-3 mb-md-4 '>
                                                <label>Password </label>
                                                <div className='position-relative w-100'>
                                                    <input type={passwordVisible ? 'text' : 'password'} value={password} placeholder='Enter your password' required className='form-control' onChange={(e)=>setPassword(e.target.value)}></input>
                                                    <span className='passwordEyeIcon' id="togglePassword"
                                                        onClick={togglePasswordVisibility}> <FaRegEye className='eyeOpen' /><FaRegEyeSlash className='eyeClose' /></span>
                                                </div>

                                            </div>
                                            <div className='form-group mb-3 mb-md-4'>
                                                <label>Display ID</label>
                                                <input type='text' value={digiId} placeholder='Enter your digi id address...' className='form-control' onChange={(e)=>setDigiId(e.target.value)}></input>
                                            </div>
                                            <div className='form-group mb-3 mb-md-4'>
                                                <label>Display name</label>
                                                <input type='text' value={displayName} placeholder='Enter your display name' required className='form-control' onChange={(e)=>setDisplayName(e.target.value)}></input>
                                            </div>
                                            <button type='submit' data-bs-dismiss={`${displayName.length && password.length && email.length? "modal":""}`} className='btn theme-btn w-100'><span>Create an Account</span> </button>
                                        </form>

                                    </div>
                                    <div className={style.LoginFooter}>
                                        <span className={style.LoginOr}><small>or continue with</small></span>
                                        <div className={style.LoginOptions}>
                                            <button><FcGoogle /> Continue with Google</button>
                                            <button><FaFacebookF /> Continue with Facebook</button>
                                        </div>
                                        <div className={style.LoginCopy}>
                                            <p>By continuing, you agree to Cryptocoin Bazar  <Link href={'#'}>Terms of Service</Link>  and
                                                acknowledge you’ve read our  <Link href={'#'}>Privacy Policy</Link></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}