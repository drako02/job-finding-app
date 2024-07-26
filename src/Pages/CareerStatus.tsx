import Title from "../Components/Title.tsx";
import Button from "../Components/Button.tsx";
import {useNavigate} from "react-router-dom";

const CareerStatus = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate("/logged-in/set-up-profile")
    }

    return(
        <div className="h-[100vh] flex flex-col justify-start items-center gap-[4%] font-bold text-[18px] leading-[140%]">
            <Title hide/>
            <div className="h-[41.5%] w-[86.7%] flex flex-col gap-[10%]">
                Where are you currently in your professional career?

                <div className="h-[74.5%] w-[100%] font-bold text-[14px] leading-[140%] flex flex-col justify-between">
                    <div className="h-[20%] w-[100%] border-[1px] border-[#E8E8E8] rounded-[40px] flex justify-center items-center">
                        Still in school
                    </div>
                    <div className="h-[20%] w-[100%] border-[1px] border-[#E8E8E8] rounded-[40px] flex justify-center items-center">
                        Currently doing National Service
                    </div>
                    <div className="h-[20%] w-[100%] border-[1px] border-[#E8E8E8] rounded-[40px] flex justify-center items-center">
                        Done with National Service
                    </div>
                    <div className="h-[20%] w-[100%] border-[1px] border-[#E8E8E8] rounded-[40px] flex justify-center items-center">
                        Experienced Professional
                    </div>

                </div>
            </div>
            <Button onClick={handleContinue} className="w-[86.7%] mt-[79.4%]"> Continue </Button>
        </div>
    )
}

export default CareerStatus;