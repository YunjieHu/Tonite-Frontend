import React, { Component } from 'react';
import { Animated, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';


 class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: new Animated.Value(0),
            prevProp: props,
        };
    }
    
    componentDidMount(){
      this.props.navigation.setParams({ visible: false });
    }
    componentDidUpdate(props) {
        const oldParams = this.props.navigation.state.params;
        const wasVisible = !oldParams || oldParams.visible;
        
        const newParams = props.navigation.state.params;
        const isVisible = !newParams || newParams.visible;

        if (wasVisible && !isVisible) {
          Animated.spring(
            this.state.offset,
            {
              toValue: 55,
              velocity: 80,
              tension: 14,
              friction: 14,
            }
          ).start();
        } else if (isVisible && !wasVisible) {
            Animated.spring(
              this.state.offset,
              {
                toValue: 0,
                velocity: 80,
                tension: 14,
                friction: 14,
              }
            ).start();
        }
    }
    
    
  render (){
    const {  navigation ,renderIcon,
        getLabelText,
        activeTintColor,
        inactiveTintColor,
        onTabPress,
        onTabLongPress,
        getAccessibilityLabel } = this.props
    const { routes, index: activeRouteIndex } = navigation.state;
    return (
      <SafeAreaView>
        <Animated.View style={[S.container,{
          transform: [
            {
              translateY: this.state.offset
            }
          ]
        }]}>
        {routes.map((route, index) => {
               const isRouteActive = index=== activeRouteIndex;
               const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
            return (
                <TouchableOpacity
                key={index}
                style={S.tabButton}
                onPress={() => {
                  onTabPress({ route });
                }}
                onLongPress={() => {
                  onTabLongPress({ route });
                }}
                accessibilityLabel={getAccessibilityLabel({ route })}
              >
                {renderIcon({ route, focused: isRouteActive, tintColor })}
              </TouchableOpacity>
            )
        })}
        </Animated.View>
        </SafeAreaView>
    )
 }
}

export default withNavigation(TabBar); 

const S = StyleSheet.create({
    container: {
      position: 'relative',  
      bottom:0,
      left: 0,
      right: 0,
      height: 50,
      flexDirection: "row",
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 1100,
      backgroundColor: '#fff', },
    tabButton: { flex: 1, justifyContent: "center", alignItems: "center" }
  });