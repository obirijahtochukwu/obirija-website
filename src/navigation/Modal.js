import React from 'react';
import { FaTimes } from "react-icons/fa";
import './nav.css';
import links from "../data";


export default function Modal({sidebar, setSidebar, setHash, hash}) {

  const submit = (icon) =>{
   setHash(icon); 
   setSidebar(false);
  }
  
  return (
    <div className={sidebar ? 'modal-local show d-md-none' : 'modal-local'}>
      <main className='py-3 px-0'>
        {links.map((link, index)=>{
          const {text, icon} = link;
          return (
            <div href={icon} onClick={()=> submit(icon)} key={index} className={`text-center py-2 w-100 ${hash === icon && 'active'}`}>
              <i>{text}</i>
            </div>
          )
        })}
        <div className='close-btn px-3 py-2' onClick={()=> setSidebar(false)}>
          <FaTimes/>
        </div>
      </main>
    </div>
  )
}
