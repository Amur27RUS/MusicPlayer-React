import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isLibOpen, setIsLibOpen }) => {
    return(
        <nav>
            <h1>DD player</h1>
            <button onClick={() => {setIsLibOpen(!isLibOpen)}}>
                Library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    );
}

export default Nav;