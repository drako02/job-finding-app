import React from "react";
import {useNavigate} from "react-router-dom";

interface LoginButtonProps {
    signUp?: boolean;
    onClick?: () => void;
}
export default function LoginButton({signUp = false, onClick}: LoginButtonProps) {
    const navigate = useNavigate();

    return(
        <button onClick={onClick} className= {`h-[48px] w-[73px] border-0 flex justify-center items-center ${signUp ? "bg-black": "bg-white"} ${signUp ? "text-white": "text-black"} text-[14px] rounded-[2px]`} >
            {signUp? "Sign Up" : "Login"}
        </button>
    )
}