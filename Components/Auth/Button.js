import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class Button extends React.Component{
    render(){
        const { disabled, label, onPress } = this.props;
        const containerStyle = [
          styles.container,
          disabled
            ? styles.containerDisabled
            : styles.containerEnabled
        ];
        return(
        <TouchableOpacity style={containerStyle}  onPress={onPress} disabled={disabled}>
            <Text style={styles.textStyles}>{label}</Text>
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5FFFA',
      marginBottom: 12,
      paddingVertical: 12,
      borderRadius: 4,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor:"rgba(255,255,255,0.7)"
    },
    containerEnabled: {
      opacity: 1
    },
    containerDisabled: {
      opacity: 0.3
    },
    textStyles: {
      color: 'black',
      textAlign:'center',
      height: 20
    }
  });

  export default Button;