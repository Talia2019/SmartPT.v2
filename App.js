import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './pages/MainScreen'; // default 로 export 한경우 {} 사용 안해도된다.
import CalendarScreen from './pages/CalendarScreen';
import StatisticScreen from './pages/StatisticScreen';

const Tab = createBottomTabNavigator();

function Tabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Statistic" component={StatisticScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tabs></Tabs>
    </NavigationContainer>
  );
}