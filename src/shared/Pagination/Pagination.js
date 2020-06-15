import React, { Fragment } from "react";
import IconButton from "../IconButton/IconButton";
import { Title, Group, IconGroup, CurrentPage, Pages } from './Style';
import { faAngleDown, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
        return (
            <Fragment>
                <Group>
                    <Title>Lignes par page :
                    <CurrentPage>7</CurrentPage>
                    <IconButton color={"transparent"} icon={faAngleDown} style = {{ marginLeft: "10px" }}></IconButton>
                    <Pages>1 - 7 sur 50</Pages>
                    <IconGroup>
                    <IconButton color={"transparent"} icon={faAngleLeft}></IconButton>
                    <IconButton color={"transparent"} icon={faAngleRight} style = {{ marginLeft: "60px" }}></IconButton>
                    </IconGroup>
                    </Title>
                </Group>
            </Fragment>
        )
    }
export default Pagination;