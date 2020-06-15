import React, { PureComponent }  from 'react';
import { LoadingContainer, LoadingSpinner, LoadingBall } from './Style';


class Spinner extends PureComponent {
    render() {
        return(
            <LoadingContainer>
                <LoadingSpinner>
                    <LoadingBall></LoadingBall>
                    <LoadingBall></LoadingBall>
                    <LoadingBall></LoadingBall>
                    <LoadingBall></LoadingBall>
                    <LoadingBall></LoadingBall>
                    <LoadingBall></LoadingBall>
                    <LoadingBall></LoadingBall>
                    <LoadingBall></LoadingBall>
                </LoadingSpinner>
            </LoadingContainer>
        )
    }
}
export default Spinner;