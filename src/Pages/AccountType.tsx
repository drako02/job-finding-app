import Logo from "../Components/Logo.tsx";
import {TitleBar} from "../StyledComponents/Headers.ts";
import {Card} from "../Components/Card.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import arrow from "../assets/arrowRight.svg"

const AccountType = () => {
    const [activeCard, setActiveCard] = useState<number| null>(null);
    const navigate = useNavigate();

    const handleClick = (cardId: number) => {
        setActiveCard(cardId);
    }
    const handleNext = () => {
        navigate("/signup/create-account");
    }

    return(
        <div className = "w-[100vw] h-[148vh] sm:h-[160vh] lg:h-[132vh] flex flex-col justify-start gap-[2.3%] items-center">
            <TitleBar>
                <Logo/>
            </TitleBar>

            <div
                className=" max-sm:h-[86.5%]  sm:h-[560px] w-[91%] sm:w-[560px] flex sm:grid sm:justify-start gap-10 sm:grid-cols-[1fr_1fr] sm:grid-rows-[34px_176px_176px_48px] flex-col justify-start  font-bold text-[18px] leading-[140%] sm:mt-[9.7%] lg:mt-[7.2%]">
                <span className="sm:col-span-2 sm:text-[24px] ">What type of account are you setting up?</span>
                <Card id={ 1 } active={ activeCard === 1 } onClick={ handleClick } candidate className="sm:row-start-2 sm:col-start-1 sm:mt-[25px]" />
                <Card id={ 2 } active={ activeCard === 2 } onClick={ handleClick } employer className="sm:row-start-2 sm:col-start-2 sm:mt-[25px]" />
                <Card id={ 3 } active={ activeCard === 3 } onClick={ handleClick } mentor soon className="sm:row-start-3 sm:col-start-1 sm:mt-[24px]" />
                <Card id={ 4 } active={ activeCard === 4 } onClick={ handleClick } trainer soon className="sm:row-start-3 sm:col-start-2 sm:mt-[24px]" />

                <button onClick={ handleNext } className="h-[48px] w-[100%] flex justify-center items-center gap-[3.7%] bg-black text-white border-0 text-[14px] leading-[140%] sm:col-span-2 mt-[40px]"> 
                    Next
                    <img src={arrow}/>
                </button>
            </div>
        </div>
    )
}
export default AccountType;