import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

class ToolkitButton extends React.Component{
    constructor(props){
        super(props)
    } 
    render(){
        const { backgroundColor, onPress, name, color, disabled } = this.props;
        return(
        <TouchableOpacity
            style={disabled? [styles.disabled, { backgroundColor }] : [styles.singleButton, { backgroundColor }]}
            onPress={onPress}
            activeOpacity={0.85}
            disabled = {disabled}
        >
            <Icon
            name={name}
            size={35}
            color={disabled ? 'white' : color}
            />
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    singleButton: {
        backgroundColor: 'transparent',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 2,
        padding: 15,
      },
      disabled:{
        backgroundColor: 'transparent',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 2,
        padding: 15,
        opacity: 0.8
      }
  });

  export default ToolkitButton;