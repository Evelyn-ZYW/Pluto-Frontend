import LoginPage from '../pages/Login';
import React from 'react';
import FirstScreen from '../pages/FirstScreen';
import RegisterPage from '../pages/Register';
import TutorialPage from '../pages/Tutorial';

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
export const MyTutorialPage = () => <TutorialPage/>;