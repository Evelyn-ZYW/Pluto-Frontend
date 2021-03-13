import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    max-width: ${props => props.maxwh ? props.maxwh : ""};
    min-width: ${props => props.minwh ? props.minwh : ""};
    max-height: ${props => props.maxht ? props.maxht : ""};
    min-height: ${props => props.minht ? props.minht : ""};
    padding: 0 10px;
    &:hover {
        cursor: pointer;
    }
`;

const ImgButton = ({ src, maxwh, minwh, maxht, minht, onClick }) => {

    return <Img
        src={src}
        maxwh={maxwh}
        minwh={minwh}
        maxht={maxht}
        minht={minht}
        onClick={onClick}
    />
}

ImgButton.defaultProps = {
    src: "assets/close.png",
    onClick:()=>{}
}

export default ImgButton;