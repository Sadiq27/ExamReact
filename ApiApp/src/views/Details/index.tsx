import { useEffect, useState } from 'react';
import { Text, Image, View, Linking } from 'react-native';

import { styles } from './styles';

import { useRoute } from '@react-navigation/native';
import { LoaderWrap } from '../../components/LoaderWrap';
import { Meal } from '../../utils/types';
import { transformToMeal } from '../../utils/helpers';
import { IngredientsList } from '../../components/IngredientsList';
import { ScrollView } from 'react-native-gesture-handler';
import FavoriteButton from '../../components/FavoriteButton';
import { useTheme } from '../../ThemeContext';

interface Props {

}

export const Details: React.FC<Props> = () => {
    const { currentTheme } = useTheme();
    const router = useRoute();

    const [details, setDetails] = useState<Meal | null>(null)
    const [isLoading, setIsLoading] = useState(true)


    const fetchDetails = async (idMeal: number) => {
        try {
            setIsLoading(true)
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            const data = await response.json();

            const rawData = data?.meals[0] ?? null;

            if (rawData != null) {
                const meal = transformToMeal(data?.meals[0])
                setDetails(meal)
            }
        }
        catch (error){
            console.warn(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect( () => {
        //@ts-ignore
        fetchDetails(router.params?.idMeal)
        //@ts-ignore
    }, [router.params?.idMeal]) 

    console.log(details?.strYoutube)

    return ( 
        <LoaderWrap isLoading={isLoading}>
            <ScrollView contentContainerStyle={{flexGrow: 1, padding: 16}} style={[styles.container, { backgroundColor: currentTheme.backgroundColor }]}>
                <Image source={{ uri: details?.strMealThumb }} style={styles.image} />
                <View style={styles.textContainer}>
                    <View style={styles.mainInfo}>
                        <Text style={[styles.title, { color: currentTheme.textColor }]}>{details?.strMeal}</Text>

                        <Text style={[styles.subtitle, { color: currentTheme.textColor }]}>{details?.strCategory}</Text>
                        <Text style={[styles.subtitle, { color: currentTheme.textColor }]}>{details?.strArea}</Text>
                    </View>

                    <Text style={[styles.sectionTitle, { color: currentTheme.textColor }]}>Ingredients</Text>
                    <IngredientsList ingredients={details?.ingredients ?? []}/>

                    <Text style={[styles.sectionTitle, { color: currentTheme.textColor }]}>Instructions</Text>
                    <Text style={[styles.instructions, { color: currentTheme.textColor }]}>{details?.strInstructions}</Text>

                    {details?.strYoutube && (
                        <Text
                        style={styles.link}
                        onPress={() => Linking.openURL(details?.strYoutube)}
                        >
                        Watch on YouTube
                        </Text>
                    )}
                </View>
            </ScrollView>
        </LoaderWrap>
    );
}