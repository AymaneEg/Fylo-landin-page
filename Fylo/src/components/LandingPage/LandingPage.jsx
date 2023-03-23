import React from 'react'
import './LandingPage.css'
import img from './Images/illustration-intro.png'
import img1 from './Images/icon-access-anywhere.svg'
import img2 from './Images/icon-any-file.svg'
import img3 from './Images/icon-collaboration.svg'
import img4 from './Images/icon-security.svg'
import productif from "./Images/illustration-stay-productive.png"

export default function LandingPage() {
  return (
    <div className='LandingPage'>
        <div className='Intro'>
             <img src={img} alt="" className='w-92 h-72 ' />
              <h1 className='text-5xl text-white my-6'>All your files in one secure location, <br /> accessible anywhere</h1>
              <p className='text-white'>Fylo stores all your most important files in one secure location <br /> 
              Access theme wherever you need , share and collaborate with <br /> friends family , and co-workers </p>
              <button className='w-36 h-8  my-6 rounded-lg bg-CyanColor '>Get Started</button>
        </div>
        <div className='w-full bg-MainBackGround  grid lg:grid-cols-2		gap-y-8 p-8'>
             <div className='Card'>
                 <img src={img1} alt="" />
                 <h4 className=' text-white'>Access your files, anywhere </h4>
                 <p className='text-gray-400'>the ability to use a smartphone, tablet , or computer <br />to access your acount means your files follow you <br /> everywhere  </p>
             </div>
             <div className='Card'>
                 <img src={img4} alt="" />
                 <h4 className=' text-white'>Access your files, anywhere </h4>
                 <p className='text-gray-400'>the ability to use a smartphone, tablet , or computer <br />to access your acount means your files follow you <br /> everywhere  </p>
             </div>
             <div className='Card'>
                 <img src={img3} alt="" />
                 <h4 className=' text-white'>Access your files, anywhere </h4>
                 <p className='text-gray-400'>the ability to use a smartphone, tablet , or computer <br />to access your acount means your files follow you <br /> everywhere  </p>
             </div>
             <div className='Card'>
                 <img src={img2} alt="" />
                 <h4 className=' text-white'>Access your files, anywhere </h4>
                 <p className='text-gray-400'>the ability to use a smartphone, tablet , or computer <br />to access your acount means your files follow you <br /> everywhere  </p>
             </div>
        </div> 

        <div className='w-full bg-MainBackGround text-center lg:text-left lg:flex lg:justify-around items-center px-14 gap-x-10 '>
            <img src={productif} alt="" />
            <div className='lg:w-2/5'>
                <h1 className='text-white text-5xl my-9'>Stay Productive <br/> wherever you are</h1>
                <p className='block text-gray-400  my-6'>Never let location b an issue when accesing your file , Fylo has you covered for all your file storge needs .</p>
                <p className='block text-gray-400  my-6'>Secuerly share files and folders with friends , family and colleagues for live collaboation . No email attachments requuired</p>
            </div>
        </div>
    </div>
  )
}
