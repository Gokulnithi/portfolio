import React from 'react'

const Title = ({title,sub,id=''}) => {
  return (
    <div  className='flex flex-col items-center gap-5' id={id}>
      <div className='font-semibold md:text-5xl text-3xl text-center'>
        {title}
      </div>
      <div className='hero-badge'>
        <p>{sub}</p>
      </div>
    </div>
  )
}

export default Title
