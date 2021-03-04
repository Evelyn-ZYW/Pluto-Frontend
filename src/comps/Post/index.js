import React from 'react';
import styled from 'styled-components';

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
`;

const Icon = styled.img`
    max-wdith: 50px;
    max-height: 50px; 
`;
const Image = styled.img`
    max-width: 100%;
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div{
        display:flex;
        align-items: center;
    }
`;
const Middle = styled.div`

`;
const Bottom = styled.div`

    & > div {
        display: flex;
        align-items: center;
    }
`;
const Post = ({ un, caption, number }) => {

    return <Container>
        <Top>
            <div>
                <Icon src={Ava1} />
                <span>{un}</span>
            </div>
            <img src={More} style={{ maxWidth: "35px", maxHeight: "35px", padding: "10px" }} />
        </Top>
        <Middle>
            <Image src={Cute} />
        </Middle>
        <Bottom>
            <div>
                <Icon src={Treat} />
                <span>#{number}</span>
            </div>
            <div>
                <span>{un}</span>
                <span>{caption}</span>
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