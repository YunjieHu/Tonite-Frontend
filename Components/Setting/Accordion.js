import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, Switch, LayoutAnimation, Platform, UIManager} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Button from '../Auth/Button'
import { ScrollView } from 'react-native-gesture-handler';

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            data: props.data,
            expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    
    renderSwitch(type){
        switch(type){
            case 'choose':
                    return this.state.data.map((item, index) => {
                        return(
                        <View key = {'chooseNotif'+index} style ={styles.switchWrapper}>
                            <View style ={styles.wrapLeft}>
                                <Text style={styles.subheading}>{item.key}</Text>
                                <Text style={styles.tooltip}>{item.caption}</Text>
                            </View>
                            <View style ={styles.wrapRight}>
                                <Switch
                                    style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
                                    trackColor={{ false: "rgba( 142, 142, 147, 1.0)", true: "rgba( 255, 55, 95, 0.5)" }}
                                    thumbColor={item.value ? "rgba( 255, 55, 95, 1.0)" : "#f4f3f4"}
                                    ios_backgroundColor="#fff"
                                    value={item.value}
                                    onValueChange={()=>this.onClick(index)}
                                />
                            </View>
                        </View>
                        )
                    })
            case 'update':
                return this.state.data.map((item, index) => {
                    return(
                        <View key = {'updateNotif'+index} style ={styles.switchWrapper}>
                            <View style ={styles.wrapLeft}>
                                <Text style={styles.subheading}>{item.key}</Text>
                                <Text style={styles.tooltip}>{item.caption}</Text>
                            </View>
                            <View style ={styles.wrapRight}>
                                <TouchableOpacity><Text style={styles.update} >Update</Text></TouchableOpacity>
                            </View>
                        </View>
                    )
                })
            case 'button':
                return this.state.data.map((item, index) => {
                    return(
                <Button key = {'buttonNotif'+index} label={item.key} customStyles={{ width: '90%', alignSelf: 'center', fontFamily: 'avenir-next', backgroundColor: 'rgba( 255, 55, 95, 1.0)'}} ></Button> )
                })
                
            case 'text':
                return <View style={styles.child}>
                        <View
                        flex={0}
                        alignItems="center"
                        justifyContent="center"
                        backgroundColor="white"
                        maxWidth="95%"
                        maxHeight="95%"
                        >
                        <ScrollView contentContainerStyle={{ flexGrow: 0, justifyContent: 'center' }}>
                        <Text style={styles.caption}>{this.props.data}</Text> 
                         </ScrollView>   
                         </View>
                </View>;
        }
    }

    render() {
        return (
        <View>
                <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                    <Text style={[styles.title]}>{this.props.title}</Text>
                    <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'#5E5E5E'} />
                </TouchableOpacity>
                <View style={styles.parentHr}/>
                {this.state.expanded  &&
                    <View style={styles.child}>
                   {this.renderSwitch(this.props.type)}
                    </View>
                }
                
        </View>
        )
    }

    onClick=(index)=>{
        const temp = this.state.data.slice()
        temp[index].value = !temp[index].value
        this.setState({data: temp})
    }

    toggleExpand=()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({expanded : !this.state.expanded})
    }

    }

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width:'100%',
        height:54,
        alignItems:'center',
        paddingLeft:35,
        paddingRight:35,
        fontSize: 12,
    },
    title:{
        fontFamily: 'avenir-next-bold', 
        fontSize: 16,
        color: '#000',
        textAlign:'center',
    },
    caption:{
        fontFamily: 'avenir-next', 
        fontSize: 13,
        color: 'gray',
        textAlign:'left',
        alignSelf:'center',
        paddingHorizontal: 20
    },

    update:{
        fontSize: 13,
        color: 'rgba( 255, 55, 95, 1.0)',
        alignSelf:'flex-end',
        paddingRight: 4
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: '#fff',
    },
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: '#ececec',
    },
    parentHr:{
        height:1,
        color: 'white',
        width:'100%'
    },
    child:{
        justifyContent:'center',
    },
    childHr:{
        height:1,
        backgroundColor: '#C7C7C7',
        width:'100%',
    },
    colorActive:{
        borderColor: '#0da935',
    },
    colorInActive:{
        borderColor: '#5E5E5E',
    },
    switchWrapper:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:10,
        alignItems:'center',
        backgroundColor: '#fff',
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
        fontSize: 14,
        color: '#000',
        textAlign:'center',
      },
      tooltip:{
        fontFamily: 'avenir-next', 
        fontSize: 12,
        color: 'rgba( 152, 152, 157, 1.0)',
        paddingBottom: 10
     },
    
});