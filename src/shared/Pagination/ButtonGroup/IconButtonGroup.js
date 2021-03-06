import React from "react";
import IconButton from "../IconButton/IconButton";
import { IconGroup } from './Style';
import { faFile, faDownload, faHistory } from "@fortawesome/free-solid-svg-icons";


const IconButtonGroup = () => {
    return (
        <IconGroup>
            <IconButton color={"#854e56"} icon={faFile}></IconButton>
            <IconButton color={"#ff9300"} icon={faDownload}></IconButton>
            <IconButton color={"#ffc576"} icon={faHistory}></IconButton>
        </IconGroup>
    )
}
export default IconButtonGroup;