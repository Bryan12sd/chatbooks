import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import Svg from '../../Libs/Svg';
import * as Colors from '../../Styles/Colors';
import Audiostories from '../../Views/AudioStoriesView';
import Game from '../../Views/GameView';
import Home from '../../Views/HomeView';
import Html from '../../Views/HtmlView';
import PlayStory from '../../Views/PlayStoryView';
import ReadStory from '../../Views/ReadStoryView';
import Stories from '../../Views/StoriesView';
import SubHome from '../../Views/SubHomeView';
import Survey from '../../Views/SurveyView';
import Us from '../../Views/UsView';
import Maze from '../../Views/MazeGame';
import Puzzle from '../../Views/PuzzleGameView';
import Paired from '../../Views/PairedGameView';
import Soup from '../../Views/SoupOfLettersView';
import Interactive from '../../Views/InteractiveGameView';
import CameraView from '../../Views/CameraView';
import CameraComponent from '../../Components/CameraComponent';
import Photo from '../../Views/PhotoView';
import ViewDatabase from '../../Views/databaseView'
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const AudioStack = createStackNavigator();
const GameStack = createStackNavigator();
const UsStack = createStackNavigator();
const {width, height} = Dimensions.get('window');
function HomeStackScreen() {
  return (
    
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Survey"
        component={Survey}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="SubHome"
        component={SubHome}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Stories"
        component={Stories}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="ReadStory"
        component={ReadStory}
      />
      
      <HomeStack.Screen
        options={{headerShown: false}}
        name="CameraView"
        component={CameraView}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="CameraComponent"
        component={CameraComponent}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Photo"
        component={Photo}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="ViewDatabase"
        component={ViewDatabase}
      />
    </HomeStack.Navigator>
  );
}
function AudioStackScreen() {
  return (
    <AudioStack.Navigator>
      <AudioStack.Screen
        options={{headerShown: false}}
        name="Audiostories"
        component={Audiostories}
      />
      <AudioStack.Screen
        options={{headerShown: false}}
        name="PlayStory"
        component={PlayStory}
      />
    </AudioStack.Navigator>
  );
}
function GameStackScreen() {
  return (
    <GameStack.Navigator>
      <GameStack.Screen
        options={{headerShown: false}}
        name="Game"
        component={Game}
      />
      <GameStack.Screen
        options={{headerShown: false}}
        name="Maze"
        component={Maze}
      />
      <GameStack.Screen
        options={{headerShown: false}}
        name="Puzzle"
        component={Puzzle}
      />
      <GameStack.Screen
        options={{headerShown: false}}
        name="Paired"
        component={Paired}
      />
      <GameStack.Screen
        options={{headerShown: false}}
        name="Soup"
        component={Soup}
      />
      <GameStack.Screen
        options={{headerShown: false}}
        name="Interactive"
        component={Interactive}
      />
    </GameStack.Navigator>
  );
}
function UsStackScreen() {
  return (
    <UsStack.Navigator>
      <UsStack.Screen options={{headerShown: false}} name="Us" component={Us} />
      <UsStack.Screen
        options={{headerShown: false}}
        name="Html"
        component={Html}
      />
    </UsStack.Navigator>
  );
}
class MainStackNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
    };
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              height: height * 0.11,
              backgroundColor: Colors.blue2,
            },
            tabBarItemStyle: {
              borderTopWidth: width * 0.001,
              borderRightWidth: width * 0.001,
              borderColor: Colors.white1,
              tabBarActiveTintColor: Colors.white1,
              tabBarInactiveTintColor: Colors.white1,
            },
          }}>
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarLabel: 'Cuentos',
              tabBarLabelStyle: {
                fontFamily: 'Telefonica-Bold',
                fontSize: width * 0.03,
              },
              tabBarActiveBackgroundColor: Colors.violet1,
              tabBarActiveTintColor: Colors.white1,
              tabBarInactiveTintColor: Colors.white1,
              tabBarIcon: () => (
                <Svg
                  name="icon_open_book"
                  width={width * 0.08}
                  height={height * 0.08}
                />
              ),
            }}
            name="Homes"
            component={HomeStackScreen}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarLabel: 'Audio Cuentos',
              tabBarLabelStyle: {
                fontFamily: 'Telefonica-Bold',
                fontSize: width * 0.03,
              },
              tabBarActiveBackgroundColor: Colors.violet1,
              tabBarActiveTintColor: Colors.white1,
              tabBarInactiveTintColor: Colors.white1,
              tabBarIcon: () => (
                <Svg
                  name="icon_speaker"
                  width={width * 0.08}
                  height={height * 0.08}
                />
              ),
            }}
            name="Audio"
            component={AudioStackScreen}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarLabel: 'Juegos',
              tabBarLabelStyle: {
                fontFamily: 'Telefonica-Bold',
                fontSize: width * 0.03,
              },
              tabBarActiveBackgroundColor: Colors.violet1,
              tabBarActiveTintColor: Colors.white1,
              tabBarInactiveTintColor: Colors.white1,
              tabBarIcon: () => (
                <Svg
                  name="icon_console"
                  width={width * 0.08}
                  height={height * 0.08}
                />
              ),
            }}
            name="Games"
            component={GameStackScreen}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarLabel: 'Nosotros',
              tabBarLabelStyle: {
                fontFamily: 'Telefonica-Bold',
                fontSize: width * 0.03,
              },
              tabBarActiveBackgroundColor: Colors.violet1,
              tabBarActiveTintColor: Colors.white1,
              tabBarInactiveTintColor: Colors.white1,
              tabBarIcon: () => (
                <Svg
                  name="icon_logo"
                  width={width * 0.08}
                  height={height * 0.08}
                />
              ),
            }}
            name="Use"
            component={UsStackScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
export default MainStackNavigator;
