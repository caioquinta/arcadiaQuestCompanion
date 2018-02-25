import React, {Component} from 'react';
import {Button, View, Text, Modal, StyleSheet  } from 'react-native';
import GuildList from '../components/GuildList'

export default class LoadGuildModal extends Component {
  state = {
    modalVisible: false,
  };

  constructor(props) {
    super(props);
    console.log(this.props.guildList)
  }

  componentWillReceiveProps(nextProps){
    const {modalVisible} = nextProps
    if(modalVisible){
      this.setState({modalVisible:true});    
    }
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
            <GuildList guildList={this.props.guildList} />
 	 						<Button onPress={() => this._closeModal()} title="Close" >
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