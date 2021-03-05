import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    max-width: ${props => props.maxwh ? props.maxwh : ""};
    min-width: ${props => props.minwh ? props.minwh : ""};
    max-height: ${props => props.maxht ? props.maxht : ""};
    min-height: ${props => props.minht ? props.minht : ""};
    &:hover {
        cursor: pointer;
    }
`;

const ImgButton = ({ src, maxwh, minwh, maxht, minht }) => {

    return <Img
        src={src}
        maxwh={maxwh}
        minwh={minwh}
        maxht={maxht}
        minht={minht}
    />
}

ImgButton.defaultProps = {
    src: "assets/close.png"
}

export default ImgButton;