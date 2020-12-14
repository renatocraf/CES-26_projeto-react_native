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
    },
    lista: {
        justifyContent: 'space-between',
    }
})

export default props => 
    <View style={styles.visor}>
        {props.category == 'food' && 
        <View style={styles.lista}>
            <Product name='Hamburguer' price='24.90' description='delicia' phone='12999999999'/>
            <Product name='Bolo de Cenoura' price='17.90' description='com chocolate é a combinação perfeita' phone='12123456789'/>
        </View>}
        {props.category == 'home' &&
        <View style={styles.lista}>
            <Product name='Quadro da Monalisa' price='9999999999999.99' description='meio caro' phone='12991239999'/>
            <Product name='Armário' price='459.90' description='acaros nao inclusos' phone='12123456789'/>
        </View>}
        {props.category == 'electronics' && 
        <View style={styles.lista}>
            <Product name='Iphone 15' price='2399.90' description='nao eh falso' phone='12999999999'/>
        </View>}
        {props.category == 'service' && 
        <View style={styles.lista}>
            <Product name='Troca de pneu' price='800.00' description='so quem ja furou o pneu do carro sabe o sentimento :(' phone='12999999123'/>
            <Product name='Cortar grama' price='20.00' description='mamae me obrigou a arranjar dinheiro' phone='12123456789'/>
        </View>}
        {props.category == 'sports' && 
        <View style={styles.lista}>
        </View>}
        {props.category == 'dressing' && 
        <View style={styles.lista}>
            <Product name='Batom usado' price='9.90' description='so pra esquisitoes' phone='12999999999'/>
            <Product name='Bone nike sem aba' price='300.00' description='a nova moda do verao' phone='12123456789'/>
            <Product name='Chinelo com prego' price='2.99' description='achei no lixao' phone='12112345789'/>
        </View>}
    </View>