import styled from "styled-components";
import hero from "../images/hero.svg";
import stars from "../images/stars.svg";
const HeroWrapper = styled.div`
  width: 100vw;
  background-color: #f8f9fa;
  /* border: 1px solid green; */
  margin-top: 6rem;
  display: flex;
  padding: 0 5rem;
`;

const HeroSideLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  
  height: 99%;
`;
const HeroSideRight = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 99%;
`;

const HeroTitle = styled.p`
  font-family: "Poppins, Helvetica, Arial, sans-serif";
  font-size: 24px;
  line-height: 36px;
  font-weight: 600px;
  color: #ea319f;
`;
const MainHeroText = styled.p`
  font-family: "Poppins, Helvetica, Arial, sans-serif";
  font-size: 16px;
  line-height: 27px;
  font-weight: 400px;
  color: #2d3748;
  margin-top: 0.8rem;
`;

const HeroButton = styled.button`
  
  font-weight: 500;
  color: white;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #377dff;
  border-color: #377dff;

  border-color: #377dff;

  padding: 0.75rem 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 0.3125rem;
  transition: all 0.2s ease-in-out;
  margin-top: 2rem;
  width: 15rem;
  :hover{
      outline: none;
      border: none;
  }
  :active{
      background-color:#0743b1 ;
  }
`;

const HeroFooter = styled.div`
    display: flex;
    /* justify-content: space-between; */
    margin-top: 1rem;
    align-items: center;

`

const Stars = styled.img`
margin-right: 0.2rem;
max-width: 100px;
`
const TextNumber = styled.p`
    font-size: 0.9rem;
    font-weight: 400px;
    color: #77838f;
    margin-left: 0.5rem;
    
`
const HeroImage = styled.img`
    max-width    : 100% ;


`

const MainHero = () => {
  return (
    <HeroWrapper>
      <HeroSideLeft>

        <HeroTitle>Receive and send emails anonymously</HeroTitle>
        <MainHeroText>
          With email aliases , you can be anonymous online and protect your
          inbox against spams and phishing. Open-source. Made and hosted in
          Europe.
        </MainHeroText>
        <HeroButton> Get your aliases for free >></HeroButton>
        <HeroFooter>
            <Stars src={stars}/>
            <b>
            <TextNumber>800,000+</TextNumber>
            </b>
            <TextNumber>aliases created.</TextNumber>
        </HeroFooter>

      </HeroSideLeft>

      <HeroSideRight>
          <HeroImage src={hero} />
      </HeroSideRight>
      
    </HeroWrapper>
  );
};

export default MainHero;
