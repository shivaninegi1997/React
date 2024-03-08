import React, { useState } from 'react'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import Products from '../Products/Products'
import Accordion from '../../components/Accordion/Accordion'
import InfoIcon from '@mui/icons-material/Info';
const Home = () => {

  
  const Adata=[
    {
      "id":1,
      "title": "Introduction",
      "content": "Welcome to our project! In this section, we'll introduce you to the main concepts and goals. Our project aims to revolutionize the way you work by providing intuitive tools and seamless collaboration features. Whether you're a beginner or an expert, our platform is designed to enhance your productivity and streamline your workflow."
    },
    {
      "id":2,
      "title": "Features",
      "content": "Discover the amazing features of our project, including real-time collaboration, customizable templates, and more! With our project, you can collaborate with team members in real-time, making it easier than ever to share ideas and work together towards your goals. Our customizable templates allow you to tailor your workspace to suit your specific needs, ensuring maximum efficiency and flexibility."
    },
    {
      "id":3,
      "title": "How to Use",
      "content": "Learn how to make the most out of our project with this detailed guide on usage and best practices. Whether you're new to our platform or a seasoned user, this guide will walk you through everything you need to know to get started and master our project. From setting up your account to exploring advanced features, we've got you covered every step of the way."
    },
    {
      "id":4,
      "title": "FAQs",
      "content": "Got questions? Check out this section for answers to the most frequently asked questions about our project. Our comprehensive FAQ covers a wide range of topics, including account setup, troubleshooting, and more. If you can't find the answer you're looking for, don't hesitate to reach out to our support team for assistance."
    },
    {
      "id":5,
      "title": "Contact Us",
      "content": "Need further assistance? Reach out to our friendly support team for help and inquiries. Our dedicated team of experts is here to assist you with any questions or concerns you may have. Whether you need technical support, account assistance, or just want to provide feedback, we're always happy to hear from you."
    }
  ] 

  const[isChecked,setisChecked] = useState({
    checkbox1:false,
    checkbox2:false,
    checkbox3:false,
    checkbox4:false
  })

  const[Data,setData] = useState(Adata)
  const[Hdata,setHdata] = useState(false)

  const handleCheckboxChange = (name) =>{
    setisChecked({
      ...isChecked,
      [name]:!isChecked[name]
    })
    // console.log({name})
    
  }
  
  const receiveDataFromChild = (id,newContent) => {
    console.log(id,newContent)
    const newData = Adata.map((j) => {
      if(j.id===id){
        return {...j,content:newContent}
      }
      return j
    })
    setData(newData)
  }
  const handleMouseEnter = () => {
    setHdata(true)
    

  }
  const handleMouseLeave = () => {
    setHdata(false)
    

  }
  console.log(Data)
  return (
    <div className='home'>
      {/* <Slider/>
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
      <Products/>
      <div>
        <input type="checkbox" 
        checked = {isChecked.checkbox1} 
        onChange={()=>handleCheckboxChange("checkbox1")}/>
        <label >Red</label>
        <input type="checkbox" 
        checked = {isChecked.checkbox2} 
        onChange={()=>handleCheckboxChange("checkbox2")}/>
        <label >Blue</label>
        <input type="checkbox" 
        checked = {isChecked.checkbox3} 
        onChange={()=>handleCheckboxChange("checkbox3")}/>
        <label >green</label>
        <input type="checkbox" 
        checked = {isChecked.checkbox4} 
        onChange={()=>handleCheckboxChange("checkbox4")}/>
        <label >yellow</label>
      </div>

 
      {
      Object.values(isChecked).map((i) => {
        return (i && <p>gg:{i.toString()}</p>)
      })
      } */}
      {/* Accordion */}
      {/* {
         Data.map((o,i) => (
         <Accordion param1={o} param2={receiveDataFromChild}/>
          
      ))} */}

      {/* i icon hover */}
        {/* <div style={{position:"relative"}}>
        <InfoIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        {
          Hdata &&
               <div style={{position:"absolute",background:"blue",left:"35px",bottom:"5px",left:"22px"}}>
               <p>hey.............</p>
              </div>
        }
   
        </div> */}

      </div>
    
  )
}

export default Home