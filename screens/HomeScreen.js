import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends Component {
  render() {
    const {navigation}  = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Arcadia Quest Companion</Text>
        <Button
          title="Criar Nova Guilda"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
}