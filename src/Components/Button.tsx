import React, {ReactNode} from "react";
import {useNavigate} from "react-router-dom";

interface ButtonProps {
    className?: string
    children?: ReactNode
    type?: "submit" | "reset" | "button"
    onClick?: (event:React.MouseEvent<HTMLButtonElement>)=> void
}
export default function Button({className, children, type, onClick}: ButtonProps) {
    const navigate = useNavigate();

    return(
        <button onClick={onClick} type={type} className= {`h-[48px] flex justify-center items-center text-[14px] font-bold text-white leading-[140%] bg-black rounded-[2px] border-0 ${className} `}>
            {children}
        </button>
    )
}