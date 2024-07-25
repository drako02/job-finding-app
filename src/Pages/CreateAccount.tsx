import {TitleBar} from "../StyledComponents/Headers.ts";
import arrowLeft from "../assets/arrow-left.svg";
import Logo from "../Components/Logo.tsx";
import CreateAccForm from "../Forms/CreateAccForm.tsx";

const CreateAccount = () => {
    return(
        <div className="w-[100vw] h-[237vw] flex flex-col justify-start items-center gap-[2.6%]">
            <div className="h-[5.3%] w-[100%] px-[4.4%] flex justify-between items-center " >
                <div className="h-[24px] w-[24px] flex justify-center items-center ">
                    <img src={arrowLeft}/>
                </div>
                <Logo/>
                <div className="h-[24px] w-[24px] "> </div>

            </div>
            <div className="h-[84%] w-[86.7%]">
                <CreateAccForm/>
            </div>
        </div>
    )
}
export default CreateAccount;