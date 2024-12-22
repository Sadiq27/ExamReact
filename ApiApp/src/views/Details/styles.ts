import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    textContainer: {
        paddingHorizontal: 10
    },

    mainInfo: {
      marginBottom: 15
    },

    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'left'
    },

    image: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        marginBottom: 5,
    },

    subtitle: {
        marginBottom: 5,
        textAlign: 'left',
        fontSize: 18
    },

    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },

    instructions: {
        lineHeight: 24,
        fontSize: 15,
    },

    link: {
        color: Colors.Amber,
        marginTop: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 26
    },
})