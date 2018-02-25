import React, {Component} from 'react';
import {AsyncStorage, Alert, Button, View, Text, TextInput } from 'react-native';

export default class NewGuildScreen extends Component {


    constructor(props) {
    super(props);
    this.state = {guildName: ''};

        
  }

  _onSaveButton(){
    this.updateGuild() 
    Alert.alert(`guild ${this.state.guildName} saved`);
  }

  async updateGuild(){
    try {
      console.log(this.state.guildName)
      let existingGuild = await AsyncStorage.getItem(`guild:${this.state.guildName}`)
      existingGuild = JSON.parse(existingGuild);
      console.log('existingGuild ' + existingGuild)
      if(existingGuild && existingGuild.name === this.state.guildName)
        Alert.alert(`Guild name ${this.state.guildName} already exists`)
      else
      await AsyncStorage.setItem(`guild:${this.state.guildName}`, JSON.stringify({name: this.state.guildName}));      
    } catch (error) {
      console.log(error)
      
    }
  }



  render() {
    return (
      <View style={{ flex: 1,flexDirection: 'column'}}>
        <View style={{alignItems: 'center', justifyContent: 'center' }}>
          <Text>New Guild</Text>
        </View>
        <View style={{  }}>
            <Text>Name:</Text>
            <TextInput placeholder="guild name" onChangeText={(guildName) => this.setState({guildName})}
          />
        </View>
        <View style={{  alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Save" onPress={() => this._onSaveButton()} />
        </View>
      </View>
    );
  }
}