import React, {useState} from 'react';
import styled from 'styled-components';
import Tutorial from '../../comps/Tutorial';
import Navigation from  '../../comps/Navigation';

import ArrowRight from '../../assets/right_arrow.png';
import ArrowBack from '../../assets/left_arrow.png';
import Go from './icons/go1.png';

import Home from './icons/home.png';
import New from './icons/new.png';
import Puppy from './icons/puppy.png';
import Close from './icons/close.png'

import {useHistory} from 'react-router-dom';

const Container  = styled.div`
border: 1px solid black;
width: 414px;
height: 868px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;


`;





const TutorialPage = () => {

    const history = useHistory();

    const [textInner, setText] = useState("This is the homepage button. Here you will find all the posts.");
    const [imgInner, setimgInner] = useState(Home);
    const [imgBack, setimgBack] = useState(null);
    const [imgNext, setimgNext] = useState(ArrowRight);
    const [flex, setFlex] = useState("flex-end");
    const [num, setNum] = useState(1)

    const clickNext = () => {
        if (num === 1){
         setText("Click this button to upload a post. Here you will choose a picture and add add a caption.");
        setimgInner(New);
        setimgBack(ArrowBack);
        setFlex("space-between")
        setNum(2)   
        }
        if (num === 2){
            setText("Click this button to view your profile. Here you will find all your posts. You can also change your settings here.");
            setimgInner(Puppy);
            setimgBack(ArrowBack);
            setimgNext(Go);
            setFlex("space-between")
            setNum(3) 
        }
        if (num === 3){
            history.push('/AllPosts')
        }
    }

    const clickBack = () => {
        if (num === 2) {
            setText("This is the homepage button. Here you will find all the posts.");
            setimgInner(Home);
            setimgBack(null);
            setFlex("flex-end")
            setNum(1) 
        }

        if (num === 3) {
            setText("Click this button to upload a post. Here you will choose a picture and add add a caption.");
            setimgInner(New);
            setimgBack(ArrowBack);
            setimgNext(ArrowRight);
            setFlex("space-between")
            setNum(2) 
        }
    }

    const clickExit = () => {
        history.push('/AllPosts')
    }


    
    return <Container>
        <Tutorial onClickExit={clickExit} exitsrc={Close} maxheighttext="159px" minheighttext="159px" onClickForward={clickNext} onClickBack={clickBack} margintopcont="100px" minwidthbuttons="300px" maxwidthbuttons="300px" margintopbuttons="35px" justifycontent={flex} maxwidthtext="240px" marginbottomimage="50px" margintopimage="120px" minwidthimage="138px" maxwidthimage="139px" bgcolor="#DCD8F1" radius="35px" maxheight="557px"  maxwidth="300px" fontWeight="300" fontSize="22px" maxwidthimage="20px" text={textInner} imgsrc={imgInner} backsrc={imgBack} nextSrc={imgNext} />
        <Navigation maxheight="60px" minwidth="400px"/>
    </Container>
}


export default TutorialPage

