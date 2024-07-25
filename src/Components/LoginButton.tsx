import React from "react";
import {useNavigate} from "react-router-dom";

interface LoginButtonProps {
    signUp?: boolean;
}
export default function LoginButton({signUp = false}: LoginButtonProps) {
    const navigate = useNavigate();

    return(
        <button className= {`h-[48px] w-[73px] border-0 flex justify-center items-center ${signUp ? "bg-black": "bg-white"} ${signUp ? "text-white": "text-black"} text-[14px] rounded-[2px]`} onClick={signUp ? () => {navigate("signup/account-type")} : () => {navigate("#")}}>
            {signUp? "Sign Up" : "Login"}
        </button>
    )
}