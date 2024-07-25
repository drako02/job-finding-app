import {TitleBar} from "../StyledComponents/Headers.ts";
import arrowLeft from "../assets/arrow-left.svg";
import Logo from "../Components/Logo.tsx";
import CreateAccForm from "../Forms/CreateAccForm.tsx";
import {useNavigate} from "react-router-dom";
import Button from "../Components/Button.tsx";

const CreateAccount = () => {
    const goBack = useNavigate();

    const handleBack = () => {
        goBack("/signup/account-type");
    }
    return(
        <div className="w-[100vw] h-[237vw] flex flex-col justify-start items-center gap-[2.6%]">
            <div className="h-[56px] w-[100%] px-[4.4%] flex justify-between items-center  " >
                <div onClick={handleBack} className="h-[24px] w-[24px] flex justify-center items-center hover:cursor-pointer">
                    <img src={arrowLeft}/>
                </div>
                <Logo/>
                <div className="h-[24px] w-[24px] "> </div>

            </div>
            <div className="h-[84%] w-[86.7%] flex flex-col flex-[1] justify-start text-[18px] font-bold leading-[140%] gap-[3.3%] ">
                Get started.
                <CreateAccForm/>
                {/*<Button className="text-white w-[100%]" > Create Account</Button>*/}
                <div className="text-[14px] font-medium leading-[140%] flex justify-start items-center gap-[4.5%]"> Already signed up? <span className="text-[#0B8659] font-bold"> Log in </span></div>
            </div>

        </div>
    )
}
export default CreateAccount;