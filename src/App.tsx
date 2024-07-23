// import {BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import GlobalStyle from "./StyledComponents/GlobalStyle.ts";
import {LandingHeader, LandingTitleBar, UserTypeBar, UserTypeTabs} from "./StyledComponents/Headers.ts";
import Logo from "./Components/Logo.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTypeTabItems from "./Components/UserTypeTabItems.tsx";
import NavButton from "./Components/NavButton.tsx";

function App() {

  return (
      <>
        <GlobalStyle/>
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

      </>
  )
}

export default App
