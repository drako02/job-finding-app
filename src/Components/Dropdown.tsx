import {InputHolder} from "../StyledComponents/Inputs.ts";


export default function Dropdown () {
    return(
        <InputHolder>
            <select name="Jobs" defaultValue="jobs" className = "w-11/12 border-0 focus-visible:outline-0" title="jobs">
                <option value="jobs" disabled > Jobs </option>
                <option value=""> Doctor </option>
                <option value=""> Nurse</option>
            </select>
        </InputHolder>
    )
}