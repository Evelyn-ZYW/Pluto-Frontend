import LoginPage from '../pages/Login';
import React from 'react';
import FirstScreen from '../pages/FirstScreen';
import RegisterPage from '../pages/Register';

export default {
  title: 'Pages',
  component: FirstScreen,
  component: RegisterPage,
  component: LoginPage
};


export const MyFirstScreen = () => <FirstScreen />;
export const MyRegisterPage = () => <RegisterPage />;
export const MyLoginPage = () => <LoginPage />;