import React, { Fragment } from "react";
import CostumButton from "../CostumButton/CostumButton";
import { Group, Line, Title } from './Style';
import { faPlus, faChartBar, faSlidersH } from "@fortawesome/free-solid-svg-icons";

const ButtonGroup = () => {
    return (
        <Fragment>
            <Title>Liste des Demandes de Pret</Title>
            <Line></Line>
            <Group>
                <CostumButton title={"Nouvelle demande"} color={"#854e56"} icon={faPlus}></CostumButton>
                <CostumButton title={"Pilotage"} color={"#fff"} icon={faChartBar}></CostumButton>
                <CostumButton title={"Filtre"} color={"#ffc576"} icon={faSlidersH}></CostumButton>
            </Group>
        </Fragment>
    )
}
export default ButtonGroup;