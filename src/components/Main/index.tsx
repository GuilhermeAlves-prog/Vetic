import { MainContent } from "./style";
import { Cards } from "../Servicesprev";

import imgdog from '../../assets/dog1.png'
import imgcat from '../../assets/cat1.png'
import yellowpawimg from '../../assets/paw-btn.svg'
import bgleft from '../../assets/bg-left.png'
import bgheaderimg from '../../assets/bg-main.png'




export function Main() {
  return (
    <MainContent>
      <div className="dog">
        <img className="bg-image" src={bgleft} alt="background" />
        <img src={imgdog} alt="dog" />
      </div>

      <div className="apresentation">
        <h1>The World's Best Team for Pet Care Services</h1>
        <p>
          Vetic is India’s first tech-integrated chain of modern clinics to cater to all
          your pet needs such as wellness, consultations,
          grooming and nutrition.
        </p>

        <button>
          <img src={yellowpawimg} alt="paw" />
          Our Services
        </button>

        <Cards />
      </div>

      <div className="cat">
        <img src={imgcat} alt="cat" />
      </div>
    </MainContent>
  )
}