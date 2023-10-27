import React from 'react'
import { RxArrowTopRight } from 'react-icons/rx'
import { HiOutlineRocketLaunch } from 'react-icons/hi2'
import contactLogo from '../assets/images/contactPageIMG.png'

export const Contact = () => {
  return (
    <section id='contact' className="text-white font-bold text-[30px] ml-12 relative">
      <div className="flex flex-col">
        <div className="xl:w-[60%] pr-8">
          <div className='lg:flex-row md:flex-col'>
          <div className="mt-20 text-[44px] mr-2 ml-1 max-phone:text-[30px]">GOT AN EXCITING PROJECT YOU WANT TO COLLABORATE ON?</div>
          <div>
            <div className="w-full mr-5 xl:absolute right-0 top-12 xl:w-1/2 md:ml-1"> 
              <form method="POST" action="https://getform.io/f/9626f18f-ef6b-4932-8888-00b491445880">
              <div className='flex flex-col mt-5 mr-5 pl-1 xl:ml-32 phone:pl-0'>
                      <h4 className='mt-4 text-[20px] font-light'>NAME</h4>
                      <input className='p-2 bg-black border border-white rounded-[8px]' type="text" name='name' required/>
                      <h1 className='mt-4 text-[20px] font-light'>EMAIL</h1> 
                      <input className='p-2 bg-black border border-white rounded-[8px]' type="text" name='email' required/>
                      <h1 className='mt-4 text-[20px] font-light'>MESSAGE</h1>
                      <textarea className='p-2 bg-black border border-white rounded-[8px]' name="message" id="" rows="6" required></textarea>
                      <button 
                      className='bg-teal mx-auto mt-8 my-8 text-black rounded-[15px] text-[18px] p-2 px-2.5 font-light flex items-center' required>
                      Let's Work&nbsp;
                      <HiOutlineRocketLaunch></HiOutlineRocketLaunch>
                      </button>
                  </div>
              </form>
            </div>
          </div>
          </div>

          <div className='mt-10 flex flex-col text-white text-[30px] font-metro max-phone:text-[20px]'>
                  <a className='group relative mt-2' href="mailto: simeon.tho23@gmail.com">SIMEON.THO23@GMAIL.COM
                    <div className='absolute inset-0 ml-3 mt-4 bg-[#1E1E1E] w-[440px] max-phone:w-[290px] max-phone:h-6 h-10 z-[-5] group-hover:h-10 group-hover:-translate-y-3 duration-300 mr-[24%]'></div>
                  </a>
                  <div>
                    <a className='mt-20 flex items-center group max-:mt-16' href="https://github.com/stho23" target="_blank">GITHUB&#160;
                    <RxArrowTopRight className='text-[30px] group-hover:text-teal transform translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></RxArrowTopRight>
                    </a>
                    <a className='mt-8 flex items-center group' href="https://www.linkedin.com/in/simeon-thomas-412289221/" target="_blank">LINKEDIN&#160;
                    <RxArrowTopRight className='text-[30px] group-hover:text-teal transform translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></RxArrowTopRight></a>
                    <a className='mt-8 flex items-center group' href="">TWITTER&#160;
                    <RxArrowTopRight className='text-[30px] group-hover:text-teal transform translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></RxArrowTopRight></a>
                    <a className='mt-8 flex items-center group mb-9' href="file:///Users/stthomas/Downloads/SimeonThomasResume.pdf" target="_blank">RĖSUMÉ&#160;
                    <RxArrowTopRight className='text-[30px] group-hover:text-teal transform translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></RxArrowTopRight></a>
                  </div>
          </div>
        </div>
      </div>
      <div className='relative mr-10'>
      <img src={contactLogo} alt="" className='absolute bottom-0 pb-1 z-[-20] w-[580px] sm:ml-18 md:ml-24 lg:right-5 xl:left-0'/>
        <div className='bg-white h-0.5 w-full mt-12'>
          <div className='pt-10 flex flex-row font-metro text-[18px] max-phone:text-[12px]'>
            <div>© Simeon Thomas 2023</div>
            <div className='absolute right-2 pb-8'>All Rights Reserved</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
