import { useEffect, useState } from 'react'
import './App.css'
import logo from "./assets/images/logo.svg"
import arrow from "./assets/images/arrow.svg"
import desktop from "./assets/images/desktop.jpg"
import mobile from "./assets/images/mobile.jpg"
import error from "./assets/images/error.svg"


function App() {
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState('');

  // useEffect(() => {
  //   console.log(email);
  //   if(email == '') {
  //     setEmailError(false)
  //   }
  // })


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  }

  const handleClick = (event) => {
    let pattern = /\b[a-z0-9._+%-]+@[a-zA-z0-9]+\.[A-Z|a-z]{2,7}\b/;
    let result = pattern.test(email)
    if (result) {
      setEmailError(!result)
    }
    else if (email == '') {
      setEmailError(false)
    }
    else {
      setEmailError(!result)
    }
    // console.log(email)
    // console.log(event.target.value)
  }

  return (
    <>
      <div className="container 2xl:w-[70%] xl:w-[80%] sm:w-full w-[420px] mx-auto flex sm:flex-row flex-col sm:absolute sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] justify-center">
        <div className="left md:mt-12 my-6 md:mx-20 sm:mx-8 mx-4 md:w-[50%] sm:w-[48%] flex justify-center">
          <div className="main w-[100%]">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="mobileImage sm:hidden inline-block">
              <img className='block sm:hidden mt-10' src={mobile} alt="" />
            </div>
            <div className="content text-[#AE8E91] sm:mt-20 mt-10">
              <div className="coming my-8 mb-4">
                <h1 className='text-6xl font-light tracking-[0.7rem]'>WE'RE <span className='text-black font-bold block'>COMING <span className='block'>SOON</span></span></h1>
              </div>
              <div className="info my-6 text-center sm:text-left">
                <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
              </div>
              <div className="email flex items-center relative sm:w-full w-[120%]">
                <input className={`py-3 border outline-none disabled:border-[#AE8E91] disabled:text-[#AE8E91] disabled:shadow-none focus:border-[#f19090] invalid:border-red-500 invalid:text-red-500 focus:invalid:border-red-500 invalid:ring-red-500 w-full bg-transparent text-lg px-6 rounded-full`} onChange={handleEmailChange} type="email" name="email" id="" placeholder='Email Address' />
                {emailError &&
                  <div className="error">
                    <img className='z-20 absolute right-[43%] bottom-[25%] w-[25px]' src={error} alt="" />
                  </div>
                }
                <button onClick={handleClick} className='bg-gradient-to-r from-[#F5B8B7] to-[#F19796] py-[1.15rem] px-10 rounded-full relative right-[19%] xl:right-[13%] hover:from-[#FAD6D6] hover:to-[#FAD6D6] hover:shadow-2xl ' type="submit"><img src={arrow} alt="" /></button>
              </div>
            </div>
            {emailError &&
              <div className="errorMessage">
                <p className='text-sm px-8 py-1 text-red-500'>Please provide a valid email</p>
              </div>
            }
          </div>
        </div>
        <div className="right hidden sm:block">
          <div className="image w-full h-full">
            <img className='w-full h-full object-cover' src={desktop} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
