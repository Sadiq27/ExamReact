import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from './utils/colors'

export const ThemeContext = createContext();

export const lightTheme = {
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
  buttonColor: '#E0E0E0',
  blockColor: Colors.lightGray,
  placeholderTextColor: Colors.gray,
  inputColor: Colors.textBlack,
  inputBackgroundColor: Colors.offWhite,
};

export const darkTheme = {
  backgroundColor: '#121212',
  textColor: '#FFFFFF',
  buttonColor: '#333333',
  blockColor: Colors.darkGray,
  placeholderTextColor: Colors.gray,
  inputColor: Colors.white  ,
  inputBackgroundColor: "#121212",
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = async () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    await AsyncStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      setIsDarkMode(savedTheme === 'dark');
    };
    loadTheme();
  }, []);

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ currentTheme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
