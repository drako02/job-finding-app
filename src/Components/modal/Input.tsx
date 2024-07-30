import {Children, HTMLInputTypeAttribute, ReactElement, ReactNode} from "react"

type Props ={
    htmlFor: string
    type: HTMLInputTypeAttribute
    name: string
    value?: string
    id: string
    children?: ReactNode
    className?: string
}
const Input = ({htmlFor, type, id, name, children, className}:Props) => {

    return(
        <div className={`w-[100%] h-[72px] ${className}`}>
            <label htmlFor={htmlFor} className="text-[14px] font-normal leading-[140%] text-[#818181]"> {children} </label>
            <div className="h-[66.7%] flex items-center border-[1px] border-[#E8E8E8] rounded-[2px]">
                <input type={type} id={id} name={name} className="w-[100%] h-[100%] px-[5%] text-[16px] font-normal leading-[150%]"/>
            </div>
        </div>
    )
}
export default Input;