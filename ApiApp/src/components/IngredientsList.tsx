import { StyleSheet, Text, View } from 'react-native';
import { Ingredient } from '../utils/types';
import { Colors } from '../utils/colors';


interface Props {
    ingredients: Ingredient[]
}


export const IngredientsList: React.FC<Props> = ({ ingredients }) => {
    return ( 
        <View style={styles.container}>
            {ingredients.map((item, index) => (
                <Text key={index} style={styles.item}>
                    {item.strIngredient} ------------ {item.strMeasure}
                </Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 6,
        alignItems: 'center',
        fontSize: 15,
        fontWeight: '600', 
        color: Colors.yellow,
    }
})