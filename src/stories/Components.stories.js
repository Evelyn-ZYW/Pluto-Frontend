import React from 'react';
import Popup from '../comps/Popup';
import Tutorial from '../comps/Tutorial';
import Button from '../comps/Button';
import ImgButton from '../comps/ImgButton';
import Post from '../comps/Post';
import Input from '../comps/Input';
import Navigtion from '../comps/Navigation';
import Profile from '../comps/Profile';
import ThreeMenu from '../comps/ThreeMenu';
import DeletePopup from 'comps/DeletePopup';


//below are the imported icons
import Close from '../assets/close.png';
import ArrowLeft from '../assets/left_arrow.png';
import ArrowRight from '../assets/right_arrow.png';
import Puppy from '../assets/puppy.png';
import New from '../assets/new.png';


export default {
    title: 'Components',
    component: Popup,
    component: Tutorial,
    component: Button,
    component: ImgButton,
    component: Post,
};

export const MyPopup = () => <Popup />;
export const Tutorial1 = () => <Tutorial
    bshadow={"none"}
    bgcolor={"none"}

    icon4={ArrowRight}
/>;
export const Tutorial2 = () => <Tutorial
    bshadow={"none"}
    bgcolor={"none"}

    icon1={Close}
    icon2={New}
    icon3={ArrowLeft}
    icon4={ArrowRight}
    content={"Click this button to upload a post. Here you will choose a picture and add add a caption."}
/>;
export const Tutorial3 = () => <Tutorial
    icon1={null}
    icon2={Puppy}
    icon3={ArrowLeft}
    icon4={null}
    text={"GO"}
    minwidth={"82px"}
    content={"Click this button to view your profile. Here you will find all your posts. You can also change your settings here."}
/>;
export const ButtonWithShadow = () => <Button
    maxwidth={"205px"}
    minheight={"52px"}
    text="LOGIN"
/>;
export const ButtonWithoutShadow = () => <Button
    radius={"8px"}
    bshadow={"none"}
    text={"CANCEL"}
    maxwidth={"297px"}
    minheight={"69px"}
/>;
export const ButtonWithImage = () => <ImgButton
    src={ArrowLeft}
/>;
export const MyPost = () => <Post />;

export const MyInput = () => <Input
    minwidth={"345px"}
    minheight={"50px"}
/>;


export const MyNavigation = () => <Navigtion />;

export const MyProfile = () => <Profile />;

export const ThreedotsMenu = () => <ThreeMenu
    minwidth={"297px"}
    minheight={"69px"}
/>;

export const MyDeletePopup = () => <DeletePopup />;

export const MyLogoutPopup = () => <DeletePopup
    title={"Log out of Pluto?"}
    content={null}
    option1={"CANCEL"}
    option2={"LOGOUT"}
/>;