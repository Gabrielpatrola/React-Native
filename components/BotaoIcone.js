import * as React from 'react';
import { Image, TouchableOpacity } from 'react-native';

export default class BotaoIcone extends React.Component{
  render(){

    var icone = require('../assets/snack-icon.png');
    var { altura, largura } = this.props; 

    return (
      <TouchableOpacity>
      <Image source={icone} style={{ height: altura, width: largura}}/>
      </TouchableOpacity>
    );

  }
  
}