import React, {Component} from 'react';
import {AsyncStorage, Button, View, Text, Modal, StyleSheet  } from 'react-native';
import LoadGuildModal from '../components/LoadGuildModal';

export default class HomeScreen extends Component {
  state = {
    modalVisible: false,
  };

  constructor(props) {
    super(props);
  }

_callModal(){
  this.setState({modalVisible:true})
  console.log(this.state.modalVisible)
}

  
  render() {  
    const {navigation} = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Arcadia Quest Companion</Text>
        <Button
          title="New Guild"
          onPress={() => navigation.navigate('NewGuild')}
        />
        <Button
          title="Load Guild"
          onPress={() => this._callModal()}
        />
        <LoadGuildModal modalVisible={this.state.modalVisible} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});	