import React from 'react';
import styled from 'styled-components';

import ImgButton from 'comps/ImgButton';

//below are the imported icons
import More from 'assets/more.png';
import Treat from 'assets/treat.png';
import Treated from 'assets/treated.png';
import Ava1 from 'assets/a1.png';
import Cute from "assets/cute.png";

const Container = styled.div`
    max-width: 450px;
    min-width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Top = styled.div`
    max-width: 90%;
    min-width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    & > div{
        display:flex;
        align-items: center;
    }
`;
const Middle = styled.div`

`;
const Bottom = styled.div`
    max-width: 90%;
    min-width: 90%;
    & > div {
        display: flex;
        align-items: center;
    }
`;

const Icon = styled.img`
    max-wdith: 50px;
    max-height: 50px; 
`;
const Image = styled.img`
    max-width: 100%;
`;

const Post = ({ un, caption, number }) => {

    return <Container>
        <Top>
            <div>
                <Icon src={Ava1} />
                <span style={{ paddingLeft: "10px" }}>{un}</span>
            </div>
            <ImgButton
                src={More}
                maxht="35px"
                minht="35px"
            />
        </Top>
        <Middle>
            <Image src={Cute} />
        </Middle>
        <Bottom>
            <div>
                <Icon src={Treat} />
                <span style={{ paddingLeft: "10px" }}>#{number}</span>
            </div>
            <div>
                <span>{un}</span>
                <span style={{ paddingLeft: "10px" }}>{caption}</span>
            </div>
        </Bottom>
    </Container>
}

Post.defaultProps = {
    un: "username",
    number: "",
    caption: ".............",
}

export default Post;