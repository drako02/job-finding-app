import Button from "../Components/Button.tsx";
import {useNavigate} from "react-router-dom";

const CreateAccForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        navigate("/signup/verify-account")
    }

    return(
        <form className=" createaccountform flex flex-col h-[87%]  p-[0] justify-start items-center gap-[3.8%] box-border ">
            <div className="flex flex-col flex-[1] w-[100%] justify-between m-0 gap-[4.3%]">

                <div>
                    <label htmlFor="fullname"> Full Name</label>
                    <div>
                        <input type="text" id="fullname" name="fullname"/>
                    </div>

                </div>

                <div>
                    <label htmlFor="dob"> Date of birth</label>
                    <div>
                        <input type="text" id="dob" name="dob"/>
                    </div>

                </div>

                <div>
                    <label htmlFor="gender"> Gender</label>
                    <div className="!justify-center !items-center">
                        <select className="h-[1.5em] w-[89.7%] justify-center items-center " id="gender" name="gender">
                            <option value="" disabled> Select one</option>
                            <option value="male"> Male</option>
                            <option value="female"> Female</option>
                        </select>
                    </div>

                </div>

                <div>
                    <label htmlFor="email"> Email address</label>
                    <div>
                        <input type="email" id="email" name="email"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="number"> Phone number</label>
                    <div className="!justify-center !items-center">
                        <div className="flex flex-row !justify-center !items-center border-0 !h-[50%] !w-[89.7%] gap-0">
                            <select className=" flex justify-center items-center !h-[1.5em]" id="numPrefix" name="numPrefix">
                                <option value="ghana"> Ghana</option>
                                <option value="usa"> USA</option>
                                <option value="nigeria"> Nigeria</option>
                            </select>
                            <input className=" flex !h-[100%] flex-[1]" type="number" id="number" name="number"/>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="password"> Password</label>
                    <div>
                        <input type="password" id="password" name="password"/>
                    </div>
                </div>

            </div>
            <Button onClick={handleSubmit} className="text-white w-[100%]" > Create Account</Button>
        </form>
    )
}
export default CreateAccForm;