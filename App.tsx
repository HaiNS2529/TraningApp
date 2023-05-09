/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomePage from './page/HomePage';
import Login from './page/Login';
import UserProfile from './page/UserProfile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export const routes = [
  {id: 1, name: 'HomePage', page: HomePage},
  {id: 2, name: 'Login', page: Login},
  {id: 3, name: 'UserProfile', page: UserProfile},
];

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {routes.map(route => {
            return (
              <Stack.Screen
                name={route.name}
                key={route.id}
                component={route.page}
                options={{
                  headerStyle: {
                    backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                  },
                }}></Stack.Screen>
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
