import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  TouchableHighlight, 
  View,
  Image
 } from 'react-native';
import { render } from 'react-dom';

import Botao from './src/Botao';
import Visor from './src/Visor';

export const initialState= {
  
  operou:true
}


export default class App extends Component {
  state = { ...initialState };

  teste='../images/food.png'


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.texto} >Lista 07 - CES-26</Text>
          <Text>Grupo HSO - Turma 22</Text>
        </View>
        <Visor></Visor>
        <View style={styles.buttons}>
          <Botao source={require('./images/food.png')} />
          <Botao source={require('./images/home.png')} />
          <Botao source={require('./images/electronics.png')} />
          <Botao source={require('./images/service.png')} />
          <Botao source={require('./images/sports.png')} />
          <Botao source={require('./images/dressing.png')} />

        </View>
      </View>
    );
  }
}
/*
*/



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4C4',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  texto: {
    fontSize: 30,
  }

});




/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

/*<TouchableHighlight onPress={() => props.onClick()}>            
            <Image 
                source={require('./images/food.png')}
                style={styles.dimensao}
                 
                />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => props.onClick()}>            
            <Image 
                source={require('./images/food.png')}
                style={styles.dimensao}
                 
                />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => props.onClick()}>            
            <Image 
                source={require('./images/food.png')}
                style={styles.dimensao}
                 
                />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => props.onClick()}>            
            <Image 
                source={require('./images/food.png')}
                style={styles.dimensao}
                 
                />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => props.onClick()}>            
            <Image 
                source={require('./images/food.png')}
                style={styles.dimensao}
                 
                />
        </TouchableHighlight>*/