import {React, useState} from 'react';
import "./nav.css";
import links from "../data";


export default function Navbar() {

  const [hash, setHash] = useState('#');
  window.location.hash = hash;

  return (
    <article className='desktop'>
      <div className='d-none d-md-block container-fluid-md container-lg desktop'>
        <main className='d-flex justify-content-between align-items-center'>
          <div className='logo'><i>Tochukwu</i></div>
          <div className='d-flex align-items-center'>
            {links.map((link, index)=>{
              const {text, icon} = link;
              return (
                <div href={icon} onClick={()=> setHash(icon)} key={index} className={`p-2 my-1 mx-1 text-capitalize d-link ${hash === icon && 'desktop-active'}`}>{text}</div>
              )
            })}
          </div>
        </main>
      </div>
    </article>
  )
}
