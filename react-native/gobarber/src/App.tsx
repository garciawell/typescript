import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Container } from './styles/global';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <AppProvider>
        <Container>
          <Routes />
        </Container>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
