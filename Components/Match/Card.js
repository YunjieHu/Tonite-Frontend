import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

class Card extends React.Component{
    constructor(props){
        super(props)
    } 
    render(){
        const { card  } = this.props;
        return(
            <View style={styles.card}>
                <Image
                style={styles.image}
                source={card.photo}
                resizeMode="cover"
                />
                <View style={styles.photoDescriptionContainer}>
                <Text style={styles.text}>
                    {`${card.name}, ${card.age}`}
                </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        height: '80%',
        marginTop: -50,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 2,
      },
      image: {
        borderRadius: 5,
        width:'100%',
        flex:1,
      },
      photoDescriptionContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flexDirection: 'column',
        height: '100%',
        position: 'absolute',
        left: 10,
        bottom: 10,
      },
      text: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontFamily: 'avenir-next', 
        textShadowColor: '#000',
        textShadowRadius: 10,
      },
  });

  export default Card;