import React from 'react'
import { testimonials } from '../constants'
import Title from '../components/Title'
import Glowcard from '../components/Glowcard'
const Testimonials = () => {
  
    return (
    <section id='testimonials' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <Title title ="What People Say About Me?" sub="⭐ This is Me." />
            <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
                {testimonials.map((val,index)=>(
                    <Glowcard card={val} key={index}>
                        <div className='flex items-center gap-3'>
                            <div>
                                <p className='font-bold'>
                                    {val.name}
                                </p>
                                <p className='text-white-50'>
                                    {val.mentions}
                                </p>
                            </div>
                        </div>
                    </Glowcard>
                ))}

            </div>
       
        </div>
    </section>
  )
}

export default Testimonials
