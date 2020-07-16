import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StackActions,NavigationActions } from 'react-navigation';
import {AsyncStorage} from 'react-native';


class HomeScreen extends React.Component {


    clearAsyncStorage = async() => {
      AsyncStorage.clear();
    }

    async componentDidMount(){
    }

    render() {
      const styles = {
        container:{
          flex: 1,
        },
        viewStyles: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        },
        button: {
          alignItems: 'center',
          backgroundColor: '#DDDDDD',
          padding: 10
        },
        textStyles: {
          fontSize: 40,
          fontWeight: 'bold'
        },
        avatar: {
          width: 250,
          height: 250,
          borderRadius: 250/2,
          borderWidth: 4,
          borderColor: "white",
          marginBottom:10,
          alignSelf:'center',
          marginTop:80
        }
      }
        return (
            <View style={styles.container}>
              <View style={styles.viewStyles}>
                <Text>Welcome to the testing control panel for this app</Text>
                <TouchableOpacity style={styles.button} onPress={this.clearAsyncStorage}>
                  <Text> Log Out</Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.button} onPress={this.RedirectTest}>
                  <Text> Visit Another Profile Page</Text>
                </TouchableOpacity>  
              </View>
            </View>
        );

    }
  }

  
  export default HomeScreen;