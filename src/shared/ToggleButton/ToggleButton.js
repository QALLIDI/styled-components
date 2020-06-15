import React, { PureComponent } from 'react'
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './style'

class ToggleButton extends PureComponent {
    render() {
        return (
            <CheckBoxWrapper>
                <CheckBox id="checkbox" type="checkbox" />
                <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
        );
    }
}

export default ToggleButton;