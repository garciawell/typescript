import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <Container />
    </>
  );
};

export default App;
