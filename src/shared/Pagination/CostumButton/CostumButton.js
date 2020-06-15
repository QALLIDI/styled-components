import React from 'react'
import { Button } from './Style'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CostumButton = (props) => {
    const { title, color, icon } = props;
    return (
        <Button color={color}>
            <FontAwesomeIcon icon={icon} style={{ marginRight: "23px" }} />
            {title}
        </Button>
    )
}
export default CostumButton;