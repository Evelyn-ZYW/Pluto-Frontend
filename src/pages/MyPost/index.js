import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../../comps/Navigation";
import Post from "../../comps/Post";
import ImgButton from "../../comps/ImgButton";
import Left from "../../assets/left_arrow.png";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  border: 1px solid black;
  width: 414px;
  height: 868px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  #text {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 21px;
  }
`;

const Top = styled.div`
  width: 90%;
  min-height: 76px;
  max-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 21px;
  #center {
    position: absolute;
    left: 35%;
  }
  #post {
    color: #9dcff6;
  }
`;
const Main = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MyPost = () => {
  const history = useHistory();
  const clickExit = () => {
    history.push("/Profile");
  };
  return (
    <Container>
      <Top>
        <ImgButton src={Left} maxwh="27px" maxht="27px" onClick={clickExit} />
        <h3 id="center">POSTS</h3>
      </Top>
      <Main>
        <Post />
        <Post />
      </Main>
      <Navigation minwidth="400px" />
    </Container>
  );
};

export default MyPost;
