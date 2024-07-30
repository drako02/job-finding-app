import GlobalStyle from "../StyledComponents/GlobalStyle.ts";
import {Image1, Image2, Image3} from "../StyledComponents/Images.ts";
import image1 from "../assets/images/image_1.png";
import image2 from "../assets/images/image_2.png";
import image3 from "../assets/images/image_3.png";
import {LandingHeader, LandingTitleBar, UserTypeBar, UserTypeTabs} from "../StyledComponents/Headers.ts";
import UserTypeTabItems from "../Components/UserTypeTabItems.tsx";
import Logo from "../Components/Logo.tsx";
import {CtaButton, StyledNavButton} from "../StyledComponents/Buttons.ts";
import navLogo from "../assets/nav_button.svg";
import {LandingBody} from "../StyledComponents/Body.ts";
import LoginButton from "../Components/LoginButton.tsx";
import {CtaArea, InputContainer, SearchIcon, WelcomeArea} from "../StyledComponents/Miscellaneous.ts";
import {InputHolder, SearchInput} from "../StyledComponents/Inputs.ts";
import search from "../assets/search.svg";
import Dropdown from "../Components/Dropdown.tsx";
import arrow from "../assets/arrow_right.svg";
import {Route, Routes, useNavigate} from "react-router-dom";
import Layout from "./Layout.tsx";
import AccountType from "./AccountType.tsx";
import React, {useState} from "react";

const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return(
        <div className="h-[100vh] ">
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
                    <StyledNavButton onClick={toggleDropdown}> <img src={navLogo}/></StyledNavButton>

                </LandingTitleBar>
            </LandingHeader>

            <LandingBody className="">
                {isOpen && (
                    <div className=" flex flex-col justify-between gap-1 items-center absolute border-2 right-[10px]  origin-top-right">
                        <div> Jobs </div>
                        <div>Mentorship</div>
                        <div> Training</div>
                        <LoginButton signUp />
                        <LoginButton/>
                    </div>
                )}
                <WelcomeArea className="md:!hidden">
                    Discover a greater you
                    <div>We help you <span>find the perfect job </span> </div>
                </WelcomeArea>
                <CtaArea className="md:!hidden">
                    <InputContainer>
                        <InputHolder>
                            <SearchIcon src={search}/>
                            <SearchInput/>
                        </InputHolder>
                    </InputContainer>
                    <InputContainer>
                        <Dropdown/>
                    </InputContainer>
                    <CtaButton> <img src={arrow} alt="arrow"/></CtaButton>

                </CtaArea>

                <div className="hidden md:flex flex-col justify-between h-[34.6%] w-[64.5%] lg:h-[36.6%]  lg:w-[44.2%] ">
                    <WelcomeArea>
                        Discover a greater you
                        <div>We help you <span>find the perfect job </span> </div>
                    </WelcomeArea>
                    <CtaArea>
                        <InputHolder>
                            <SearchIcon src={search}/>
                            <SearchInput/>
                        </InputHolder>
                        <Dropdown/>
                        <CtaButton> <img src={arrow} alt="arrow"/></CtaButton>

                    </CtaArea>
                </div>

            </LandingBody>



        </div>
    )
}

export default Home;