import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from '../views/Home';
import { Favourites } from '../views/Favourites';
import { Settings } from '../views/Settings';
import { Colors } from '../utils/colors';

import HomeIcon from '../assets/icons/home.svg';
import FavoritesIcon from '../assets/icons/favorite.svg';
import SettingsIcon from '../assets/icons/setting.svg';

const Tab = createBottomTabNavigator();

interface TabIconProps { 
  size: number;
  color: string;
  focused: boolean;
}

const HomeTabIcon = ({ color, focused }: TabIconProps) => {
  return <HomeIcon width={36} height={36} fill={focused ? 'white' : color} />;
};

const FavoritesTabIcon = ({ color, focused }: TabIconProps) => {
  return <FavoritesIcon width={36} height={36} fill={focused ? 'white' : color} />;
};

const SettingsTabIcon = ({ color, focused }: TabIconProps) => {
  return <SettingsIcon width={36} height={36} fill={focused ? 'white' : color} />;
};

export const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: Colors.Amber,
          height: 80,
          paddingVertical: 0
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarLabel: ({ focused }) => (
          <Text style={[styles.label, { color: focused ? 'white' : 'gray' }]}>
            {route.name}
          </Text>
        ),
        tabBarItemStyle: {
          justifyContent: 'center',
          paddingTop: 12
        }
      })}
    >
        <Tab.Screen name="Home" options={{tabBarIcon: HomeTabIcon}} component={Home} /> 
        <Tab.Screen name="Favourites" options={{tabBarIcon: FavoritesTabIcon}} component={Favourites} /> 
        <Tab.Screen name="Settings" options={{tabBarIcon: SettingsTabIcon}} component={Settings} /> 
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
  },
});
