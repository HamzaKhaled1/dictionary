import logo from "../public/assets/images/logo.svg";
import './header.css';
import moon from '../public/assets/images/icon-moon.svg';
import { useState } from "react";

const Header = () => {
  const [tog,setTog]=useState(false)
  function changeFont(font) {
    document.body.style.fontFamily = font
      ? `${font}Bold`
      : "Lora";
  }
 
  const togglemode=(e)=>{
    if(e.target.value){
      setTog(!tog)
    }
  }
  const root= document.querySelector("body");
  if(tog){
    root.classList.remove("light")
    root.classList.add("dark")
  }
  else{
    root.classList.remove("dark")
    root.classList.add("light")
  }
  

  return (
    <div className="flex  md:justify-start md:gap-96 md:items-end md:mt-14
                         mt-5 gap-28 ml-4">
      <img src={logo} alt="logo"  className="w-10 md:w-auto"/>

      <div className="flex gap-2 items-end">
        <select
          className="md:w-48   border p-0.5 border-gray-300 rounded bg-white text-gray-700 focus:outline-none"
          onChange={(e) => changeFont(e.target.value)}
        >
          <option className="font-loraBold w-4" value="lora">
            lora
          </option>
          <option className="font-inconsolaBold w-4" value="inconsolata">
            inconsolata
          </option>
          <option className="font-interBold w-4" value="inter">
            inter
          </option>
        </select>
        <span className="opacity-40">|</span>
        <div className="flex items-end">
          <label className="switch">
            <input type="checkbox" onClick={togglemode}  className="hidden" />
            <span className="slider round"></span>
          </label>
        </div>
        <img src={moon} alt="dark mode toggle" className= "" />
      </div>
    </div>
  );
};

export default Header;
