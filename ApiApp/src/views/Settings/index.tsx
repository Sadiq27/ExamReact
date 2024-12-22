import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../../ThemeContext';

export const Settings = () => {
  const { currentTheme, toggleTheme, isDarkMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.backgroundColor }]}>
      <Text style={[styles.text, { color: currentTheme.textColor }]}>
        {isDarkMode ? 'Dark mode' : 'Light mode'}
      </Text>
      <Button title="Switch mode" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 20 },
});
