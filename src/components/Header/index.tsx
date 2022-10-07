import { HeaderNavegation } from "./style"
import { Main } from "../Main"


import logoimg from '../../assets/logo.svg'



export function Header() {

  return (
    <HeaderNavegation>
      <nav>
        <a href="">
        <img src={logoimg} alt="logo" />
        </a>
 

        <ul>
          <li><a href="">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="">Gallery</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="#book">Book Appointment</a></li>
        </ul>
      </nav>

      <Main />
    </HeaderNavegation>
  )
} 
