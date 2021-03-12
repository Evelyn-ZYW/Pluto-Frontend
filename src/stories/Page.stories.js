import LoginPage from '../pages/Login';
import React from 'react';
import FirstScreen from '../pages/FirstScreen';
import RegisterPage from '../pages/Register';
import ProfilePage from '../pages/Profile';
import AddPostPage from '../pages/AddPost';

//below are the imported icons
import Avatar from '../assets/a1.png';

export default {
  title: 'Pages',
  component: FirstScreen,
  component: RegisterPage,
  component: LoginPage
};


export const MyFirstScreen = () => <FirstScreen />;
export const MyRegisterPage = () => <RegisterPage />;
export const MyLoginPage = () => <LoginPage />;
export const MyProfilePage = () => <ProfilePage src={Avatar}/>;
export const MyAddPostPage = () => <AddPostPage />;