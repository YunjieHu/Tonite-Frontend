import React, { Component } from 'react';
import { Text, TouchableHighlight , StyleSheet} from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

class RoundedButton extends Component {
    constructor(props) {
        super(props);
        this.state = { pressed: false };
    }
    
    _onHideUnderlay() {
        this.setState({ pressed: false });
      }
    _onShowUnderlay() {
        this.setState({ pressed: true });
    }


    render(){
        return(

                <TouchableHighlight 
                    onPress={this.props.onPress}
                    activeOpacity={1}
                    underlayColor={"#00ac7d"}
                    style={styles.button}
                    onHideUnderlay={() => this._onHideUnderlay()}
                    onShowUnderlay={() => this._onShowUnderlay()}
                >
                <Text style={[
                        styles.text,
                        this.state.pressed ? { color: '#fff' } : { color:'#00ac7d'}
                    ]}>{this.props.text}</Text>
                </TouchableHighlight >
        )
    }
}

export default RoundedButton;

const styles = StyleSheet.create({
    button: {
      paddingHorizontal:8,
      paddingVertical: 7,
      borderRadius: 30,
      borderColor:'#00ac7d',
      borderWidth: 2,
      minWidth: 130,
      marginHorizontal: 15,
    },
    text:{
      textAlign:'center',
      fontSize: RFPercentage(2.5),
      fontWeight: '600'
    }
  });