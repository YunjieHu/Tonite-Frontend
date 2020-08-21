import React, { Component } from 'react';
import { 
    View, 
    Dimensions,
    Slider
} from 'react-native';



class CustomSlider extends Component {
    constructor(props){
        super(props);
        this.state={
            slideValue: 0,
        };
    }

    updateSlider = (val) =>{
        this.props.handleSelect(this.props.id, val)
    }


    render() {
        const width = Dimensions.get('window').width;
        return(
            <View style={{borderRadius: 50, alignSelf:'center'}}>       
            <Slider 
                style={{width:300, height: 40, borderRadius: 50}}
                minimumValue={0}
                maximumValue={50}
                value={this.props.value}
                onValueChange={(val) => this.updateSlider(val)}
                maximumTrackTintColor='grey'  
                minimumTrackTintColor='rgba( 255, 55, 95, 0.8)'
                thumbTintColor='rgba( 255, 55, 95, 1.0)'
                />  
            </View>

        );
    }

};


export default CustomSlider;