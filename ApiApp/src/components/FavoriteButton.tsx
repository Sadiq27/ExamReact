import React from 'react';
import { TouchableOpacity } from 'react-native';
import FavoriteIcon from '../assets/icons/favorite.svg';
import FavoriteFilledIcon from '../assets/icons/favorite-filled.svg';

import { addId, removeId } from '../redux/idSlice';
import { useSelector, useDispatch } from 'react-redux';

interface FavoriteButtonProps {
    isFavorite: boolean;
    idMeal: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, idMeal }) => {
    //@ts-ignore
    const ids = useSelector((state) => state.ids);
    const dispatch = useDispatch();

    const handleAddFavorite = () => {
            dispatch(addId(idMeal));
    };
    
    const handleRemoveFavorite = () => {
        dispatch(removeId(idMeal));
    };

    return (
        <TouchableOpacity onPress={() => isFavorite ? handleRemoveFavorite() : handleAddFavorite()}>
            {
                isFavorite ?
                    <FavoriteFilledIcon height={24} width={24} fill="red"/> :
                    <FavoriteIcon height={24} width={24} fill="red" />
            }
        </TouchableOpacity>
    );
};

export default FavoriteButton;
