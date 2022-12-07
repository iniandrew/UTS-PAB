import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, MainScreen, MenuDetailScreen } from './screens';
import { MainContainer } from "./components/containers/MainContainer";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const bgColor = '#059669';

function MenuStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} options={
        {
          title: 'Menu',
              headerShown: false,
        }
      } />
      <Stack.Screen name="MenuDetailScreen" component={MenuDetailScreen} options={
        {
          title: 'Detail',
              headerStyle: {
                backgroundColor: bgColor,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        }
      }/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <MainContainer>
      <NavigationContainer>
        <Tab.Navigator screenOptions={ ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={
            { 
              title: 'HOME',
              headerStyle: {
                backgroundColor: bgColor,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }
          } />
          <Tab.Screen name="Menu" component={MenuStack} options={
            { 
              title: 'SIKAT',
              headerStyle: {
                backgroundColor: bgColor,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }
          } />
        </Tab.Navigator>
      </NavigationContainer>
    </MainContainer>
  );
}