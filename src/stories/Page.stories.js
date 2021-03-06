import LoginPage from '../pages/Login';
import React from 'react';
import FirstScreen from '../pages/FirstScreen';
import RegisterPage from '../pages/Register';
import ProfilePage from '../pages/Profile';
import AddPostPage from '../pages/AddPost';
import TutorialPage from '../pages/Tutorial';

//below are the imported icons
import Avatar from '../assets/a1.png';
import PostPage from '../pages/Post';
export default {
  title: 'Pages',
  component: FirstScreen,
  component: RegisterPage,
  component: LoginPage,
  component: TutorialPage
};


export const MyFirstScreen = () => <FirstScreen />;
export const MyRegisterPage = () => <RegisterPage />;
export const MyLoginPage = () => <LoginPage />;
export const MyProfilePage = () => <ProfilePage src={Avatar}/>;
export const MyAddPostPage = () => <AddPostPage />;
export const MyTutorialPage = () => <TutorialPage/>;
export const MyPostPage = () => <PostPage />;
