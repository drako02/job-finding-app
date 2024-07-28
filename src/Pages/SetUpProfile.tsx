import Title from "../Components/Title.tsx";
import smile from "../assets/smile.png";
import ProgressCircle from "../Components/ProgressCircle.tsx";
import ProfileCompletionCard from "../Components/ProfileCompletionCard.tsx";
import Button from "../Components/Button.tsx";
import { useNavigate } from "react-router-dom";
import TitleBar from "../Components/modal/TitleBar.tsx";
import info from "../assets/info.svg"
import TextInput from "../Components/modal/TextInput.tsx";



const SetUpProfile = () => {
    const navigate = useNavigate();

    const handleButton = () => {
        navigate("/profile");
    }

    return(
        <div className="h-[245.8vw]  flex flex-col justify-start items-center">
            <div className="modal-1  fixed z-[1] w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)] top-0 left-0">

                <div className="modal-content w-[100%] h-[585px] bg-white top-[10%] rounded-[4px]">

                    <TitleBar> Add Work Experience</TitleBar>
                    <div className=" h-[72px] flex justify-between items-center bg-[rgba(49,156,255,0.1)] ">
                        <div className="w-[60%] h-[40px] flex justify-start gap-[3.8%] items-center ml-[6.6%]">
                            <div className="w-[24px] h-[24px] flex justify-center items-center" >
                                <img src={info}/>
                            </div>
                            <p className="text-[14px] font-medium leading-[140%]"> Link your NSS details to Flair to make you more credible to employers. </p>
                        </div>
                        <Button className=" w-[91px] !h-[40px] mr-[6.6%]"> Link NSS</Button>

                    </div>

                    <div className="w-[100%] h-[440px] flex flex-col items-center py-[5.3%]">
                        <TextInput htmlFor="jobtitle" type="jobtitle" name="jobtitle"> Job Title</TextInput>
                    </div>

                </div>

            </div>


            <Title className="mb-[6.7%]"/>
            
            Set up profile
            <div style={{backgroundImage: `url(${smile})`, backgroundSize: 'auto 100%'}} className="bg-left h-[10%] w-[86.7%] my-[6.7%] bg-no-repeat bg-[#0B8659] flex justify-between items-center px-[5%] ">
                <span className="text-[16px] text-white font-bold leading-[150%]"> Profile <br/> Completion</span>
                <div className="h-[56px] w-[56px]">
                    <ProgressCircle progress={0} size={56} strokeWidth={6} />

                </div>
            </div>
            <div className="w-[86.7%] h-[58%] flex flex-col justify-between gap-[3.9%]">
                <ProfileCompletionCard name="education"/>
                <div className="flex justify-end"> <hr className="bg-[#E8E8E8] w-[87%] h-[1px]"/></div>
                <ProfileCompletionCard name="experience"/>
                <div className="flex justify-end"> <hr className="bg-[#E8E8E8] w-[87%] h-[1px]"/></div>
                <ProfileCompletionCard name="skills"/>
                <div className="flex justify-end"> <hr className="bg-[#E8E8E8] w-[87%] h-[1px]"/></div>
                <ProfileCompletionCard name="certifications"/>
                <div className="flex justify-end"> <hr className="bg-[#E8E8E8] w-[87%] h-[1px]"/></div>
                <ProfileCompletionCard name="accomplishments"/>
                <div className="flex justify-end"> <hr className="bg-[#E8E8E8] w-[87%] h-[1px]"/></div>
                <ProfileCompletionCard name="resume"/>


            </div>
            <div className="mb-0 w-[100%] h-[9%] mt-auto flex justify-center items-center gap-[2.2%]">
                <Button className="!w-[152px] bg-white !text-black !border-[1px] border-[#E8E8E8]"> I'll do it later</Button>
                <Button className="!w-[152px] bg-white !text-black !border-[1px] border-[#E8E8E8]"> Done </Button>
            </div>
        </div>
    )
}

export default SetUpProfile;