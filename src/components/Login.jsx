import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateForm } from '../utils/validateform'
import {auth} from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const navigate = useNavigate()
  const [inputValues, setInputValues] = useState({
    inputField1:"",
    inputField2:"",
    inputField3:""
  })
  const [errmessage, setErrMessage] = useState("")
  const emailOrNumber = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handleToggleForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }
  

  const handleValidation = ()=>{
    const message = validateForm(emailOrNumber.current.value, password.current.value, name.current?.value)
    setErrMessage(message)
    if(message) return;

    if(isSignInForm){
      //  login user
      signInWithEmailAndPassword(auth, emailOrNumber.current.value, password.current.value)
      .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user);
      }).catch((err)=>{
        console.log(err);
      })
    }else{
      // create user
      createUserWithEmailAndPassword(auth, emailOrNumber.current.value, password.current.value)
      .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user);
        
      })
      .catch((err)=>{
        console.log(err);
        
      })

    }

  } 

  const handleChange = (e)=>{
    setInputValues({...inputValues, [e.target.id]: e.target.value})
  }
  
  return (
    <div className='relative'>
      <div className='h-screen min-h-screen relative bg-black'>
        <Header/>
        <div className='h-full min-h-screen relative'>
          <div className='w-full min-h-screen absolute bg-black/50'></div>
          <img src="cover-img.jpg" alt="" className='w-full h-full object-cover hidden sm:block' />
        </div>

        <form onSubmit={(e)=> e.preventDefault()} className='w-full p-5 flex  flex-col absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2  sm:max-w-xl sm:bg-black/70 sm:rounded-md sm:px-20 sm:py-10'>
            <h1 className='text-3xl font-bold text-white'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
            <div className=' relative mt-5 w-full h-14 pt-4 px-3 border-[1px] rounded-md  border-zinc-500'>
              <div className='relative top-1/2 -translate-y-1/2 left-0'>
                <input onChange={handleChange} ref={emailOrNumber} id='inputField1' className='w-full peer text-white bg-transparent outline-none focus:outline-none' type="text" placeholder=' '/>
                <label htmlFor="inputField1" className={`absolute font-medium text-zinc-300 top-1/2 pointer-events-none -translate-y-5 left-0 transition-all  peer-placeholder-shown:text-gray-500 ${inputValues.inputField1 ? "-translate-y-6 text-xs": "peer-focus:-translate-y-6 peer-focus:text-xs"}  `}>Email or Mobile Number</label>
              </div>
            </div>
            <p className='text-red-400 font-normal text-sm'>{errmessage?.type==="emailNum" && errmessage.message}</p>
            {!isSignInForm && (
              <>
                <div className=' relative mt-5 w-full h-14 pt-4 px-3 border-[1px] rounded-md  border-zinc-500'>
                  <div className='relative top-1/2 -translate-y-1/2 left-0'>
                    <input onChange={handleChange} ref={name} id='inputField2' className='w-full peer text-white bg-transparent outline-none focus:outline-none' type="text" placeholder=' '/>
                    <label htmlFor="inputField2" className={`absolute font-medium text-zinc-300 top-1/2 pointer-events-none -translate-y-5 left-0 transition-all peer-placeholder-shown:-translate-y-5 peer-placeholder-shown:text-gray-500 ${inputValues.inputField2 ? "-translate-y-6 text-xs": "peer-focus:-translate-y-6 peer-focus:text-xs"} `}>Name</label>
                  </div>
                </div>
                <p className='text-red-400 font-normal text-sm'>{errmessage?.type==="name" && errmessage.message}</p>
              </>
            )}
            <div className=' relative mt-5 w-full h-14 pt-4 px-3 border-[1px] rounded-md  border-zinc-500'>
              <div className='relative top-1/2 -translate-y-1/2 left-0'>
                <input onChange={handleChange} ref={password} id='inputField3' className='w-full peer text-white bg-transparent outline-none focus:outline-none' type="password" placeholder=' '/>
                <label htmlFor="inputField3" className={`absolute font-medium text-zinc-300 top-1/2 pointer-events-none -translate-y-5 left-0 transition-all peer-placeholder-shown:-translate-y-5 peer-placeholder-shown:text-gray-500 ${inputValues.inputField3 ? "-translate-y-6 text-xs": "peer-focus:-translate-y-6 peer-focus:text-xs"}`}>Password</label>
              </div>
            </div>
            <p className='text-red-400 font-normal text-sm'>{errmessage?.type==="pass" && errmessage.message}</p>

            <button onClick={handleValidation} className='w-full px-3 py-2 rounded-md mt-4 text-white font-bold bg-red-600'>{isSignInForm? "Sign In": "Sign Up"}</button>

            <p className='text-zinc-400 mt-5'>{isSignInForm? "New to Netflix?": "Already to Netflix"} <a onClick={handleToggleForm} className='font-semibold text-white cursor-pointer'>{isSignInForm? "SignUp Now.": "SignIn Now."}</a></p>
        </form>

      </div> 
    </div>
  )
}

export default Login