import React, {Component} from 'react';
import { Button, View, Text  } from 'react-native';
import LoadGuildModal from '../components/NewGuildModal';

export default class HomeScreen extends Component {
  state = {
    modalVisible: false,
  };

  constructor(props) {
    super(props);
    this.state = {modalVisible:false};

  }

  _openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }
  
  render() {  
    const {navigation} = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LoadGuildModal modalVisible= {this.state.modalVisible} />
        <Text>Arcadia Quest Companion</Text>
        <Button
          title="New Guild"
          onPress={() => navigation.navigate('NewGuild')}
        />
        <Button
          title="Load Guild"
          onPress={this._openModal}
        />
      </View>
    );
  }
}