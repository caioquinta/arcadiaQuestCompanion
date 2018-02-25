import React, {Component} from 'react';
import {AsyncStorage, Button, View, Text, Modal, StyleSheet  } from 'react-native';


export default class LoadGuildModal extends Component {
  state = {
    modalVisible: false,
  };

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps){
    const {modalVisible} = nextProps
    if(modalVisible){
      this.setState({modalVisible:true});    
    }
  }  
  _closeModal() {
    this.setState({modalVisible:false});    
    console.log('close '+ this.state.modalVisible)
  }


render(){
	return (
		<View style={styles.container}> 
			<Modal visible={this.state.modalVisible} animationType={'slide'} 
				onRequestClose={() => this._closeModal()} >
				<View style={styles.modalContainer}>
					<View style={styles.innerContainer}>
  					<Text>This is content inside of modal component</Text>
 	 						<Button onPress={() => this._closeModal()} title="Close modal" >
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
    backgroundColor: 'white',
  },
  innerContainer: {
    alignItems: 'center',
  },
});	