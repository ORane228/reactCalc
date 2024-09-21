import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height

interface ICleanButton {
    value: number,
    onPress: (value: number) => void
}

export const NumberButton: React.FC<ICleanButton> = ({value, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 4,
        height: height / 4 / 1.5,
        borderColor: 'black',
        borderWidth: 2,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})