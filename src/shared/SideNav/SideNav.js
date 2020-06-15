import React, { PureComponent, Fragment } from "react";
import { SideNavContainer, CloseButton, FiltreIcon, Title, SearchInput } from './Style';
import { IconButton } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSlidersH } from "@fortawesome/free-solid-svg-icons";

class SideNav extends PureComponent {

    state = {
        close: false
    };

    close = () => {
        this.setState({ close: !this.state.close })
    }

    render() {
        const { show } = this.props;
        const { close } = this.state;
        return (
            <Fragment>
                <SideNavContainer show={close === true ? !show : show}>
                    <CloseButton>
                        <IconButton icon={faTimes} color={"transparent"} action={this.close} size={"lg"} />
                    </CloseButton>
                    <FiltreIcon>
                        <FontAwesomeIcon icon={faSlidersH} size={"2x"} style={{ marginTop: "15px", color: "#ff9300" }} />
                        <Title>Filtres</Title>
                    </FiltreIcon>
                    <SearchInput type="text" placeholder="Nom, Prenom" />
                    <SearchInput type="text" placeholder="Radical" />
                </SideNavContainer>
            </Fragment>
        )
    }
}

export default SideNav;