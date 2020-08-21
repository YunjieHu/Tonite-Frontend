import React from 'react';
import { Text, View, Switch, StyleSheet} from 'react-native';

class SwitchRow extends React.Component {
    toggleSwitch = () =>{
      this.props.handleSelect(this.props.id, !this.props.isEnabled)
    }
    render() {
        const  { title, tooltip, isEnabled } = this.props;
        return(
            <View style ={styles.switchWrapper}>
                <View style ={styles.wrapLeft}>
                    <Text style={styles.subheading}>{title}</Text>
                    <Text style={styles.tooltip}>{tooltip}</Text>
                </View>
                <View style ={styles.wrapRight}>
                    <Switch
                        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
                        trackColor={{ false: "rgba( 142, 142, 147, 1.0)", true: "rgba( 255, 55, 95, 0.5)" }}
                        thumbColor={isEnabled ? "rgba( 255, 55, 95, 1.0)" : "#f4f3f4"}
                        ios_backgroundColor="#fff"
                        onValueChange={this.toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
        );
    }
}


export default SwitchRow;

  const styles = StyleSheet.create({
    switchWrapper:{
      flexDirection:'row',
      paddingBottom : 15,
      width: '90%' ,
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
      paddingRight: 10
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