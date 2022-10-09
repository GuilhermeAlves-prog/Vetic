import { Container, Content, Testemunials } from "./style";

import aspasIMG from '../../assets/aspas.svg'
import people1IMG from '../../assets/people1.png';
import people2IMG from '../../assets/people2.png';
import starsIMG from '../../assets/stars.png';

export function ClientReviews() {
  return (
    <Container>
      <span>OUR REVIEWS</span>
      <span>What People Say</span>

      <Content>
        <Testemunials>
          <div>
            <img src={people1IMG} alt="profile" />
            <img src={starsIMG} alt="profile" />
          </div>
          <p>
            "As a first time pet parent, I was very nervous before getting the neutering done for 
            my dog. Team at Vetic helped me soothe my nerves by guiding me through the procedure 
            and the required post-surgical care. They even reached out once in 2 days to check on 
            my pet’s recovery and that reassurance and care provided a lot of comfort to me & my 
            wife."
          </p>

          <img  className="bg" src={aspasIMG} alt="aspas" />

          <span>Ramesh Velaga</span>
          <span>UX/UI Designer</span>
        </Testemunials>

        <Testemunials>
          <div>
            <img src={people2IMG} alt="profile" />
            <img src={starsIMG} alt="profile" />
          </div>
          <p>
            "As a first time pet parent, I was very nervous before getting the neutering done for 
            my dog. Team at Vetic helped me soothe my nerves by guiding me through the procedure 
            and the required post-surgical care. They even reached out once in 2 days to check on 
            my pet’s recovery and that reassurance and care provided a lot of comfort to me & my 
            wife."
          </p>
          <img  className="bg" src={aspasIMG} alt="aspas" />
          <span>Yeshika Bedi</span>
          <span>Human Resource</span>
        </Testemunials>
      </Content>
    </Container>
  ) 
}