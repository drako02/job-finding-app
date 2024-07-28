import { Children, ReactNode } from "react"

type Props ={
    htmlFor: string
    type: string
    name: string
    value?: string
    id?: string
    children?: ReactNode
    holder: string
}

type Options ={
    [key:string]:any
}


const DropdownInput = ({htmlFor, type, id, name, children, holder}:Props, ) => {



    return(
        <div className={`w-[86.75%] h-[72px]`}>
            <label htmlFor={htmlFor} className="text-[14px] font-normal leading-[140%] text-[#818181]"> {children} </label>
            <div className="h-[66.7%] flex justify-center items-center border-[1px] border-[#E8E8E8] rounded-[2px]">
            <select className="h-[1.5em] w-[89.7%] justify-center items-center " id={id} name={name}>
                            <option value="" disabled> {holder}</option>
                            <option value="male"> Male</option>
                            <option value="female"> Female</option>
                        </select>
            </div>
        </div>
    )
}
export default DropdownInput;