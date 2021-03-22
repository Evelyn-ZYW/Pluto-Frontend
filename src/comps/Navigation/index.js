import React from "react";
import styled from "styled-components";

import Home1 from "assets/home.png";
import Plus1 from "assets/new.png";
import User1 from "assets/puppy.png";

import { useHistory } from "react-router-dom";

const Container = styled.div`
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#DCD8F1")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  margin: 0;
  padding: 7px;
  max-width: ${(props) => (props.maxwidth ? props.maxwidth : "414px")};
  min-width: ${(props) => (props.minwidth ? props.minwidth : "414px")};
  max-height: ${(props) => (props.maxheight ? props.maxheight : "60px")};
  min-height: ${(props) => (props.minheight ? props.minheight : "60px")};
`;

const Home = styled.img`
  max-width: ${(props) => (props.maxwh ? props.maxwh : "30px")};
  min-width: ${(props) => (props.minwh ? props.minwh : "30px")};
  margin-left: 12px;
`;

const PlusPost = styled.img`
  max-width: ${(props) => (props.maxwh ? props.maxwh : "30px")};
  min-width: ${(props) => (props.minwh ? props.minwh : "30px")};
`;

const Puppy = styled.img`
  max-width: ${(props) => (props.maxwh ? props.maxwh : "35px")};
  min-width: ${(props) => (props.minwh ? props.minwh : "30px")};
  margin-right: 12px;
`;

const Navigtion = ({ minheight, minwidth, maxheight, maxwidth }) => {
  const history = useHistory();

  const clickNew = () => {
    history.push("/AddPost");
  };

  const clickHome = () => {
    history.push("/AllPosts");
  };

  const clickProfile = () => {
    history.push("/Profile");
  };

  return (
    <Container
      maxwidth={maxwidth}
      minwidth={minwidth}
      maxheight={maxheight}
      minheight={minheight}
    >
      <Home onClick={clickHome} src={Home1}></Home>
      <PlusPost onClick={clickNew} src={Plus1}></PlusPost>
      <Puppy onClick={clickProfile} src={User1}></Puppy>
    </Container>
  );
};

export default Navigtion;
