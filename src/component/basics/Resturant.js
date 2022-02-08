import './style.css';
import Menu from './Menuapi';
import { useState } from 'react';
import MenuCard from './MenuCard';
import Navbar from './Navbar.js';

const uniqueList =[
  ...new Set(
  Menu.map((currElem)=>{
    return currElem.category;
  })
),"All",
];
const Resturant = () => {
  const [menuData,setMenuData]=useState(Menu);
  const [menuList,setMenuList]=useState(uniqueList);
  const filterItem = (category)=>{
    if(category==='All'){
      setMenuData(Menu);
      return
    }
    const updatedMenu= Menu.filter((currElem)=>{
      return currElem.category === category;
    })
    setMenuData(updatedMenu)
  }
  return <>
  <Navbar filterItem={filterItem} menuList={menuList} />
  <MenuCard menuData={menuData} />

  </>;
};

export default Resturant;
