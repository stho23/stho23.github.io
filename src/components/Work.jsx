import React, { useState, useEffect } from 'react'
import data from '../assets/data/portfolioData'
import { RxArrowTopRight } from 'react-icons/rx'

export const Work = () => {

  const [portfolios, setPortfolios] = useState(data)
  const [selectTab, setSelectTab] = useState('all')

  useEffect(() => {
    if (selectTab ==='all')
    {
      setPortfolios(data)
    }
    if (selectTab === 'web-design')
    {
      const filteredData = data.filter(item => item.category ==='Web Design')
      setPortfolios(filteredData)
    }
    if (selectTab === 'ux-design')
    {
      const filteredData = data.filter(item => item.category ==='Ux')
      setPortfolios(filteredData)
    }

  }, [selectTab])

  return (
    <section id='work'>
      <div>
        <div className='flex items-center justify-between flex-wrap '>
          <div className='mb-7 sm:mb-0 pt-8 ml-12 w-full'>
            <h1 className='text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-6xl font-bold pt-10 text-white phone:ml-[-5%]'>PROJECTS
            </h1>
          <div className='flex gap-3 mt-10 phone:h-12 text-[12px] phone:ml-[-6%]'>
          <button
                onClick={() => setSelectTab('all')}
                className={`py-1 px-4 rounded-[18px] ${
                  selectTab === 'all' ? 'bg-teal border-2 border-teal text-black duration-300' : 'border-2 border-white text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectTab('web-design')}
                className={`py-1 px-4 rounded-[18px] ${
                  selectTab === 'web-design' ? 'bg-teal border-2 border-teal text-black duration-300' : 'border-2 border-white text-white'
                }`}
              >
                Web Development
              </button>
              <button
                onClick={() => setSelectTab('ux-design')}
                className={`py-1 px-4 rounded-[18px] phone:mr-20 ${
                  selectTab === 'ux-design' ? 'bg-teal border-2 border-teal text-black duration-300' : 'border-2 border-white text-white'
                }`}
              >
                Mobile Development
              </button>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-10 grid-cols-3 flex-wrap mt-3 ml-5 md:w-screen xl:max-w-full pr-8'>
          {
            portfolios?.slice(0, portfolios.length)?.map((portfolio,index) => (
              <div 
              key={index}
              data-aos='fade-zoom-in' 
              data-aos-delay='200' 
              data-aos-duration='1000'
              className='group max-w-screen sm:w-[95%] md:w-[75%] lg:w-[80%] xl:w-[30.2%] phone:w-screen relative z-[1]'
              >
              <figure className="container relative overflow-hidden group cursor-pointer" onClick={portfolio.siteUrl}>
              <div className="rounded-t-lg overflow-hidden relative group">
                <img
                  className="transform scale-100 group-hover:scale-110 transition-transform duration-200 filter blur-0 group-hover:blur-[8px] group-hover:opacity-100"
                  src={portfolio.imgUrl}
                  alt=""
                />
              </div>
              <div className="w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 flex flex-col justify-center items-center">
                <span className="text-white text-center phone:text-xs sm:text-xl md:text-xl lg:text-xl xl:text-sm font-semibold mx-5 font-raleway">
                {portfolio.description}
                <h1 className='text-white text-md font-semibold phone:mt-3 mt-5'>Technologies: </h1>
                <div className="flex flex-wrap justify-center gap-2">
                  {
                    portfolio.technologies.map((item, index) => (
                      <span key={index} className='bg-teal text-black py-1 mt-2 px-2 rounded-[5px] sm:text-xl md:text-xl lg:text-xl xl:text-sm leading-0'>
                        {item}
                      </span>
                    ))
                  }
                </div>
              </span>
            </div>
            </figure>

            <div className="text-white bg-[#1D1D1D] w-full h-full pt-6 font-semibold rounded-t-none rounded-b-lg mt-[-.1%] flex pl-5 pb-5 relative group">
              <div className="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                {portfolio.title}
              </div>
              <div className="absolute left-0 bottom-0 pl-5 pt-1 pb-[1px] w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer">
                <div className='group hover:text-teal flex items-center'>
                  <a href={portfolio.siteUrl}>Show Project</a>&#160;
                  <RxArrowTopRight className='text-[20px]'></RxArrowTopRight>
                </div>
              </div>
            </div>
        </div>
        ))
      }
        </div>
    </div>
   </section>
  )
}

