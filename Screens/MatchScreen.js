import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Platform} from 'react-native';
import CustomIcon from "../assets/SVG/logo-icon-btn.svg";
import Swiper from "react-native-deck-swiper";
import Card from '../Components/Match/Card.js'
import ToolkitButton from '../Components/Match/ToolkitButton.js'
import Modal from 'react-native-modal';



class MatchScreen extends React.Component {
    constructor () {
        super()
        this.useSwiper = React.createRef();
        this.state = {
          data: [
              {
                id: '1',
                name: 'Joel',
                photo: require('../assets/placeholder.png'),
                age: 24,
                location: 'Harlem, New York'
              },
              {
                id: '2',
                name: 'Coraline',
                photo: require('../assets/placeholder.png'),
                age: 28,
                location: 'Harlem, New York'
              },
              {
                id: '3',
                name: 'Joris Bohnson',
                photo: require('../assets/placeholder.png'),
                age: 25,
                location: 'Harlem, New York'
              }
          ],
          cardIndex: 0,
          disabled: false,
          isModalVisible: false
        }
        this.disableSwipe = this.disableSwipe.bind(this);
        this.updateIndex = this.updateIndex.bind(this);
      }
      handleOnSwipedLeft = () =>  {
        this.setState({
          disabled: true});
          this.useSwiper.current.swipeLeft()
        }
      handleOnSwipedTop = () => this.useSwiper.current.swipeTop()
      handleOnSwipedRight = () => {
        this.setState({
          disabled: true});
        this.useSwiper.current.swipeRight() 
      }
      
      updateIndex(cardIndex) {
        this.setState({
            cardIndex:cardIndex
        });
        console.log(cardIndex+1)
        console.log(this.state.data.length)
        if ((cardIndex + 1) < this.state.data.length){
          this.setState({
            disabled: false
          });
        }
      }
      
      disableSwipe() {
        this.setState({
          disabled:true
        });
      }
      closeModal = () =>{this.setState({isModalVisible: false})}
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.toolbar}>
                <Text style = {styles.heading}>Browse</Text>
              </View>
                 <View style={styles.swiperContainer}>
                    <Modal animationIn="slideInUp" animationOut="slideOutDown" onBackdropPress={()=>this.closeModal()} onSwipeComplete={()=>this.closeModal()} swipeDirection="right" isVisible={this.state.isModalVisible} style={{backgroundColor:'white',maxHeight:Dimensions.get('window').height / 2}}>
                      <View style={{flex: 1}}>
                        <Text>Check back later for more</Text>
                      </View>
                    </Modal>
                    <Swiper
                      ref={this.useSwiper}
                      onSwiped={(cardIndex) => { this.updateIndex(cardIndex) }}
                      animateCardOpacity
                      useViewOverflow={Platform.OS === 'ios'}
                      containerStyle={styles.container}
                      cards={this.state.data}
                      renderCard={card => <Card card={card} />}
                      cardIndex={0}
                      backgroundColor="#fff"
                      stackSize={2}
                    /> 
                  </View>
                   <View style={styles.buttonsContainer}>
                    <ToolkitButton
                      name="close"
                      color="rgba( 255, 55, 95, 1.0)"
                      backgroundColor="#fff"
                      onPress={this.handleOnSwipedLeft}
                      disabled = {this.state.disabled}
                    />
                    <TouchableOpacity  disabled = {this.state.disabled} style= {this.state.disabled? styles.disabledBorderColor: styles.borderColor} onPress={this.handleOnSwipedRight}>
                      <CustomIcon style={styles.hook} width={35} height={35} />
                    </TouchableOpacity>
                  </View>
              </View>
        );

    }
}


export default MatchScreen;

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#FFF',
      justifyContent: 'flex-start',
    },
    toolbar: {
      paddingTop: 45,
      textAlign:'center'
    },
    heading:{
      fontFamily: 'avenir-next-bold', 
      fontSize: 18,
      color: '#000',
      textAlign:'center',
    },
    Notif:{
      fontFamily: 'avenir-next-bold', 
      fontSize: 22,
      color: '#000',
      textAlign:'center',
      height: '100%',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:"center"
    },
    swiperContainer:{
      flex: 1,
    },
    avatar:{
        width: '80%',
        height: undefined,
        aspectRatio: 0.8,
        flex:1.5,
    },
    hook:{
        flex: 1,
    },
    borderColor:{
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
        backgroundColor: 'rgba( 255, 55, 95, 1.0)',
        borderRadius: 50,
    },
    disabledBorderColor:{
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
        backgroundColor: 'grey',
        borderRadius: 50,
        opacity: 0.5
    },
    buttonsContainer: {
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 10
    },

  })