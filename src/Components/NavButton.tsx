import {StyledNavButton} from "../StyledComponents/Buttons.ts";
import navLogo from '../assets/nav_button.svg'


function NavButton () {
    return (
        <StyledNavButton> <img src={navLogo}/></StyledNavButton>
    )
}

export default NavButton;