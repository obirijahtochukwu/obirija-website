import { React, useState} from 'react';
import { FaBars } from "react-icons/fa";
import './nav.css'
import Modal from './Modal'

export default function Sidebar() {

  const [sidebar, setSidebar] = useState(false);
  const [hash, setHash] = useState('#');
  window.location.hash = hash;

  return (
    <>
      <main className='blue text-white d-md-none'>
        <section>
          <div className="top-bar container d-flex justify-content-between align-items-center py-2">
            <span className='logo'><i>Tochukwu</i></span>
            <div onClick={()=> setSidebar(true)}><FaBars/> </div>
          </div>
        </section>
      </main>
      <Modal sidebar={sidebar} setSidebar={setSidebar} hash={hash} setHash={setHash}/>
    </>
  )
}
