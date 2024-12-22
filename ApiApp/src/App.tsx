import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Root } from './navigation/Root';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from './styles';
import { ThemeProvider } from './ThemeContext.js';


export const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider style={styles.container}>
        <Provider store={store}>
          <Root />
        </Provider>
      </SafeAreaProvider>
    </ThemeProvider>
      
  );
}
