import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Tile extends Component {
  constructor(props){
    super(props);
    // keep track of the tile's number
    this.state = {
      number: props.number
    } // will be changed soon
  }

  componentWillMount() {
    // this.generateStartingNumbers(); (change accordingly)
  }



  render() {
    return (
      <View style = {styles.tileContainer}>
        {
          this.props.exists ? 
          <Text style={styles.styleText}>{this.state.number}</Text>
          : null
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tileContainer: {
    alignSelf: 'center',
    backgroundColor: 'yellow',
    height: 100, //adjust according to grid
    width: 100, //adjust according to grid
    borderRadius: 2, //adjust for good design
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  styleText: {
    alignSelf: 'center'
  }
});
