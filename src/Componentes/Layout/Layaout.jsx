import React, { Children } from 'react'
import Header from '../Pages/Home/Header'

function Layaout({children}) {
  return (
    <>
      <Header/>
      <div className='flex flex-col items-center mt-20'>
         {children}
     </div>
    </>
  )
}

export default Layaout
