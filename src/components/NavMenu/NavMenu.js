import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const NavMenuStyles = styled.div`
  background-color: #04202e;
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 1rem 0;
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: grey;
      }
    }
    a {
      display: inline-block;
      font-family: "Poppins Regular";
      padding: 1rem 1rem;
      font-size: 16px;
      color: white;
      outline: none;
      text-decoration: none;
    }
    .active {
      color: yellow;
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    *{
      pointer-events: none;
    }
  }
  .nav-item .closeNavicon {
      display: none;
    }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
      color: yellow;
    }
    
    .nav-item {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: black;
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavicon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        color: yellow;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {
  const [ShowNav, SetShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <div className="mobile-menu-icon"
        onClick={() => SetShowNav(!ShowNav)}
        role="button"
        onKeyDown={() => SetShowNav(!ShowNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>

      <ul className={!ShowNav ? "nav-item hide-item" : "nav-item"}>
        <div
          className="closeNavicon"
          onClick={() => SetShowNav(!ShowNav)}
          role="button"
          onKeyDown={() => SetShowNav(!ShowNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>

        <li>
          <NavLink to={"/"} exact="true"  onClick={() => SetShowNav(!ShowNav)}
          role="button"
          onKeyDown={() => SetShowNav(!ShowNav)}
          tabIndex={0}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to={"/aboutme"}  onClick={() => SetShowNav(!ShowNav)}
          role="button"
          onKeyDown={() => SetShowNav(!ShowNav)}
          tabIndex={0}>ABOUTME</NavLink>
        </li>
        <li>
          <NavLink to={"/resume"}  onClick={() => SetShowNav(!ShowNav)}
          role="button"
          onKeyDown={() => SetShowNav(!ShowNav)}
          tabIndex={0}>RESUME</NavLink>
        </li>
        <li>
          <NavLink to={"/testimonial"}
          onClick={() => SetShowNav(!ShowNav)}
          role="button"
          onKeyDown={() => SetShowNav(!ShowNav)}
          tabIndex={0}
          >TESTIMONIAL</NavLink>
        </li>
        <li>
          <NavLink to={"/projects"}  onClick={() => SetShowNav(!ShowNav)}
          role="button"
          onKeyDown={() => SetShowNav(!ShowNav)}
          tabIndex={0}>PROJECTS</NavLink>
        </li>
        <li>
          <NavLink to={"/contactme"}  onClick={() => SetShowNav(!ShowNav)}
          role="button"
          onKeyDown={() => SetShowNav(!ShowNav)}
          tabIndex={0}>CONTACTME</NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
