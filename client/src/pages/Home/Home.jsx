import React from 'react'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import Products from '../Products/Products'
const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
      <Products/>
      <div>
        <input type="checkbox" id="redCheckbox" name="color" value="red" onChange={()=>console.log("VALUE1")}/>
        <label >Red</label>
        <input type="checkbox" id="blueCheckbox" name="color" value="blue" onChange={()=>console.log("VALUE2")}/>
        <label for="blueCheckbox">Blue</label>
        <input type="checkbox" id="greenCheckbox" name="color" value="green" onChange={()=>console.log("VALUE3")}/>
        <label for="greenCheckbox">Green</label>
      </div>

    </div>
  )
}

export default Home