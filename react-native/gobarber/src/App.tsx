import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Container } from './styles/global';
import { store } from './store';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <Provider store={store}>
        <AppProvider>
          <Container>
            <Routes />
          </Container>
        </AppProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
