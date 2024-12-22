import React from 'react';
import { StyleSheet }  from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './MainStackNavigator';

export const Root = () => {
    return ( 
        <NavigationContainer>
            <MainStackNavigator />
        </NavigationContainer>
    );
}