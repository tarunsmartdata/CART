import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import stackNavigator from './navigator/stackNavigator';

const stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="tab"
          screenOptions={{headerShown: false}}>
          <stack.Screen name="tab" component={stackNavigator} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
