'use client'

import { ReactComponent as IconeReaction } from '../../public/assets/images/icon-reaction.svg'
import Image from 'next/image'

function ContentState() {

    const data = [
      {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg",
        "color": "bg-[#FFF6F5]"
      },
      {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg",
        "color": "bg-[#FFFBF2]",
      },
      {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg",
        "color": "bg-[#F2FBFA]",
      },
      {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg",
        "color": "bg-[#F3F3FD]",
      }
    ]
    


    return (
      <div className=' md:h-2/4 md:w-[36%] flex-col w-full md:ml-10 ml-[5rem] flex md:flex-row justify-end bg-white rounded-3xl  shadow-lg-shadowColor'>
          <div className='flex flex-col mr-16 mt-5'>
              <h1 className='font-bold text-md mb-2'>Summary</h1>
              <div className='flex flex-col justify-between gap-4'>
                 {data.map((item, index) => (
                    <div key={index} className={` md:w-56 w-[95%] md:h-10 h-[2.7rem] flex flex-row justify-between rounded-lg ${item.color}`}>
                      <div className='flex justify-between gap-6 ml-2 mt-2'>
                        <div className='flex items-center gap-2'>
                          <Image src={item.icon} width={15} height={15}/>
                          <span>{item.category}</span>
                        </div>
                        <span className='flex justify-end items-center md:absolute xs:absolute right-14 md:right-[35rem]'> {item.score}<span className=' text-[#9C9AA0] ml-1'>/ 100</span></span>
                      </div>
                    </div>
                 ))}
                  </div>
          </div>
  
          <div className='flex justify-center items-center bg-[#303B59] absolute md:bottom-[12rem] md:right-[35%] w-[80%] md:w-56 md:h-10 h-12 rounded-full cursor cursor-pointer hover:bg-gradient-to-b from-color1 via-color2 to-color3'>
            <button className='text-white text-sm '>Continue</button>
          </div>
          
      </div>
  )
}

export default ContentState