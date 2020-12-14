import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  TouchableHighlight, 
  View,
  Image,
  Dimensions,
  ScrollView
 } from 'react-native';
import { render } from 'react-dom';

import Botao from './src/Botao';
import Visor from './src/Visor';
const initialState = { category: 'None' }

export default class App extends Component {
  state = { ...initialState };

  changeCategory = new_category => {
    this.setState({category: new_category})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>React Native - CES-26</Text>
          <Text>Grupo HSO - Turma 22</Text>
        </View>
        <ScrollView style={styles.scrollView}>
        <Visor category={this.state.category} >
        
        </Visor>
        </ScrollView>
        <View style={styles.buttons}>        
          <Botao source={require('./images/food.png')} name='food' onClick={this.changeCategory}/>
          <Botao source={require('./images/home.png')} name='home'/>
          <Botao source={require('./images/electronics.png')} name='electronics'/>
          <Botao source={require('./images/service.png')} name='service'/>
          <Botao source={require('./images/sports.png')} name='sports'/>
          <Botao source={require('./images/dressing.png')} name='dressing'/>
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
    backgroundColor: '#FF8C00',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
  },
  buttons: {    
    flexDirection: 'row',  
    justifyContent: 'space-between',

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