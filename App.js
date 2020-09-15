import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Container, Icon } from 'native-base';

import Camera from './src/screens/camera';
import Chats from './src/screens/chats';
import Status from './src/screens/status';
import Calls from './src/screens/calls';
import AppHeader from './src/components/app-header';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="chats"
        tabBarOptions={{
          activeTintColor: '#FFF',
          indicatorStyle: { backgroundColor: '#FFF' },
          style: { backgroundColor: '#075E54' },
          showIcon: true,
          // showLabel: false,
        }}>
        <Tab.Screen
          name="camera"
          component={Camera}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused, color }) => (
              <Icon name="camera" style={{ color, fontSize: 26 }} />
            ),
          }}
        />
        <Tab.Screen name="chats" component={Chats} />
        <Tab.Screen name="status" component={Status} />
        <Tab.Screen name="calls" component={Calls} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => (
  <Container>
    <AppHeader />
    <TabNavigation />
  </Container>
);

export default App;
