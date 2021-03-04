import React from 'react';
import Popup from '../comps/Popup';
import Tutorial from '../comps/Tutorial';
import TextButton from '../comps/TextButton';
import ImageButton from '../comps/ImageButton';

import Close from '../comps/Tutorial/icons/close.png';
import Home from '../comps/Tutorial/icons/home.png';
import ArrowLeft from '../comps/Tutorial/icons/left_arrow.png';
import ArrowRight from '../comps/Tutorial/icons/right_arrow.png';
import Puppy from '../comps/Tutorial/icons/puppy.png';
import New from '../comps/Tutorial/icons/new.png';

export default {
    title: 'Components',
    component: Popup,
    component: Tutorial,
    component: TextButton,
    component: ImageButton,
};

export const MyPopup = () => <Popup />
export const MyTutorial1 = () => <Tutorial />
export const MyTutorial2 = () => <Tutorial
    icon1={Close}
    icon2={New}
    icon3={ArrowLeft}
    icon4={ArrowRight}
    text={"Click this button to upload a post. Here you will choose a picture and add add a caption."}
/>
export const MyTutorial3 = () => <Tutorial
    icon1={null}
    icon2={Puppy}
    icon3={ArrowLeft}
    icon4={ArrowRight}
    text={"Click this button to view your profile. Here you will find all your posts. You can also change your settings here."}
/>
export const MyTextButton1 = () => <TextButton />
export const MyTextButton2 = () => <TextButton
    radius={"8px"}
    bshadow={"none"}
    text={"CANCEL"}
/>
export const MyImageButton1 = () => <ImageButton />
export const MyImageButton2 = () => <ImageButton />
