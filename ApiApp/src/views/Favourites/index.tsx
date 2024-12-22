import { useSelector } from 'react-redux';
import { useState, useCallback } from 'react';
import { styles } from './styles'
import { Meal } from '../../utils/types';
import { MealList } from '../../components/MealList';
import { LoaderWrap } from '../../components/LoaderWrap';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from '../../ThemeContext';
import { View } from 'react-native';

export const Favourites = () => {
    const [meals, setMeals] = useState<Meal[]>([])
    const { currentTheme } = useTheme();

    //@ts-ignore
    const ids = useSelector((state) => state.ids);

    const fetchFavouriteMeal = async (id: string) => {
        try {

          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
          const data = await response.json();

          return data?.meals[0];
        } catch (error) {
          console.error('Ошибка при загрузке данных:', error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            Promise.all(ids.map((id: string) => fetchFavouriteMeal(id))).then((values) => {
                setMeals(values);
            });
        }, [ids])
    );
    

    return ( 
        <View style={[styles.container, { backgroundColor: currentTheme.backgroundColor }]}>
            <MealList meals={meals} />
        </View>
        
    );
}