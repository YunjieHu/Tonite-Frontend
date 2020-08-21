import React from 'react'
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native'

//handle login redirects

export default class AuthLoadingScreen extends React.Component {
  state = {
    userToken: null
  }
  async componentDidMount () {
    await this.loadApp()
  }
  // Get the logged in users and remember them
  loadApp = async () => {
    this.props.navigation.navigate('main')
  }

  render() {
    return (
      <View style={styles.container}> 
        <ActivityIndicator size="large" color="#fff" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b44666',
    alignItems: 'center',
    justifyContent: 'center',
  },
})