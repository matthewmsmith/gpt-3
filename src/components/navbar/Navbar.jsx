import React, {useState} from "react";
import { HiMenuAlt3} from "react-icons/hi";
import {AiOutlineClose} from 'react-icons/ai'

import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
 const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="navbar logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT3?</a>
          </p>
          <p>
            <a href="#possibility">OpenAI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        { toggleMenu ? 
        <AiOutlineClose color="#fff" size={27} onClick={() => setToggleMenu(false)} /> : 
        <HiMenuAlt3 color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
      </div>
    </div>
  );
};

export default Navbar;
