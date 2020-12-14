import React from 'react'
import {
    StyleSheet,
    Text,
    Image,
    Dimensions,
    TouchableHighlight,
    ImagePropTypes
} from 'react-native'

const styles = StyleSheet.create({

    dimension: {        
        height: Dimensions.get('window').width  * 5/36,
        width: Dimensions.get('window').width   * 5/36,
        
    }
})



export default props => {    
    return (
        <TouchableHighlight onPress={() => props.onClick(props.name)} >            
            <Image 
                source={props.source}
                style={styles.dimension}
            />
        </TouchableHighlight>
    )
}

