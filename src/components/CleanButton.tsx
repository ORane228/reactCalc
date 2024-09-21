import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

interface ICleanButton {
    value: string,
    onPress: () => void
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const CleanButton: React.FC<ICleanButton> = ({value, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress()}>
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

