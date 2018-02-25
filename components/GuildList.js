import React, {Component} from 'react';
import {AsyncStorage, Button, View, Text, StyleSheet  } from 'react-native';

export default class GuildList extends Component {
    constructor(props){
        super(props);
        console.log(this.props.guildList)
    }

    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {this.props.guildList.array.forEach(guild => {
                <View  ><Text></Text>${guild}</View>
            })}
            </View>            
        )}

}
  