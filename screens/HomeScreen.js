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

async _callModal(){
  guildList = await this.getGuilds();
  this.setState({modalVisible:true, guildList})
}

async getGuilds(){
  try {
      const response = await AsyncStorage.getAllKeys();
      console.log(response)
      return response
    } catch (error) {
      console.log(error)
      return null;
      
    }
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
        <LoadGuildModal modalVisible={this.state.modalVisible}  guildList={this.state.guildList}/>
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