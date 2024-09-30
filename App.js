import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/HomeScreen';
import NewsScreen from './src/NewsScreen';
import ProfileScreen from './src/ProfileScreen';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

const NewsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="NewsScreen" 
        component={NewsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ProfileScreen" 
        component={ProfileScreen} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Inicio" 
          component={HomeStack} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home" type="material" color={color} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Noticias" 
          component={NewsStack} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="article" type="material" color={color} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Perfil" 
          component={ProfileStack} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="person" type="material" color={color} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
