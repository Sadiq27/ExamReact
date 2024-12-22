import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../utils/colors'

import SearchIcon from '../assets/icons/search.svg';
import { useTheme } from '../ThemeContext';


interface Props {
    placeholder: string,
    onSearch: (text: string) => void
}

export const SearchBar: React.FC<Props> = ({ placeholder, onSearch }) => {
    const { currentTheme } = useTheme();
    const [searchText, setSearchText] = useState('');

    const handleChangeText = (text: string) => {
        setSearchText(text);
    };

    return (
        <View style={styles.searchWrapper}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={[
                        styles.input, 
                        { 
                            backgroundColor: currentTheme.inputBackgroundColor, 
                            color: currentTheme.inputColor 
                        }
                    ]}
                    placeholder={placeholder}
                    value={searchText}
                    onChangeText={handleChangeText}
                    placeholderTextColor={currentTheme.placeholderTextColor}
                />

                <TouchableOpacity onPress={() => onSearch(searchText)}>
                    <SearchIcon height={36} width={36} fill={'#fafafa'}/>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchWrapper: {
        backgroundColor: Colors.Amber,
        paddingVertical: 20,
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',

        gap: 10,

        marginHorizontal: 10,
    },

    input: {
        flex: 1,
        fontSize: 20,
        // color: Colors.textBlack,
        // backgroundColor: Colors.offWhite,
        borderRadius: 20,
        height: 60,
        
        paddingHorizontal: 15,
    }
});