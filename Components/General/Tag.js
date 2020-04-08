import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

class Tag extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.tagText}>{this.props.children}</Text>
            </View>
        )
    }
}

export default Tag;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor:'#00ac7d',
        paddingHorizontal: 8,
        paddingVertical: 5,
        minWidth: 30,
        marginBottom: 5,
        marginRight: 5
    },
    tagText:{
        color:'white',
        fontSize: RFPercentage(2.5),
    }
  });