import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
} from 'react-native'


const styles = StyleSheet.create({
    display: {
        width: Dimensions.get('window').width ,
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#CDCDC1',
        alignItems: 'flex-end',
        borderColor: 'black',
        borderRadius: 20,
        alignItems:'center'
    },
    displayValue: {
        fontSize: 50,
        color: 'black',
    }
})

export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1}>{props.value}</Text>
    </View>