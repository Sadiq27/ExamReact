import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchBar } from '../../components/SearchBar';
import { useState } from 'react';
import { MealList } from '../../components/MealList'
import { styles } from './styles';
import { Meal } from '../../utils/types';
import { useTheme } from '../../ThemeContext';


export const Home = () => {
    const { currentTheme } = useTheme();
    const [meals, setMeals] = useState<Meal[]>([])
    const insets = useSafeAreaInsets()
    
    const handleSearch = async (text: string) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`);
            const data = await response.json();
            setMeals(data?.meals ?? [])
        }
        catch (error) {
            console.warn(error)
        }
    };

    return ( 
        <SafeAreaView style={[
            styles.container, 
            { backgroundColor: currentTheme.backgroundColor }, 
            { marginBottom: insets?.bottom }
        ]}>
            <SearchBar placeholder="Search something..." onSearch={handleSearch} />
            <MealList meals={meals} />
        </SafeAreaView>
    );
}

export default Home;