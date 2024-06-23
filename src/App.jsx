import { useState } from 'react'
import Header from './components/header'
import dataHeader from './data/dataHeader'
import mainMobile from './assets/mainMobile.png'
import logosMain from './assets/logosMain.png'
import Subtitles from './components/subtitles'
import dataMain from './data/dataMain'
import dataStuff from './data/dataStuff'
import peopleTalk from './assets/peopleTalk.png'
import startupOffice from './assets/startupOffice.png'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


function App() {


  return (
    <>
      <div className="p-6 scroll-auto">
        <Header />
        <div className=" md:px-60 md:pt-10">
          <div className="flex flex-col pt-16">
            <span className=" w-52 font-medium text-sm md:text-xs">Management, sales and human resources consulting</span>
            <div className="flex flex-col  md:justify-between md:flex-row">
              <h1 className="font-barlow md:text-5xl">We create meaningful growth for the world's largest Brands</h1>
              <div className="md:flex md:flex-col">
                {dataHeader.map((item, index) => (
                  <div key={index} className="flex items-center text-sm ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[#7EC44A]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <p className="pl-2 p-2">{item.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center md:justify-center">
            <img src={mainMobile} alt="" className="flex items-center justify-center py-14 md:pb-0 md:w-[100vh]" />

          </div>
          <div className="md:flex md:justify-center md:items-center ">
            <span className="text-[#231F20] tracking-widest font-normal md:w-[70%] md:text-xl">As an agency based in New York, we specialise in customer experience and achieving results by delivering engaging experiences, both digitally and offline.</span>
            <div className="flex flex-col py-10 md:w-[40%]">
              <img src={logosMain} alt="" />
            </div>
          </div>

          <Subtitles subtitle="OUR PARTNERSHIPS" />
          <div className="pt-2">
            <h2 className="font-medium text-2xl">Supporting the success of our partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {dataMain.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center flex-col text-sm py-5 font-barlow ${index === 0 ? 'col-span-1 md:col-span-1 row-span-2' : 'col-span-1'
                    }`}
                >
                  <img src={item.img} className="w-[80%] md:w-[100%]" />
                  <div className="text-left w-full px-5 md:text-center">
                    <p className="font-medium pt-5 text-lg">{item.title}</p>
                    <p className="font-semibold pt-1 text-xs text-[#7A898E] font-inter">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>



          </div>

          <Subtitles subtitle="NOTES AND THOUGHTS PUT ON POSTS" className="my-10 font-semibold" />
          <h2 className="font-medium text-2xl font-barlow">We write insightful stuff</h2>
          <div className="md:flex md:justify-between md:items-center">
            {dataStuff.map((item, index) => (
              <div key={index} className="flex items-center justify-center flex-col text-sm py-10 font-barlow md:text-center">
                <img src={item.img} />

                <div className="text-left w-full "> {/* Adiciona um div para o alinhamento */}
                  <p className="font-medium pt-5 text-xl">{item.title}</p>
                  <p className="font-semibold  text-xs text-[#7A898E] font-inter pt-5 md:w-[60%]">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white">
            <Subtitles subtitle="GET STARTED HERE" className="my-10 font-semibold " />
            <h2 className="font-medium text-2xl font-barlow">Every organization has a powerfull story to tell - one that impacts the bottom line.</h2>

            <div className="relative my-[15vh] md:my-[60vh]">
              <img src={startupOffice} alt="" className="w-[60%] absolute bottom-[-15px] right-0" />
              <img src={peopleTalk} alt="" className="w-[50%] md:w-[40%] absolute top-0 left-0 md:left-8 md:top-[-15px]" />
            </div>


            <div className="flex justify-center items-center pt-[20vh] md:pt-[60vh]">
              <button className="font-inter flex justify-center items-center bg-black text-white pt-[0.5rem] pl-[2rem] pb-[0.5rem] pr-[1.5rem] font-light">Own your story   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg></button>
            </div>

          </div>
          <div className="pt-10">
            <hr></hr>
            <span className="flex justify-around items-center text-2xl pt-5 text-[#0000009c]">
              <a href="https://www.instagram.com/dan_martinezz_/" className=""><FaInstagram /> </a>
              <a href="https://www.linkedin.com/in/danilomartinezz/" className=""><FaLinkedin /></a>
              <a href="https://github.com/DaniloMartinezz" className=""><FaGithub /></a>

            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
