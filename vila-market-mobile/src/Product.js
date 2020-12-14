import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'


const styles = StyleSheet.create({
    display: {
        flex: 10,
        backgroundColor: '#C0C0C0', 
        borderRadius: 20,
    },
    displayValue: {
        fontSize: 10,
        color: 'black',
        
    }
})

export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue}>{props.name}</Text>
        <Text style={styles.displayValue}>{props.price}</Text>
        <Text style={styles.displayValue}>{props.description}</Text>
        <Text style={styles.displayValue}>{props.phone}</Text>
    </View>