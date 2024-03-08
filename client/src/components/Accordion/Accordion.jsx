import { blue } from '@mui/material/colors'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const Accordion = ({param1,param2}) => {

    const[showData,setShowData] = useState(false)
    const[updateData,setUpdateData] = useState(false)
    const[text,setText] = useState(param1.content)

    const data1 = () => {
         setShowData(!showData)
         console.log(showData)
        
    }
    const data2 = () => {
        setUpdateData(!updateData)
        console.log(updateData)
       
   }

   const handleChange = (event) => {
        setText(event.target.value)
        console.log({text})
   }

   const icon1 = () => {
    console.log({text})
    param2(param1.id,text)

   }

   const icon2 = () => {
   console.log("cancel")
   }

  return (
    <div>
        <div onClick={() => data1()} style={{background:"grey"}}>
             {param1.title}
             {showData && <div style={{background:"white"}}>
                <div>{param1.content} 
                <span><EditIcon onClick={(e)=>{ 
                    e.stopPropagation(); 
                    data2()
                    }}/>
                
                </span>
                </div>
                <div>
                {updateData && (
                <div>
                <textarea
                onClick={(e) => e.stopPropagation()} 
                style={{width:"1373px",height:"119px"}} 
                value={text}
                onChange={handleChange}
                />
                <CheckIcon
                onClick={(e) => {e.stopPropagation(); icon1()}}
                />
                <ClearIcon
                onClick={(e) => {e.stopPropagation(); icon2()}}
                />
                </div>
                )}

                </div>
                
                </div>}
             </div>
     </div>
    
  )
}

export default Accordion