import {InputHolder} from "../StyledComponents/Inputs.ts";


export default function Dropdown () {
    return(
        <div className="md:w-[30%] md: lg:w-[22.6%] lg: ">
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