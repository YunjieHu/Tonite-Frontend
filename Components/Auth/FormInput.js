import React from 'react';
import {  Platform, View, Text, TextInput, StyleSheet } from 'react-native';

class FormInput extends React.Component{
    state = {
      isFocused: false
    };

    textInputRef = React.createRef();
    focus = () => {
      if (this.textInputRef.current) {
        this.textInputRef.current.focus();
      }
    };

    handleFocus = (e) => {
      this.setState({ isFocused: true });
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    };
  
    handleBlur = (e) => {
      this.setState({ isFocused: false });
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    };

    render(){
        const {error, onFocus, onBlur, style, ...otherProps } = this.props;
        const { isFocused } = this.state;
        return(
        <View style={[styles.container, style]}>
           {/*text input*/}
          <TextInput 
          ref={this.textInputRef}
          selectionColor={'#1e90ff'}
          underlineColorAndroid={
            isFocused
              ? '#1e90ff'
              : '#F5FFFA'
          }
          style={[styles.textStyles, style]} 
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...otherProps}>
          </TextInput>
          {/*error output*/}
          <Text style={styles.errorText}>{error || ""}</Text>
       </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 2
    },
    textStyles: {
      height: 40,
      ...Platform.select({
        ios: {
          borderColor: '#F5FFFA',
          borderBottomWidth: StyleSheet.hairlineWidth
        },
        // The underline on Android is slightly misaligned so
        // we fix it by adding a left padding here...
        android: {
          paddingLeft: 6
        }
      })
    },
    errorText: {
      height: 20,
      color: '#c2211a'
    }
  });

  export default FormInput;