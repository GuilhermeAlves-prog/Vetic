import { Container, InfoDropDawn,BtnShow, Pets} from "./style";

import arrowIMG from '../../assets/angle-down.svg'
import bgyellowIMG from '../../assets/bgyellow.png'
import petsIMG from '../../assets/pets.png'
import { useState } from "react";

export function About() {
const [activeDropdownId, setActiveDropdownId] = useState('1')

  return (
    <Container id="about">
      <div>
        <h3>Welcome To Our Family</h3>
        <p>
          Vetic is India’s first tech-integrated chain of modern clinics to cater to all your pet needs such as wellness,
          consultations, grooming and nutrition.
        </p>

        <InfoDropDawn 
          itemID = {activeDropdownId}
          >
          <div>
            <span>How Vetic Pet Care Started </span>
            <BtnShow
              onClick={() => {setActiveDropdownId(activeDropdownId == '0' ? '1' : '0'), console.log(activeDropdownId)}}
              itemID = {activeDropdownId}
            >
              <img src={arrowIMG} alt="arrow" />
            </BtnShow>
          </div>
          <p>
            Create a platform that provides best in class knowledge to fill the information gap for pet parents and provide
            exceptional pet care through a chain of digital first modern clinics.
          </p>
        </InfoDropDawn>

        <InfoDropDawn 
          itemID = {activeDropdownId}
        >
          <div>
            <span>Mission Statement</span>
            <BtnShow
              onClick={() => {setActiveDropdownId(activeDropdownId == '0' ? '2' : '0'), console.log(activeDropdownId)}}
              
              itemID = {activeDropdownId}
            >
              <img src={arrowIMG} alt="arrow" />
            </BtnShow>
          </div>
          <p>
            Create a platform that provides best in class knowledge to fill the information gap for pet parents and provide
            exceptional pet care through a chain of digital first modern clinics.
          </p>
        </InfoDropDawn>

        <InfoDropDawn 
          itemID = {activeDropdownId}
        >
          <div>
            <span>Value Added Services</span>
            <BtnShow
              onClick={() => {setActiveDropdownId(activeDropdownId == '0' ? '3' : '0'), console.log(activeDropdownId)}}
              
              itemID = {activeDropdownId}
            >
              <img src={arrowIMG} alt="arrow" />
            </BtnShow>
          </div>
          <p>
            Create a platform that provides best in class knowledge to fill the information gap for pet parents and provide
            exceptional pet care through a chain of digital first modern clinics.
          </p>
        </InfoDropDawn>

        <InfoDropDawn 
            itemID = {activeDropdownId}
          >
          <div>
            <span>Social Responsability</span>
            <BtnShow
              onClick={() => {setActiveDropdownId(activeDropdownId == '0' ? '4' : '0'), console.log(activeDropdownId)}}
              itemID = {activeDropdownId}
            >
              <img src={arrowIMG} alt="arrow" />
            </BtnShow>
          </div>
          <p>
            Create a platform that provides best in class knowledge to fill the information gap for pet parents and provide
            exceptional pet care through a chain of digital first modern clinics.
          </p>
        </InfoDropDawn>
      </div>

      <Pets>
        <img src={petsIMG} alt="cats and dogs" />
        <img src={bgyellowIMG} alt="background" />
      </Pets>
    </Container>
  );
}
