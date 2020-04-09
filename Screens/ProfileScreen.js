import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import {profileAction } from '../Actions';
import {AsyncStorage} from 'react-native';


/*profile    
  should be split into 2 cases:
  View Mode: when user is visiting another user's profile page
  Edit Mode: when user is visiting their own page
*/

class ProfileScreen extends Component {

    fetchUser = async() =>{
      let session;
      const params  = this.props.navigation.state;
      const isValidParam = !params || params.params;
      // if there is a profile redirect
      if (isValidParam && params.params.profileID !== undefined){
          session = params.params.profileID
      }
      //otherwise visit your own profile
      else{
        try{
            session = JSON.parse(await AsyncStorage.getItem('session'));
        }
        catch (error){
            console.log(error.message);
        }
      }
      this.props.dispatch(profileAction(session));
    }

    async componentDidMount () {
        this.fetchUser();
    }

    render() {
      const loading = this.props.loading;
      //temporary const for edit/view mode, replace when api ready
      const mode = 'view';
        return(
          //future logic for error handling inside here
          <View style={styles.container}>
            profile
          </View>
        );
    }
  }

  const mapStateToProps = (store) => ({
    response: store.profile.response,
    loading:store.profile.loading
  });
  
  export default connect(mapStateToProps)(ProfileScreen);

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'white'
    }
  });
   