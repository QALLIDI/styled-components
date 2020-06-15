import React from 'react'
import { Icon } from './Style'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CostumButton = (props) => {
    const { color, icon, style } = props;
    return (
        <Icon color={color} style={style}>
            <FontAwesomeIcon icon={icon} />
        </Icon>
    )
}
export default CostumButton;