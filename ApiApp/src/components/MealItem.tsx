import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Meal } from '../utils/types'
import { convertStringToHashtagArray } from '../utils/helpers'
import { Colors } from '../utils/colors'

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useTheme } from '../ThemeContext';
import FavoriteButton from './FavoriteButton';

interface Props extends Meal {

}

export const MealItem: React.FC<Props> = (props) => {
    const { currentTheme } = useTheme();
    const tags = props.strTags ? convertStringToHashtagArray(props.strTags) : [];

    //@ts-ignore
    const navigation = useNavigation();

    //@ts-ignore
    const ids = useSelector((state) => state.ids);
    const isFavorite = ids.includes(props.idMeal);

    //@ts-ignore
    const onNavigate = (idMeal) => navigation.navigate('Details', { idMeal })

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: currentTheme.blockColor }]} onPress={() => onNavigate(props.idMeal)}>
            <Image style={styles.image} source={{ uri: props.strMealThumb }} />

            <View>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, { color: currentTheme.textColor }]}>{props.strMeal}</Text>
                    <View style={styles.tagsContainer}>
                        {tags.map((tag, index) => (
                            <Text key={index} style={styles.tag}>
                                {tag}
                            </Text>
                        ))}
                    </View>
                </View>

                <View>
                    <FavoriteButton isFavorite={isFavorite} idMeal={props.idMeal}/>
                </View>
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        marginBottom: 30,
        padding: 30,
        borderRadius: 30,
        gap: 30,
    },

    textContainer: {
        flex: 1,
    },

    text: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10,
    },

    name: {
        fontSize: 22,
        fontWeight: 'bold',

        marginBottom: 5,
        width: 200,

        flexWrap: 'wrap',
        color: Colors.almostBlack
    },

    image: {
        height: 150,
        width: 150,

        borderRadius: 15,
    },

    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',

        marginTop: 5,
    },

    tag: {
        fontSize: 14,
        color: Colors.tagGray,
        
        marginRight: 5,
    },
});
