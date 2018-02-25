import React, {Component} from 'react';
import {AsyncStorage, Alert, Button, View, Text, TextInput } from 'react-native';

export default class NewGuildScreen extends Component {


    constructor(props) {
    super(props);
    this.state
    this.state = {guildName: ''};

        
  }

  _onSaveButton(){
    _updateGuild() 
    Alert.alert("save: "+ this.state.guildName);
  }

  async _updateGuild(){
    let existingGuild = await JSON.parse(response) || [];

    if(existingGuild.length === 0 )
      Alert.alert('Guild name already exists')
    else
      await AsyncStorage.setItem('guildName', JSON.stringify(this.state.guildName)); 
  }

  render() {
    return (
      <View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Arcadia Quest Companion</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text>Name:</Text>
          <TextInput
          style={{height: 40}}
          placeholder="guildname"
          onChangeText={(text) => this.setState({text})}
        />
          <Button
          title="Salvar"
          onPress={this._onSaveButton}
        />
        </View>
      </View>
    );
  }
}