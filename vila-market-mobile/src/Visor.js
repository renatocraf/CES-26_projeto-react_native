import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
} from 'react-native'

import Product from './Product'


const styles = StyleSheet.create({
    visor: {
        flex: 10,
        backgroundColor: '#C0C0C0', 
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontSize: 30,   
    }
})

export default props => 
    <View style={styles.visor}>
        {props.category == 'food' && 
        <Product name='Hamburguer' price='24.90' description='delicia' phone='12999999999'/>}
        {props.category == 'home' &&
        <Product name='' price='' description='' phone=''/>}
        {props.category == 'electronics' && 
        <Product name='' price='' description='' phone=''/>}
        {props.category == 'service' && 
        <Product name='' price='' description='' phone=''/>}
        {props.category == 'sports' && 
        <Product name='' price='' description='' phone=''/>}
        {props.category == 'dressing' && 
        <Product name='' price='' description='' phone=''/>}
    </View>