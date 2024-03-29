import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImgButton from "../../comps/ImgButton";
import Upload from "../../comps/Upload";
import Navigation from "../../comps/Navigation";
import Close from "../../assets/close.png";
import Check from "../../assets/checkmark.png";
import { useHistory } from "react-router-dom";
import Post from "../../comps/Post";

const Container = styled.div`
  border: 1px solid black;
  width: 414px;
  height: 868px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
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
const Middle = styled.div`
  width: 414px;
  height: 414px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#E5E5E5")};
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 49px;
    height: 49px;
  }
`;
const Bottom = styled.div`
  height: 318px;

  #area {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 21px;
    resize: none;
    outline: none;
    border: 1px solid;
    border-radius: 10px;
    display: block;
    box-sizing: border-box;
    width: 371px;
    height: 220px;
    padding: 20px;
    background-position: bottom right;
  }
`;

const EditPost = () => {
  const history = useHistory();

  const [upload, setUpload] = useState();
  const [image, setImage] = useState({ preview: "", raw: "" });

  const HandleUpload = (e) => {
    setUpload(true);
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  };

  const clickExit = () => {
    history.push("/AllPosts");
  };
  const clickOkay = () => {
    history.push("/MyPost");
  };
  return (
    <Container>
      <Top>
        <ImgButton src={Close} maxwh="27px" maxht="27px" onClick={clickExit} />
        <h3 id="center">EDIT POST</h3>
        {upload ? <h3 id="post">POST</h3> : <h3></h3>}
        <ImgButton src={Check} maxwh="27px" maxht="27px" onClick={clickOkay} />
      </Top>
      <Middle>
        {upload ? (
          <Upload
            onChange={HandleUpload}
            url={image.preview}
            display={"none"}
          />
        ) : (
          <Upload onChange={HandleUpload} url={image.preview} />
        )}
      </Middle>
      <Bottom>
        <textarea
          id="area"
          placeholder="caption here..."
          maxLength="150"
        ></textarea>
      </Bottom>
      <Navigation minwidth="400px" />
    </Container>
  );
};

export default EditPost;
