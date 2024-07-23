import 'bootstrap/dist/css/bootstrap.min.css';
import {styled} from "styled-components";

const StyledTabItems = styled.ul`
    font-size: 14px;
    width: 321px;
    height: 65.2%;
    
    .nav-item{
        height: 100%;
    }
    .nav-link{
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav-link.active {
        background-color: white;
        //height: 100%;
        color: black;
        box-shadow:  0 0 4px 0px rgba(0, 25, 39, 0.15);
    }
`;

function  UserTypeTabItems() {
    return (
        <StyledTabItems className="nav nav-pills nav-fill">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"> For Students & Graduates </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"> For Partners </a>
            </li>
        </StyledTabItems>
    )
}

export default UserTypeTabItems;