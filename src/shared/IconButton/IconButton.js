import React from 'react'
import { Icon } from './Style'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CostumButton = (props) => {
    const { color, icon, style, action, size } = props;
    return (
        <Icon color={color} onClick={action} style={style}>
            <FontAwesomeIcon icon={icon} size={size} />
        </Icon>
    )
}
export default CostumButton;