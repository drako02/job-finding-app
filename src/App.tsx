// import {BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import GlobalStyle from "./StyledComponents/GlobalStyle.ts";
import {LandingHeader, LandingTitleBar, UserTypeBar, UserTypeTabs} from "./StyledComponents/Headers.ts";
import Logo from "./Components/Logo.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTypeTabItems from "./Components/UserTypeTabItems.tsx";
import NavButton from "./Components/NavButton.tsx";
import {LandingBody} from "./StyledComponents/Body.ts";
import {CtaArea, InputContainer, WelcomeArea} from "./StyledComponents/Miscellaneous.ts";
import {Image1, Image2, Image3} from "./StyledComponents/Images.ts";
import image1 from "./assets/images/image_1.png"
import image2 from "./assets/images/image_2.png"
import image3 from "./assets/images/image_3.png"
import {CtaButton} from "./StyledComponents/Buttons.ts";
import arrow from "./assets/arrow_right.svg";

function App() {

  return (
      <>
        <GlobalStyle/>
          <Image1 src={image1}/>
          <Image2 src={image2}/>
          <Image3 src={image3}/>
          <LandingHeader>
              <UserTypeBar>
                  <UserTypeTabs>
                      <UserTypeTabItems></UserTypeTabItems>
                  </UserTypeTabs>
              </UserTypeBar>
              <LandingTitleBar>
                  <Logo/>
                  <NavButton/>
              </LandingTitleBar>
          </LandingHeader>
          <LandingBody>
              <WelcomeArea>
                  Discover a greater you
                  <div>We help you find the perfect job </div>
              </WelcomeArea>
              <CtaArea>
                  <InputContainer>

                  </InputContainer>
                  <InputContainer>

                  </InputContainer>
                  <CtaButton> <img src={arrow} alt="arrow"/></CtaButton>

              </CtaArea>
          </LandingBody>

      </>
  )
}

export default App
