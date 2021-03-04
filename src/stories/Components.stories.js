import React from 'react';
import Popup from '../comps/Popup';
import Tutorial from '../comps/Tutorial';
import Button from '../comps/Button';
import Post from '../comps/Post';

//below are the imported icons
import Close from '../assets/close.png';
import Home from '../assets/home.png';
import ArrowLeft from '../assets/left_arrow.png';
import ArrowRight from '../assets/right_arrow.png';
import Puppy from '../assets/puppy.png';
import New from '../assets/new.png';

export default {
    title: 'Components',
    component: Popup,
    component: Tutorial,
    component: Button,
    component: Post,
};

export const MyPopup = () => <Popup />;
export const Tutorial1 = () => <Tutorial />;
export const Tutorial2 = () => <Tutorial
    icon1={Close}
    icon2={New}
    icon3={ArrowLeft}
    icon4={ArrowRight}
    text={"Click this button to upload a post. Here you will choose a picture and add add a caption."}
/>;
export const Tutorial3 = () => <Tutorial
    icon1={null}
    icon2={Puppy}
    icon3={ArrowLeft}
    icon4={ArrowRight}
    text={"Click this button to view your profile. Here you will find all your posts. You can also change your settings here."}
/>;
export const ButtonWithShadow = () => <Button />;
export const ButtonWithoutShadow = () => <Button
    radius={"8px"}
    bshadow={"none"}
    text={"CANCEL"}
/>;
export const ButtonWithImage = () => <Button
    bshadow={"none"}
    text={null}
    bgcolor={"none"}
    src={ArrowLeft}
    maxwidth={"30px"}
    minwidth={"30px"}
    maxheight={"30px"}
    minheight={"30px"}
    maxwh={"30px"}
    minwh={"30px"}
/>;
export const MyPost = () => <Post />;
