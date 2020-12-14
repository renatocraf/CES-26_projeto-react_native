import React from 'react'
import {
    StyleSheet,
    Text,
    Image,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        
        fontSize: 40,
        height: Dimensions.get('window').width / 6,
        width: Dimensions.get('window').width / 6,
        padding: 20,
        backgroundColor: '#A4D3EE',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#FF8C00',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    },
    buttonAC:{
        backgroundColor: '#EE3B3B',
    },
    buttonigual:{
        backgroundColor: '#00EE00',
    },
    dimensao: {
        height: Dimensions.get('window').width / 6,
        width: Dimensions.get('window').width / 6,
    }
})

image = require('../images/food.png')

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)
    if (props.AC) stylesButton.push(styles.buttonAC)
    if (props.igual) stylesButton.push(styles.buttonigual)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>            
            <Image 
                source={props.source}
                style={styles.dimensao}
                 
                />
        </TouchableHighlight>
    )
}
/*
image = require('../images/food.png')
style={styles.teste}
props.imageUri


*/

