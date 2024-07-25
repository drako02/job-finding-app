import Title from "../Components/Title.tsx";
import verify from "../assets/Verify.svg";
import {useNavigate} from "react-router-dom";

const VerifyAccount = () => {
    const navigate = useNavigate();

    const handleVerification = () => {
        navigate("/logged-in/select-career-status")
    };

    return(
        <div className=" h-[100vh] flex flex-col justify-start items-center">
            <Title/>

            <div className="w-[106px] h-[128px] mt-[26.7%]">
                <img src={verify}/>
            </div>
            <div onClick={handleVerification} className="h-[27.8%] w-[82%] mt-[11%] flex flex-col justify-between text-[20px] font-bold leading-[140%] items-center">
                Verify your account
                <p className="text-[14px] font-medium leading-[140%] text-center tracking-[0]">
                    A verification email will be sent to your email address provided. Click on the link in the mail to verify your account.
                </p>
                <div className="h-[16.7%] w-[69.6% text-[14px] font-bold text-[#818181] leading-[140%] flex flex-col justify-center items-center bg-[#F5F5F5] rounded-[40px] border-1 border-[#E8E8E8]">
                    and******ah@gmail.com

                </div>
                <span className="text-[14px] font-bold leading-[140%]"> Resend link </span>


            </div>
        </div>
    )
}
export default VerifyAccount;