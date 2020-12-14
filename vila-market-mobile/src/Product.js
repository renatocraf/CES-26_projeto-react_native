import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native'


const styles = StyleSheet.create({
    display: {
        flex: 10,
        backgroundColor: '#C0C0C0', 
        borderRadius: 20,
        flexDirection: "row",
        alignSelf:'center',
        justifyContent: 'center'
        
    },
    texto: {
        fontSize: 20,
        color: 'black',

        
    },
    imagem:{
        height: Dimensions.get('window').width  * 1/6,
        width: Dimensions.get('window').width   * 1/6,       
   
    },
    grupo_texto:{
        paddingLeft: Dimensions.get('window').width  * 1/20,
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: StyleSheet.hairlineWidth
    },
    grupo_imagem:{
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: StyleSheet.hairlineWidth
    }
})

export default props => 
    <View style={styles.display}>
        <View style={styles.grupo_imagem}>
            <Image 
                source={props.source}
                style={styles.imagem}
            />
        </View>
        <View style={styles.grupo_texto}>
            <View>
                <Text style={styles.texto}>{props.name}</Text>
                <Text style={styles.texto}>{props.price}</Text>
                <Text style={styles.texto}>{props.description}</Text>
                <Text style={styles.texto}>{props.phone}</Text>
            </View>
        </View>
    </View>