import React, {useRef, useState} from "react";
import iconCan from "../assets/candidate.svg";
import iconEmp from "../assets/employer.svg";
import iconMen from "../assets/mentor.svg";
import iconTra from "../assets/trainer.svg";

interface CardProps {
    candidate?: boolean,
    employer?: boolean,
    mentor?: boolean,
    trainer?: boolean
    soon?: boolean
    onClick:(id:number) => void
    id: number
    active: boolean
    className?: string;
}


export const Card = ({candidate,employer,mentor,trainer, soon, onClick, id, active, className}:CardProps) => {
    const isClickable = !soon;

    // Create a click handler that calls the parent onClick with the id
    const handleClick = () => {
        if (isClickable) {
            onClick(id);
        }
    };

    return(
        <div onClick={handleClick}
             className={` ${active? "bg-[#F5F5F5] border-[1px] border-[#818181]" : ""}  ${soon? "cursor-not-allowed opacity-50": "cursor-pointer"} ${className} relative h-[21.2%] w-[100%] flex flex-col justify-evenly items- px-[24px] border border-[#E8E8E8] rounded-[2px] active:bg-[#F5F5F5] active:border-[1px] active:border-[#818181] sm:w-[268px] sm:h-[176px]`}>
            { soon && <div
                  className="w-[94px] h-[28px] absolute origin-top-right top-0 right-0 flex justify-center items-center bg-[#FCF4E6] text-[#D98F00] text-[12px] leading-[150%] ">
                Coming soon
            </div>}
            <div className=" ">
                <img src={candidate? iconCan : employer ? iconEmp : mentor ? iconMen : trainer ? iconTra: undefined}/>
            </div>
            <div className={`w-[85.4%] sm:w-[90%] h-[72px] font-bold leading-[150%] flex flex-col justify-start gap-[8px] ${soon? "text-[#818181]":"text-black"}`}>
                {candidate? "Candidate" : employer ? "Employer" : mentor ? "Mentor" : trainer ? "Trainer": undefined}
                <p className="text-[14px] font-medium leading-[140%] text-[#818181] ">
                    {candidate? "A graduate looking for an employment opportunity" :
                        employer ? "An organisation looking to hire top talents" :
                            mentor ? "A professional helping others navigate their careers" :
                                trainer ? "An organisation offering training programmes":
                                    undefined
                    }
                </p>
            </div>

        </div>
    )
}