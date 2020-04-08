
import React from 'react';
import { Image, View } from 'react-native';
import {connect} from 'react-redux';
import { loadSession } from '../Actions';
class SplashScreen extends React.Component {

  componentDidMount(){
    this.props.loadSession();
  }

  componentDidUpdate(){
    if (!this.props.session){
      setTimeout(function(){
        this.props.navigation.navigate('onboard');
      }.bind(this), 1000);
    }
    else{
      setTimeout(function(){
        this.props.navigation.navigate('main');
      }.bind(this), 1000);
    }
  }

    render() {
      const styles = {
        container: {
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#FFFAFA'
        },
        logoContainer: {
          alignItems:'center',
          justifyContent:'center',
          flex: 1
        },
        logo: {
          width:200,
          height:200,
        }
      }
  
      return (
        <View style={styles.container}>
          <View style={styles.logoContainer}>
              <Image style={styles.logo}
                source={require('../assets/logo.png')}>
              </Image>
          </View>
        </View>
      );
    }
  }

  const mapStateToProps = (store) => {
    return{
     session: store.session
    }
  };

  const mapDispatchToProps = (dispatch) => ({
    loadSession: () => dispatch(loadSession()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
