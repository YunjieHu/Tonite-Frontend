import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Button extends React.Component{
    render(){
        const { disabled, label, onPress, customStyles} = this.props;
        const containerStyle = [
          styles.container,
          disabled
            ? styles.containerDisabled
            : styles.containerEnabled
        ];
        return(
        <TouchableOpacity style={[containerStyle, customStyles]} onPress={onPress} disabled={disabled}>
          <View style={styles.btnContainer}>
            {this.props.children}
            <Text style={styles.textStyles}>{label}</Text>
          </View>
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#F5FFFA',
      marginBottom: 12,
      paddingVertical: 16,
      borderRadius:5,
    },
    containerEnabled: {
      opacity: 1
    },
    containerDisabled: {
      opacity: 0.3
    },
    btnContainer:{
      flexDirection: "row",
      alignItems: 'center',
    },
    textStyles: {
      flex: 0.9, 
      color: '#fff',
      textAlign:'center',
    },
  });

  export default Button;