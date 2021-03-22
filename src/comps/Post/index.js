import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ImgButton from "comps/ImgButton";

//below are the imported icons
import More from "assets/more.png";
import Treat from "assets/treat.png";
import Treated from "assets/treated.png";
import Ava1 from "assets/a1.png";
import Cute from "assets/cute.png";
import DeletePopup from "comps/DeletePopup";

const Container = styled.div`
  max-width: 450px;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3em;

  .open {
    display: block;
    position: relative;
  }

  .open.open {
    display: none;
  }

  .close {
    display: none;
  }

  .close.open {
    display: block;
  }
`;

const Top = styled.div`
  max-width: 90%;
  min-width: 90%;
  display: fixed;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  & > div {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
`;
const Middle = styled.div`
  min-wdith: 414px;
  min-height: 414px;
`;
const Bottom = styled.div`
  max-width: 90%;
  min-width: 90%;
  margin-top: 0;
  margin-left: 1em;

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
  max-width: 414px;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 414px;
  height: 868px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  margin: 17.5px;
`;

const Post = ({ un, caption, number }) => {
  const [open, setOpen] = useState(true);
  const [close, setClose] = useState(false);

  return (
    <Container>
      <Top>
        <div>
          <Icon src={Ava1} />
          <span style={{ paddingLeft: "10px" }}>{un}</span>
        </div>

        <ImgButton
          src={More}
          maxht="35px"
          minht="35px"
          onClick={() => {
            setOpen(!open);
            setClose(!close);
          }}
        />

        <div className={open ? "open" : null}>
          <Overlay>
            <DeletePopup />
          </Overlay>
        </div>
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
  );
};

Post.defaultProps = {
  un: "username",
  number: "",
  caption: ".............",
};

export default Post;
