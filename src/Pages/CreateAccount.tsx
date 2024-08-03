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
        <div className="w-[100vw] h-[237vw] sm:h-[160vh] lg:h-[132vh] flex flex-col justify-start items-center gap-[2.6%] sm:gap-[4.9%] lg:gap-[7%]">
            <div className="h-[56px] w-[100%] px-[4.4%] flex justify-between items-center  " >
                <div onClick={handleBack} className="h-[24px] flex justify-between items-center hover:cursor-pointer">
                    <img className=" w-[24px]" src={ arrowLeft } />
                    <span className="hidden sm:inline w-[35px] ml-[12px]">Back</span>
                </div>
                <Logo/>
                <div className="h-[24px] w-[24px] "> </div>

            </div>
            <div className="h-[84%] sm:w-[416px] sm:h-[648px] lg:[654px] w-[86.7%] flex flex-col flex-[1] justify-start text-[18px] font-bold leading-[140%] gap-[3.3%] sm:gap-[32px]">
                Get started.
                <CreateAccForm/>
                {/*<Button className="text-white w-[100%]" > Create Account</Button>*/}
                <div className="text-[14px] font-medium leading-[140%] flex justify-start items-center gap-[8px]"> Already signed up? <span className="text-[#0B8659] font-bold"> Log in </span></div>
            </div>

        </div>
    )
}
export default CreateAccount;