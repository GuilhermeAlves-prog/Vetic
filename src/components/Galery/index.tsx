import { BG, Container } from "./style"

import cat3IMG from '../../assets/cat3.png'
import cat4IMG from '../../assets/cat4.png'
import dogglassIMG from '../../assets/dogglass.png'
import whitedogIMG from '../../assets/whitedog.png'
import yellowdogIMG from '../../assets/yellowdog.png'
import catanddogIMG from '../../assets/catanddog.png'
import bgIMG from  '../../assets/bg-galery.png'


export function Galery() {
  return (
    <Container id="galery">
      <BG src={bgIMG}/>
      <span>favorite pets</span>
      <h4>Our Gallery</h4>
      <p>Our Client Pets, as well as a Gallery with some nice pictures.</p>

      <div>
        <img src={cat3IMG} alt="cat" />
        <img src={dogglassIMG} alt="dog" />
        <img src={whitedogIMG} alt="dog" />
        <img src={yellowdogIMG} alt="dog" />
        <img src={cat4IMG} alt="cat" />
        <img src={catanddogIMG} alt="dog and cat" />
      </div>
    </Container>
  );
}