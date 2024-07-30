import {ChangeEvent, Children, HTMLInputTypeAttribute, ReactNode, useRef, useState} from "react";
import download from "../../assets/download.svg";

interface Props  {
    htmlFor: string
    // type: HTMLInputTypeAttribute
    name: string
    value?: string
    id: string
    children?: ReactNode
    className?: string
}

const FileInput:React.FC<Props> = ({htmlFor, id, name, children, className}) => {
    const childrenArray = Children.toArray(children)
    const [fileName, setFileName] = useState<string|null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleBrowse = () => {
        if(fileInputRef.current){
            fileInputRef.current.click();
        }
    }

    const handleFileChange = (event:ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if(file) {
            setFileName(file.name)
        }
        else {
            setFileName(null)
        }
    };

    return (
        <div className={`w-[100%] h-[152px] ${className} flex flex-col justify-between`}>
            <label htmlFor={htmlFor} className="text-[14px] font-normal leading-[140%] text-[#818181]"> {childrenArray[0]}</label>
            {childrenArray[1]}
            <div className="h-[55.3%] flex  justify-center items-center border-[2px] border-dashed border-[#E8E8E8] rounded-[2px]">
                {/*<input type="file" id={id} name={name} className="h-[2em] w-[89.7%] justify-end items-center px-[5%] text-[16px] font-normal leading-[150%]"/>*/}
                <input type="file" id={id} name={name} ref={fileInputRef} onChange={handleFileChange} className="hidden"/>
                <div className="flex h-[100%] w-[89.7%] justify-between items-center text-[16px] font-normal leading-[150%]">
                    <div className="flex justify-center items-center text-[12px] font-medium leading-[140%]"><img src={download} className="w-[24px] h-[24px] pr-[8px]"/>
                        {fileName? fileName: "Drop file here"}
                    </div>
                    <div onClick={handleBrowse} className="w-[85px] h-[36px] flex  justify-center items-center text-[14px] font-bold leading-[140%] text-black border-[#E8E8E8] border-[1px] rounded-[2px]">
                        Browse
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FileInput;