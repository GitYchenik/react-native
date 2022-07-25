import React from "react";
import { StyleSheet, Text, View } from 'react-native';

function Loading() {
    return (<View style={styles.conteiner}>
        <Text style={styles.text}>Получение погоды...</Text>
    </View>)
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: '10%',
        backgroundColor: '#FDF6AA',
    },
    text: {
        color: '#2c2c2c',
        fontSize: 30,
    }
})

export default Loading;