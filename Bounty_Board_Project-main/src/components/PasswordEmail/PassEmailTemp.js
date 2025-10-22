import React from 'react'
import Logo from '../../shared/Logo.svg'

const PassEmailTemp = ({Children}) => {
  return (
    <div className='p-2'>
        <div className='flex justify-center'>
        <img src={Logo}/>
        
        </div>
        {Children}

    </div>
  )
}

export default PassEmailTemp