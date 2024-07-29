import Input from "../Components/modal/Input.tsx";
import DropdownInput from "../Components/modal/DropdownInput.tsx";
import Button from "../Components/Button.tsx";

const EducationForm = () => {
    return (
        <form className="w-[100%] h-[496px] flex flex-col items-center py-[5.3%] px-[6.6%]">
            <div className="flex flex-col flex-1 justify-between w-[100%]">
                <DropdownInput htmlFor="institution" name="institution" holder="Search institution">
                    Institution
                    <option value="UG"> Univerityo of Ghana </option>
                    <option value="KNUST"> Kwame Nkrumah University of Science & Technology</option>
                </DropdownInput>
                <div className="flex justify-between w-[100%] h-[72px]">
                    <DropdownInput htmlFor="qualification" name="qualification" className="w-[48.5%]" >
                        Qualification
                        <option value="CompSci"> BSc. Computer Science</option>
                        <option value="BusAdmin"> BSC. Business Administration</option>
                    </DropdownInput>
                    <DropdownInput htmlFor="ourseCategory" name="courseCategory" className="w-[48.5%]">
                        Course Category
                        <option value="humanities"> Humanities </option>
                        <option value="sciences"> Sciences</option>
                    </DropdownInput>
                </div>
                <Input htmlFor="courseName" type="text" name="courseName"> Course of Study </Input>
                <div className="flex justify-between w-[100%] h-[72px]">
                    <Input htmlFor="startDate" type="date" name="startDate" className="w-[48.5%]"> Start Date</Input>
                    <Input htmlFor="endDate" type="date" name="endDate" className="w-[48.5%]"> End Date</Input>
                </div>

                <Button
                    className="!w-[104px] bg-black !text-white !border-[1px] ml-auto"> Save </Button>
            </div>
        </form>
    )
}

export default EducationForm;