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
        <div className = "w-[100vw] h-[292vw] flex flex-col justify-start gap-[2.3%] items-center">
            <TitleBar>
                <Logo/>
            </TitleBar>

            <div
                className="h-[86.5%] w-[91%] flex flex-col justify-start gap-[2.6%] font-bold text-[18px] leading-[140%]">
                What type of account are you setting up?
                <Card id={1} active={activeCard === 1} onClick={handleClick} candidate/>
                <Card id={2} active={activeCard === 2} onClick={handleClick} employer/>
                <Card id={3} active={activeCard === 3} onClick={handleClick} mentor soon/>
                <Card id={4} active={activeCard === 4} onClick={handleClick} trainer soon/>

                <button onClick={handleNext} className="h-[48px] w-[100%] flex justify-center items-center gap-[3.7%] bg-black text-white border-0 text-[14px] leading-[140%]">
                    Next
                    <img src={arrow}/>
                </button>
            </div>
        </div>
    )
}
export default AccountType;