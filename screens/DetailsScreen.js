import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class DetailsScreen extends Component {
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        </View>
        );
    }
}
