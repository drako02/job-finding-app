import {Children, ReactElement, ReactNode} from "react"

type Props ={
    htmlFor: string
    name: string
    id?: string
    children?: ReactNode
    holder?: string
    className?:string
}



const DropdownInput = ({htmlFor, id, name, children, holder, className}:Props, ) => {
    const childrenArray = Children.toArray(children)



    return(
        <div className={`w-[100%] h-[72px] ${className}`}>
            <label htmlFor={htmlFor} className="text-[14px] font-normal leading-[140%] text-[#818181]"> {childrenArray[0]} </label>
            <div className="h-[66.7%] flex justify-center items-center border-[1px] border-[#E8E8E8] rounded-[2px]">
            <select className="h-[1.5em] w-[89.7%] justify-center items-center " id={id} name={name} >
                <option selected value="" disabled> {holder}</option>
                {childrenArray.slice(1)}
            </select>
            </div>
        </div>
    )
}
export default DropdownInput;