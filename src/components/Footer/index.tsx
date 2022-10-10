import { Contact, Container, NewsLetter, UsefulLinks, WorkingHours } from "./style";

import logoIMG from '../../assets/logo.svg'
import phoneIMg from '../../assets/phone.svg'
import facebookIMG from '../../assets/facebook.svg'
import instagramIMG from '../../assets/instagram.svg'
import twitterIMG from '../../assets/twitter.svg'
import whatsappIMG from '../../assets/whatsapp.svg'
import arrowIMG from '../../assets/arrow-right.svg'

export function Footer() {
  return (
    <Container>
      <Contact>
        <img src={logoIMG} alt="logo"/>
        <p>
          Vetic is India’s first tech-integrated chain of modern clinics to cater to all your pet 
          needs such as wellness, consultations, grooming and nutrition.
        </p>

        <div>
          <img src={phoneIMg} alt="phone" />
          <div>
            <span>(+91) 8929043121</span>
            <p>Got Questions? Call us 24/7</p>
          </div>
        </div>
      </Contact>

      <WorkingHours>
        <span>Working Hours</span>
        <table>
          <tr>
            <td>Mon - Fri:</td>
            <td><strong>7am – 6pm</strong></td>
          </tr>

          <tr>
            <td>Saturday:</td>
            <td> <strong>9am – 4pm</strong></td>
          </tr>

          <tr>
            <td>Sunday:</td>
            <td><strong>Closed</strong></td>
          </tr>
        </table>
      </WorkingHours>

      <UsefulLinks>
        <span>Useful Links</span>
        <div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#galery">Galery</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Sales</a></li>
          </ul>
        </div>
      </UsefulLinks>

      <NewsLetter>
        <span>Newsletter</span>
        <p>Be first in the queue! Get our latest news straight to your inbox.</p>

        <form>
          <input type="email" name="newsletter" id="newsletter" placeholder="Email"/>
          <button><img src={arrowIMG} alt="arrow" /></button>
        </form>

        <a href="#"><img src={facebookIMG} alt="facebook" /></a>
        <a href="#"><img src={instagramIMG} alt="instagram" /></a>
        <a href="#"><img src={twitterIMG} alt="twitter" /></a>
        <a href="#"><img src={whatsappIMG} alt="whatsapp" /></a>
      </NewsLetter>
    </Container>
  );
}