import React from 'react'
import LottieView from 'lottie-react-native'
import { Dimensions, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props extends React.PropsWithChildren{
    isLoading: boolean
}

export const LoaderWrap: React.FC<Props>  = ({children, isLoading}) => {
    return ( 
        <SafeAreaView style={styles.container}>
            {
                isLoading ? <LottieView
                    source={require('../assets/lottie/loading.json')}
                    style={styles.lottie}
                    autoPlay
                    loop>
                </LottieView>
                : children
            }
        </SafeAreaView>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    lottie: {
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').width / 2
    }
})