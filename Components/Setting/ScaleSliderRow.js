import React from 'react';
import { Text, View, StyleSheet, Dimensions} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from '../General/CustomMarker'

class ScaleSliderRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
          multiSliderValue: [this.props.rangeMin, this.props.rangeMax],
          first: this.props.min,
          second: this.props.max,
        }
    }

    multiSliderValuesChange = values => {
         this.setState({
             multiSliderValue: values,
             first : values[0],
             second : values[1],
         }) 
         this.props.handleSelect(this.props.id, values)
     }

    render() {
        const  { title, tooltip } = this.props;
        const width = Dimensions.get('window').width;
        return(
            <>
            <View style ={styles.switchWrapper}>
                <View style ={styles.wrapLeft}>
                    <Text style={styles.subheading}>{title}</Text>
                </View>
                <View style ={styles.wrapRight}>
                     <Text style={styles.tooltip}>{tooltip}</Text>
                </View>
            </View>
            <View style ={{alignItems:'center'}}>
                <MultiSlider
                    trackStyle={{backgroundColor:'rgba( 152, 152, 157, 1.0)'}}
                    selectedStyle={{backgroundColor:"rgba( 255, 55, 95, 0.8)"}}
                    values={ [this.state.multiSliderValue[0],this.state.multiSliderValue[1]]}
                    sliderLength={width-50}
                    onValuesChange={this.multiSliderValuesChange}
                    min={this.props.min}
                    max={this.props.max}
                    step={1}
                    allowOverlap={false}
                    snapped={true}
                    customMarker={CustomMarker}
                />
            </View>
            </>
        );
    }
}


export default ScaleSliderRow;

  const styles = StyleSheet.create({
    switchWrapper:{
      flexDirection:'row',
      width: '90%',
      alignSelf:'center'
    },
    wrapLeft:{
      flex: 1.5,
      textAlign:'left',
      alignItems:'flex-start'
    },
    wrapRight:{
      flex: 0.5,
      justifyContent:'center',
      alignItems:'flex-end',
      paddingRight: 10
    },
    heading:{
      fontFamily: 'avenir-next-bold', 
      fontSize: 16,
      color: '#000',
      textAlign:'center',
    },
    subheading:{
      fontFamily: 'avenir-next-bold', 
      fontSize: 16,
      color: '#000',
      textAlign:'center',
    },
    tooltip:{
      fontFamily: 'avenir-next', 
      fontSize: 14,
      color: 'rgba( 152, 152, 157, 1.0)',
      paddingBottom: 10
   },

  })