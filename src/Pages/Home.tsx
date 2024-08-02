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
import Button from "../Components/Button.tsx";
import jobsIcon from "../assets/jobicon.svg";
import mentorshipIcon from "../assets/membershipIcon.svg";
import trainingsIcon from "../assets/trainingsIcon.svg";

const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return(
        <div className="h-[100vh] lg:h-[110vh]">
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

                    <div className="hidden lg:flex w-[30%] justify-between items-center text-[14px] font-medium leading-[140%]">
                        <div className="flex justify-center items-center">
                            <div className="flex justify-center items-center h-[24px] w-[24px]"><img className=" h-[20px] w-[20px] mr-[5px]" src={jobsIcon}/></div>

                            Jobs
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="flex justify-center items-center h-[24px] w-[24px]"><img className=" h-[20px] w-[20px] mr-[5px]" src={mentorshipIcon}/></div>
                            Mentorship
                        </div >
                        <div className="flex justify-center items-center">
                            <div className="flex justify-center items-center h-[24px] w-[24px]"><img className=" h-[20px] w-[20px] mr-[5px]" src={trainingsIcon}/></div>
                            Trainings
                        </div>

                    </div>

                    <div className="flex justify-end items-center gap-[6%]">
                        <div className="hidden md:flex w-[172px] justify-between">
                            <Button
                                className="w-[83px] h-[48px] bg-white !text-black border-[1px] border-[#F5F5F5]">Login</Button>
                            <Button onClick={() => navigate("signup/account-type")} className="w-[83px] h-[48px]">Sign up</Button>

                        </div>
                        <StyledNavButton onClick={toggleDropdown}> <img src={navLogo}/></StyledNavButton>
                    </div>

                </LandingTitleBar>
            </LandingHeader>

            <LandingBody className="">
                {isOpen && (
                    <div
                        className=" flex flex-col justify-between gap-1 items-center absolute border-2 right-[10px]  origin-top-right">
                        <div> Jobs </div>
                        <div>Mentorship</div>
                        <div> Training</div>
                        <LoginButton onClick={() => navigate("signup/account-type")} signUp />
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
                    <InputContainer className="">
                        <Dropdown/>
                    </InputContainer>
                    <CtaButton> <img src={arrow} alt="arrow"/></CtaButton>

                </CtaArea>

                <div className="hidden md:flex flex-col justify-between md:w-[64.5%] lg:w-[44.2%] md:h-[34.6%] lg:h-[36.6%]  md:mt-[20.4%] lg:mt-[12.6%] z-0">
                    <WelcomeArea>
                        Discover a greater you
                        <div>We help you <span>find the perfect job </span> </div>
                    </WelcomeArea>
                    <CtaArea>
                        <div className="w-[90%] flex items-center justify-end">
                            <InputHolder>
                                <SearchIcon src={search}/>
                                <SearchInput/>
                            </InputHolder>
                            <Dropdown/>
                        </div>

                        <CtaButton> <img src={arrow} alt="arrow"/></CtaButton>

                    </CtaArea>
                </div>

            </LandingBody>



        </div>
    )
}

export default Home;