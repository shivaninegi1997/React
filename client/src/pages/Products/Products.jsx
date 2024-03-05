import { orange } from '@mui/material/colors'
import React from 'react'

const Products = () => {
  return (
    <div className='Main' style={{background:"blue",display:'flex',gap:"40px"}}>
      <div className='left'style={{background:"yellow"}}>
      left
      </div>
      <div className='right' style={{background:"orange"}}>
        <div className='top' style={{background:"green"}}>
        top
        </div>
        <div className='bottom' style={{background:"red"}}>
        bottom
        </div>

      </div>

    </div>
  )
}

export default Products