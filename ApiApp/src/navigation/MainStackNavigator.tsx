import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Details } from '../views/Details'
import { BottomNavigator } from './BottomNavigator';

const MainStack = createStackNavigator();

export const MainStackNavigator = () => {
    return ( 
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name='BottomNavigator' component={BottomNavigator}/> 
            <MainStack.Screen name='Details' component={Details}/>
        </MainStack.Navigator>
    );
}