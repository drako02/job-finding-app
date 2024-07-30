import Input from "../Components/modal/Input.tsx";
import DropdownInput from "../Components/modal/DropdownInput.tsx";
import Button from "../Components/Button.tsx";
import FileInput from "../Components/modal/FileInput.tsx";

const ResumeForm =() => {
    return (
        <form className="w-[100%] h-[480px] flex flex-col items-center py-[5.3%] px-[6.6%]">
            <div className="flex flex-col flex-1 justify-between w-[100%]">
                <FileInput htmlFor="resume_cv" name="resume_cv" id="resume_cv">
                    <span className="text-[16px] font-bold leading-[150%]"> Resume/CV </span>
                    Format should be either .pdf, .docx, .doc

                </FileInput>
                <FileInput htmlFor="otherfiles" name="otherfiles" id="otherfiles">
                    <span className="text-[16px] font-bold leading-[150%]"> Other Files e.g. portfolio </span>
                    Format should be either .pdf, .docx, .doc
                </FileInput>

                <Button
                    className="!w-[104px] bg-white !text-black !border-[1px] border-[#E8E8E8] ml-auto"> Save </Button>
            </div>
        </form>
    )
}

export default ResumeForm;