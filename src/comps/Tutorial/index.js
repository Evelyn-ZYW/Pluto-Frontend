import ImgButton from 'comps/ImgButton';
import React from 'react';
import styled from 'styled-components';


// const tutorialSteps = [
//   {
//     label: 'This is the homepage button. Here you will find all the posts. ',
//     imgPath:[Home]
//   },
//   {
//     label: 'Click this button to upload a post. Here you will choose a picture and add add a caption.',
//     imgPath:[New]
//   },

//   {
//     label: 'Click this button to view your profile. Here you will find all your posts. You can also change your settings here. ',
//     imgPath:[Puppy]
//   }
  
// ];


// const Container = styled.div`
//     max-width: 300px;
//     min-width: 300px;
//     max-height: 557px;
//     min-height: 557px;
//     border-radius: 35px;
//     background: rgba(220, 216, 241, 0.8);
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     padding: 30px;

  
// `;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top:  ${props => props.margintopcont ? props.margintopcont : ""};
background-color: ${props => props.bgcolor ? props.bgcolor : "#DCD8F1"};
color: ${props => props.color ? props.color : "#000000"};
padding: ${props => props.padding ? props.padding : "20px"};
max-width: ${props => props.maxwidth ? props.maxwidth : ""};
min-width: ${props => props.minwidth ? props.minwidth : ""};
max-height: ${props => props.maxheight ? props.maxheight : ""};
min-height: ${props => props.minheight ? props.minheight : ""};
border-radius: ${props => props.radius ? props.radius : "40px"};
font-size: ${props=>props.fontSize ? props.fontSize : "20px"};
font-family: ${props=>props.fontFamily ? props.fontFamily : "'Poppins', sans-serif"};
font-weight: ${props=>props.fontWeight ? props.fontWeight : "600"};
`;

const ImageCont = styled.div`
max-width: ${props => props.maxwidthimage ? props.maxwidthimage : ""};
min-width: ${props => props.minwidthimage ? props.minwidthimage : ""};
margin-top: ${props => props.margintopimage ? props.margintopimage : ""};
margin-bottom: ${props => props.marginbottomimage ? props.marginbottomimage : ""};
`;

const ImageIcon = styled.img`
width: 100%;
`;

const TextCont = styled.div`
min-width: ${props => props.minwidthtext ? props.minwidthtext : ""};
max-width: ${props => props.maxwidthtext ? props.maxwidthtext : ""};
min-height: ${props => props.minheighttext ? props.minheighttext : ""};
max-height: ${props => props.maxheighttext ? props.maxheightext : ""};
text-align: center;

`;

const ButtonCont = styled.div`
display: flex;
align-items: center;
justify-content:  ${props => props.justifycontent ? props.justifycontent : ""};
margin-top: ${props => props.margintopbuttons ? props.margintopbuttons : ""};
max-width: ${props => props.maxwidthbuttons ? props.maxwidthbuttons : ""};
min-width: ${props => props.minwidthbuttons ? props.minwidthbuttons : ""};
`;

const Top = styled.div`
    width: 105%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Tutorial = ({minheighttext, onClickExit, exitsrc, maxheighttext, margintopcont, maxwidthbuttons, minwidthbuttons, justifycontent, margintopbuttons, minwidthtext, maxwidthtext, margintopimage, marginbottomimage, maxwidthimage, minwidthimage, backsrc, nextSrc,text, imgsrc, color, bgcolor, padding, maxheight, maxwidth, minheight, minwidth, radius, fontFamily, fontSize, fontWeight, onClickBack, onClickForward  }) => {
  return <Container  
  color={color}
  bgcolor={bgcolor}
  padding={padding}
  maxwidth={maxwidth}
  minwidth={minwidth}
  maxheight={maxheight}
  minheight={minheight}
  radius={radius}
  fontFamily={fontFamily}
  fontSize={fontSize}
  fontWeight={fontWeight}
  margintopcont={margintopcont}
  >
      <Top>
            <ImgButton src={exitsrc} maxwh="20px" maxht="20px" onClick={onClickExit} />
      </Top>

      <ImageCont
       maxwidthimage={maxwidthimage}
       minwidthimage={minwidthimage}
       marginbottomimage={marginbottomimage}
       margintopimage={margintopimage}
      >
        <ImageIcon src={imgsrc}>
         
        </ImageIcon>
      </ImageCont>
      <TextCont
      maxwidthtext={maxwidthtext}
      minwidthtext={minwidthtext}
      minheighttext={minheighttext}
      maxheighttext={maxheighttext}
      >
        {text}
      </TextCont>
      <ButtonCont 
      justifycontent={justifycontent} 
      margintopbuttons={margintopbuttons}
      maxwidthbuttons={maxwidthbuttons}
      minwidthbuttons={minwidthbuttons}
      >
        <ImgButton src={backsrc} 
        onClick={onClickBack} />
        <ImgButton src={nextSrc} 
        onClick={onClickForward} />
      </ButtonCont>
  </Container>
}

Tutorial.defaultProps = {
  onClickBack:()=>{},
  onClickForward: ()=>{},
  onClickExit: ()=>{},
}

export default Tutorial 