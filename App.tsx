import { StatusBar } from 'expo-status-bar';
import React from 'react';
import List from './src/pages/List';
import Routes from './routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
  );
}
