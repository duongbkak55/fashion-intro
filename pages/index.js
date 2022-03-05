import Head from 'next/head'
import Image from 'next/image'

import dashboardImage from '../resources/images/hero-desktop.jpg';

import iconArrow from '../resources/images/icon-arrow.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>APPAREL</title>
        <link rel="icon" href="/favicon.ico"></link>
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@700&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </Head>

      <div className="flex container justify-center items-center">
        <div className='mediumScreen'>
          <div className="basis-3/5 main-container flex flex-col h-screen">
            <div className='content justify-center content-center flex-row pl-[20%] mt-10 pr-[20%]'>
              <div className='group flex items-center'><div className='w-10 h-10 rounded-full m-5 ml-0 border-4 border-pink-300'></div>
                <div>
                  <p className='text-black-400 text-xl font-bold tracking-widest title'>BASE</p>
                  <p className='text-black-400 text-xl font-bold tracking-widest title'>APPAREL</p>
                </div>
              </div>


              <div className='flex flex-col mt-20'>
                <p className='text-pink-400 text-6xl font-light super-spacing'>WE'RE</p>
                <p className='text-black-300 text-6xl font-semibold super-spacing'>COMING</p>
                <p className='text-black-300 text-6xl font-semibold super-spacing'>SOON</p>
                <p className='text-pink-300 text-sm font-semibold mt-3 leading-7 '>Hello fellow shoppers! We're currently building our new fashion store. And your email below to stay up-to-date with announcements and our launch deals.</p>
                <div className='flex relative bg-transparent h-16 mt-4 items-center justify-center'>
                  <input placeholder='Email Address' className='text-sm placeholder-myred-700 bg-transparent border-2 rounded-full pl-10 flex-1 h-full outline-none text-pink-500'></input>
                  <div className="group w-[20%] absolute rounded-full right-0 items-center justify-center flex h-full gradient-btn shadow-xl shadow-fuchsia-200 hover:cursor-pointer">
                    <Image src={iconArrow} alt="" className='relative' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-2/5 h-screen">
            <Image className='object-center' src={dashboardImage} alt="beauty" />
          </div>
        </div>
      </div>
    </div>
  )
}
