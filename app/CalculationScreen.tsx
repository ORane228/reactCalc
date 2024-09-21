import { Text, View, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { NumberButton } from "@/src/components/NumberButton";
import { OperationButton } from "@/src/components/OperationButton";
import { Operations } from "@/src/components/Interfaces";
import { CleanButton } from "@/src/components/CleanButton";

const {width} = Dimensions.get('window');
const height = Dimensions.get('window').height;
export const CalculationScreen = () => {
    const [result, setResult] = useState<number | undefined>();
    const [currentOperation, setCurrentOperation] = useState<Operations | undefined>();
    const [history, setHistory] = useState<string[]>();

    const clean = () => {
        setResult(undefined)
        setCurrentOperation(undefined)
    }

    const operations = (number: number) => {
        if(!result){
            setResult(number)
            return;
        }
        else if(!currentOperation){
            const newResult = result * 10 + number
            setResult(newResult);
        }
        else {
            switch(currentOperation){
                case Operations.minus:
                    setResult(result - number);
                    break;
                case Operations.plus:
                    setResult(result + number);
                    break;
                case Operations.divide:
                    setResult(result / number);
                    break;
                case Operations.multiply:
                    setResult(result * number);
                    break;
            }

            setCurrentOperation(undefined);
        }
    }

    return (
        <View >
            <Text style={styles.resultRow}>{result}</Text>
            <View style={styles.buttonContainer}>
                
                <NumberButton value={1} onPress={() => operations(1)}/>
                <NumberButton value={2} onPress={() => operations(2)}/>
                <NumberButton value={3} onPress={() => operations(3)}/>
                <OperationButton value={Operations.minus} onPress={() => setCurrentOperation(Operations.minus)}/>
            </View>
            <View style={styles.buttonContainer}>
                
                <NumberButton value={4} onPress={() => operations(4)}/>
                <NumberButton value={5} onPress={() => operations(5)}/>
                <NumberButton value={6} onPress={() => operations(6)}/>
                <OperationButton value={Operations.plus} onPress={() => setCurrentOperation(Operations.plus)}/>
            </View>
            <View style={styles.buttonContainer}>
                
                <NumberButton value={7} onPress={() => operations(7)}/>
                <NumberButton value={8} onPress={() => operations(8)}/>
                <NumberButton value={9} onPress={() => operations(9)}/>
                <OperationButton value={Operations.multiply} onPress={() => setCurrentOperation(Operations.multiply)}/> 
            </View>
            <View style={styles.buttonContainer}>
                <NumberButton value={0} onPress={() => operations(0)}/>
                <OperationButton value={Operations.divide} onPress={() => setCurrentOperation(Operations.divide)}/>
                <CleanButton value="x2" onPress={() => console.log("x2")}></CleanButton>
                <CleanButton value="C" onPress={() => clean()}></CleanButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: width,
        height: height / 2,
    },
    resultRow: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 55,
        height: 70,
        textAlign: 'right',
        textAlignVertical: 'bottom'
    },
    buttonContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent:'space-between',
    },
})