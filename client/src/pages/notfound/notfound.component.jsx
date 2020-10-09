import React from 'react';
import {
    ErrorImageContainer,
    ErrorImageOverlay, ErrorImageText,
    ErrorImageTextHeading
} from "../../components/error-boundary/error-boundary.styles";

export default class NotFound extends React.Component {

    render() {
        return (
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl='https://i.imgur.com/U3vTGjX.png'/>
                <ErrorImageTextHeading>There’s a Leak in the Website</ErrorImageTextHeading>
                <ErrorImageText>The boat had looked good to the naked eye, but you wear very strong prescription glasses and should have been wearing them. As you cling desperately to a buoy, you helplessly watch the water rush into your beloved dingy. The leak sprays water higher and higher, until the boat is swallowed and sinks like a dead relative into the abyss.</ErrorImageText>
            </ErrorImageOverlay>
        )
    }
}