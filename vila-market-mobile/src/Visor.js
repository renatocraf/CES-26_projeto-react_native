import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
} from 'react-native'


const styles = StyleSheet.create({
    display: {
        flex: 10,
        justifyContent: 'center',
        backgroundColor: '#C0C0C0', 
        borderRadius: 20,
        justifyContent: 'space-between'
    },
    displayValue: {
        fontSize: 50,
        color: 'black',
        
    }
})

export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1}>
                {props.value}
                </Text>
    </View>