import React, { Fragment, PureComponent } from "react";
import CostumButton from "../CostumButton/CostumButton";
import { Group, Line, Title } from './Style';
import { faPlus, faChartBar, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import SideNav from "../SideNav/SideNav";

class ButtonGroup extends PureComponent  {

    state = {
        show: false
    };

    filterShow = () => {
        this.setState({show: !this.state.show})
    }

    render() {
        const { show } = this.state;
        return (
            <Fragment>
                <Title>Liste des Demandes de Pret</Title>
                <Line></Line>
                <Group>
                    <CostumButton title={"Nouvelle demande"} color={"#854e56"} icon={faPlus}></CostumButton>
                    <CostumButton title={"Pilotage"} color={"#fff"} icon={faChartBar}></CostumButton>
                    <CostumButton title={"Filtre"} color={"#ffc576"} icon={faSlidersH} action={this.filterShow}></CostumButton>
                </Group>
                <SideNav show={show}/>
            </Fragment>
        )
    }
}
export default ButtonGroup;