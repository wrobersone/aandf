import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Platform, Image } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import { WebBrowser } from 'expo';

import Welcome from './assets/components/Welcome';
import HomeScreen from './screens/HomeScreen';
import StaffScreen from './screens/StaffScreen'
import AboutScreen from './screens/AboutScreen';
import CoachScreen from './screens/CoachScreen';
import CommandScreen from './screens/CommandScreen';
import RulesScreen from './screens/RulesScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />      
    );
  }
}


class WelcomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./assets/images/alumni/dope.jpg')}
        onPress={() => this.props.navigation.navigate('Home')}
        style={styles.wallpaper}>
        <View style={styles.layoutButtonContainer}>
          <View style={styles.button}>
            <Button title="Welcome to Omega" 
                    onPress={() => this.props.navigation.navigate('Home')}/>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

// Screens
class About extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#be2025'
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
        <Welcome />
          <View style={styles.midContainer}>
          <Button 
          title="Generations of Omega" 
          onPress={() => 
            this.props.navigation.navigate('History')} />
          <Button 
          title="Visit Our Site to Learn More" 
          onPress={this._infoPressButtonAsync} />
          </View>
        </View>
      </View>
    );
  }
  _infoPressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://stayaliveandfree.org/');
    this.setState({ result });
  };
}
const History = props => (
  <View style={styles.container}>
    <AboutScreen />
  </View>
);

class Faculty extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#be2025'
    }
  };
  render() {
    return (
      <StaffScreen />
    );
  }
}

class Coach extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#be2025'
    }
  };
  render() {
    return (
      <CoachScreen />
    );
  }
}

class Command extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#be2025'
    }
  };
  render() {
    return (
      <CommandScreen />
    );
  }
}

class Rule extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#be2025'
    }
  };
  render() {
    return (
      <RulesScreen />
    );
  }
}

// class Risks extends React.Component {
//   static navigationOptions = {
//     headerStyle: {
//       backgroundColor: '#be2025'
//     }
//   };
//   render() {
//     return (
//       <RiskScreen />
//     );
//   }
// }

// Stack navigators
const Home = createStackNavigator({
  About: {
    screen: About,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Alive & Free - Omega Boys Club',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: '#fff'
        },
      };
    }
  },
  History: {
    screen: History
  }
},{
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
});
// Home.navigationOptions = {
//   tabBarLabel: "Home",
//   tabBarIcon: ({ focused, tintColor }) => (
//     <Icon 
//       name={Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home'}
//       type="ionicon"
//       color={tintColor}
//     />
//   )
// };

const Info = createStackNavigator({
  Faculty: {
    screen: Faculty,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Our Programs & Events',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: '#fff'
        },
      };
    }
  }
});

const Rules = createStackNavigator({
  Rule: {
    screen: Rule,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Rules For Living - Risk Factors',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: '#fff'
        },
      };
    }
  }
});

const COV = createStackNavigator({
  Command: {
    screen: Command,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Commandments of Violence',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: '#fff'
        },
      };
    }
  }
});

const Coachisms = createStackNavigator({
  Coach: {
    screen: Coach,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Coach Wilbur Jiggetts - Coachisms',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: '#fff'
        },
      };
    }
  }
});


// Icons for Bottom Tab Navigator
class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 20, height: 20, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props}  />;
};

// Navigators (drawer, stack, switch, tab)
const HomeTabNavigator = createBottomTabNavigator({
  Home,
  Info,
  Rules,
  COV,
  Coachisms
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-home${focused ? '' : ''}`;
        // Sometimes we want to add badges to some icons. 
        // You can check the implementation below.
        IconComponent = HomeIconWithBadge; 
      } else if (routeName === 'Info') {
        iconName = `ios-information-circle${focused ? '' : ''}`;
      } else if (routeName === 'Rules') {
        iconName = `ios-key${focused ? '' : ''}`;
      } else if (routeName === 'COV') {
        iconName = `ios-warning${focused ? '' : ''}`;
      } else if (routeName === 'Coachisms') {
        iconName = `ios-megaphone${focused ? '' : ''}`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={24} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#be2025',
    inactiveTintColor: '#000',
    activeBackgroundColor: '#fff',
    inactiveBackgroundColor: '#fff',
  },
});

// Drawer navigation with icon
// const HomeStackNavigator = createStackNavigator({
//   HomeTabNavigator: HomeTabNavigator,
//   Coachisms: CoachScreen,
//   Commandments: CommandScreen,
//   Risks: RiskScreen
// }, {
//   defaultNavigationOptions: ({ navigation }) => {
//     return {
//       headerLeft: <Icon style={{ paddingLeft: 10 }} 
//       onPress={() => navigation.openDrawer()}
//       name="md-menu" size={30} />
//     };
//   }
// });

// const AppDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   Coachisms: {
//     screen: CoachScreen
//   },
//   Commandments: {
//     screen: CommandScreen
//   },
//   Risks: {
//     screen: RiskScreen
//   }
// })

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Home: HomeTabNavigator,
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  introContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  bodyContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    padding: 10,
  },
  bodyText: {
    fontSize: 17,
    color: 'rgba(0,0,0, 1)',
    lineHeight: 24,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 2,
  },
  contentContainer: {
    paddingHorizontal: 2,
    margin: 2,
  },
  highlighted: {
    fontSize: 17,
    color: 'rgba(190,32,37, 1)',
    lineHeight: 24,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  layoutButtonContainer: {
    flex: 1,
    marginTop: 550,
    borderColor: '#000'
  },
  midContainer: {
    marginTop: 1,
    alignItems: 'center',
  },
  quoteText: {
    fontSize: 17,
    color: 'rgba(255,0,0, 1)',
    lineHeight: 24,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 20,
    color: 'rgba(0,0,0, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold'
  },
  wallpaper: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: null,
    padding: 20,
  },
});
