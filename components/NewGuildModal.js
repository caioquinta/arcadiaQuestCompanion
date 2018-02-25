import React, {Component} from 'react';
import {AsyncStorage, Button, View, Text, Modal, StyleSheet  } from 'react-native';


export default class HomeScreen extends Component {


  constructor(props) {
    super(props);
    //allGuilds = 
    this.state = {modalVisible: this.props.modalVisible};
    
  }


  _closeModal() {
    this.setState({modalVisible:false});
  }

render(){
	return (
		<View style={styles.container}> 
			<Modal visible={this.state.modalVisible} animationType={'slide'} 
				onRequestClose={() => this._closeModal()} >
				<View style={styles.modalContainer}>
					<View style={styles.innerContainer}>
  					<Text>This is content inside of modal component</Text>
 	 						<Button onPress={() => this.closeModal()} title="Close modal" >
  						</Button>
					</View>
				</View>
			</Modal>
		</View>
	)}
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