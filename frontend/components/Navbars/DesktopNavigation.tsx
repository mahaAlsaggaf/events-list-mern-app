import React, {useState} from "react";
import Link from 'next/link'
import { BsMoon, BsSearch } from 'react-icons/bs';

export function DesktopNavigation() {

  const [collapseClass, setcollapseClass] = useState("collapse navbar-collapse");


  const handleCollapsepButtonClick = () => {
     if (collapseClass == "show collapse navbar-collapse"){
      setcollapseClass("collapse navbar-collapse"); 
     }else{
      setcollapseClass("show collapse navbar-collapse" ); 
     }
  };
  return (
    <>
    {/* Nav bar  */}
    <nav className=" navbar navbar-expand-lg navbar-light bg-white justify-content-center">
      <div className="container">
        <Link href="/">
          <a href="/" className="navbar-brand">
              <img src={"/images/logo-light-mood.png"} width="60px" height="90px" alt="" />
          </a>
        </Link>
        <button onClick={handleCollapsepButtonClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={collapseClass}>
          <ul className="mx-auto text-center navbar-nav mb-2 mb-lg-0 py-lg-3 px-lg-5">
            <li className="nav-item mx-4">
              <Link href="/"><a className="nav-link" aria-current="page" href="#">Home</a></Link>
            </li>
            <li className="nav-item mx-4">
              <Link href="/reports"><a className="nav-link" href="#">Events List </a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};


   

export default DesktopNavigation;


