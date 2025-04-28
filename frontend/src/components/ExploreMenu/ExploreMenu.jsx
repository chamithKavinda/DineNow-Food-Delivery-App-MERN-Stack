import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      {/* <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Explore our menu and discover a delicious variety of dishes made to satisfy every craving. From sizzling fast food to healthy bites, we’ve got something for everyone. Dive in and treat yourself to your favorites—fresh, flavorful, and delivered to your door!</p> */}
      <div className="explore-menu-list">
        {menu_list.map((item,index) =>{
            return (
                <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
