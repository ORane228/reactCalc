import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { Operations } from "./Interfaces";

interface IOperationButton {
    value: Operations,
    onPress: (value: Operations) => void
}

export const {width} = Dimensions.get('window');
const height = Dimensions.get('window').height;
export const OperationButton: React.FC<IOperationButton> = ({value, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'orange',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: height / 4 / 1.5,
        width: width / 4,
        borderColor: 'black',
        borderWidth: 2,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})