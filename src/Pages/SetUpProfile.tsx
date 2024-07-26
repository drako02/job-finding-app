import Title from "../Components/Title.tsx";
import smile from "../assets/smile.png";
import ProgressCircle from "../Components/ProgressCircle.tsx";
import ProfileCompletionCard from "../Components/ProfileCompletionCard.tsx";

const SetUpProfile = () => {
    return(
        <div className="h-[148vh] flex flex-col justify-start items-center">
            <Title/>

            Set up profile
            <div style={{backgroundImage: `url(${smile})`, backgroundSize: 'auto 100%'}} className="bg-left h-[10%] w-[86.7%] bg-no-repeat bg-[#0B8659] flex justify-between items-center px-[5%] ">
                <span className="text-[16px] text-white font-bold leading-[150%]"> Profile <br/> Completion</span>
                <div className="h-[56px] w-[56px]">
                    <ProgressCircle progress={0} size={56} strokeWidth={6} />

                </div>
            </div>
            <div className="w-[86.7%] h-[58%]">
                <ProfileCompletionCard name="education"/>
                <ProfileCompletionCard name="experience"/>
                <ProfileCompletionCard name="skills"/>
                <ProfileCompletionCard name="certifications"/>
                <ProfileCompletionCard name="accomplishments"/>
                <ProfileCompletionCard name="resume"/>


            </div>
            <div className="mb-0 w-[100%] h-[9%]">

            </div>
        </div>
    )
}

export default SetUpProfile;