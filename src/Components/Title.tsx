import arrowLeft from "../assets/arrow-left.svg";
import Logo from "./Logo.tsx";

interface TitleProps {
    onClick?: () => void;

}

const Title = ({onClick}:TitleProps) => {
    return (
        <div className="h-[56px] w-[100%] px-[4.4%] flex justify-between items-center  ">
            <div onClick={onClick}
                 className="h-[24px] w-[24px] flex justify-center items-center hover:cursor-pointer">
                <img src={arrowLeft}/>
            </div>
            <Logo/>
            <div className="h-[24px] w-[24px] "></div>

        </div>
    )
}

export default Title;