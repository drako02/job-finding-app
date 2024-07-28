import React from "react";
import edu from "../assets/edu.svg";
import experience from "../assets/work.svg";
import skills from "../assets/skill.svg";
import cert from "../assets/cert.svg";
import accom from "../assets/acco.svg";
import resume from "../assets/resume.svg";
import add from "../assets/plus.svg"


interface Props {
    className?:string,
    name:"education"|"experience"|"skills"|"certifications"|"accomplishments"|"resume"
    onClick?: () => void

}
const ProfileCompletionCard = ({className, name, onClick}:Props) => {
    return(
        <div className={`${className} relative flex justify-between items-start h-[10%]`}>
            <div className="w-[24px] h-[24px] flex justify-center items-center">
                <img src={name==="education"? edu
                    :name==="certifications"? cert
                        :name==="resume"? resume
                            :name==="skills"? skills
                                :name==="experience"? experience
                                    :name==="accomplishments"? accom:""
                }/>
            </div>
            <div className="w-[87%] h-[100%] flex flex-col justify-between">
                <div className="w-[100%] h-[46%%] flex justify-between text-[16px] font-bold leading-[150%]">
                    {name==="education"? "Education"
                        :name==="certifications"? "Certifications"
                            :name==="resume"? "Upload Resume"
                                :name==="skills"? "Interests & Skills"
                                    :name==="experience"? "Work Experience"
                                        :name==="accomplishments"? "Accomplishments":""
                    }

                    <div onClick={onClick} className="w-[24px] h-[24px] flex justify-center items-center ">
                        <img  src={add} className="w-[16px] h-[16px]"/>
                    </div>
                </div>
                <span className="text-[14px] font-medium leading-[140%] text-[#818181]"> {name==="education"? "School info, field of study"
                    :name==="certifications"? "Certifications worth highlighting"
                        :name==="resume"? "CV, portfolio"
                            :name==="skills"? "Career interests and skillset"
                                :name==="experience"? "Where you’ve worked, your role"
                                    :name==="accomplishments"? "Personal achievement & impact":""}
                </span>

            </div>


        </div>
    )
}
export default ProfileCompletionCard;