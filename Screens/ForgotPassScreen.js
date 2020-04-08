import React from 'react';
import { Text, View } from 'react-native';

class ForgotPasswordScreen extends React.Component {
    render() {
      const styles = {
        viewStyles: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'green'
        },
        textStyles: {
          color: 'white',
          fontSize: 40,
          fontWeight: 'bold'
        }
      }
  
      return (
        <View style={styles.viewStyles}>
          <Text style={styles.textStyles}>
            Forgot Password
          </Text>
        </View>
      );
    }
  }
  
  export default ForgotPasswordScreen;