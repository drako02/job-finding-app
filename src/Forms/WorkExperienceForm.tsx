import Input from "../Components/modal/Input.tsx";
import DropdownInput from "../Components/modal/DropdownInput.tsx";
import Button from "../Components/Button.tsx";

const WorkExperienceForm = () => {
    return (
        <form className="w-[100%] h-[440px] flex flex-col items-center py-[5.3%] px-[6.6%]">
            <div className="flex flex-col flex-1 justify-between w-[100%]">
                <Input htmlFor="jobtitle" type="text" name="jobtitle"> Job Title</Input>
                <DropdownInput htmlFor="company" name="company" holder="Search company" id="company">
                    Company
                    <option value="flair"> Flair </option>
                </DropdownInput>
                <div className="flex justify-between w-[100%] h-[72px]">
                    <Input htmlFor="startDate" type="date" name="startDate" className="w-[48.5%]"> Start Date</Input>
                    <Input htmlFor="endDate" type="date" name="endDate" className="w-[48.5%]"> End Date</Input>
                </div>
                <div className="flex justify-start items-center font-medium">
                    <input type="checkbox" className="mr-[2%] w-[24px] h-[24px]"/>
                    I currently work here
                </div>
                <Button className="!w-[104px] bg-white !text-black !border-[1px] border-[#E8E8E8] ml-auto"> Save </Button>
            </div>
        </form>

    )
}

export default WorkExperienceForm;