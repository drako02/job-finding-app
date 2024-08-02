import {InputHolder} from "../StyledComponents/Inputs.ts";


export default function Dropdown () {
    return(
        <div className=" w-[90%] md:w-[33.9%] md:pl-[2.5%] lg:w-[25%] lg: md:border-l-[1px] border-[#D4D4D4] ">
            <select name="Jobs" defaultValue="jobs" className = "w-11/12 border-0 focus-visible:outline-0" title="jobs">
                <option value="jobs" disabled > Jobs </option>
                <option value=""> Doctor </option>
                <option value=""> Nurse</option>
            </select>
        </div>
    )
}

// @media ${media.md} {
//     width: 30%;
// }
//
// @media ${media.lg} {
//
//     width: 22.6%;
// }