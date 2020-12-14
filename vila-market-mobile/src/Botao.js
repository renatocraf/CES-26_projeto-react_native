import React from 'react'
import {
    StyleSheet,
    Text,
    Image,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({

    dimensao: {        
        height: Dimensions.get('window').width  * 5/36,
        width: Dimensions.get('window').width   * 5/36,
        
    }
})



export default props => {    
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>            
            <Image 
                source={props.source}
                style={styles.dimensao}
                 
                />
        </TouchableHighlight>
    )
}

