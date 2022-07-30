import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import SearchScreen from './screens/SearchScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'black'} />
      <Stack.Navigator
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name='Search'
          component={SearchScreen}
          options={{
            gestureEnabled: true,
            title: 'Business Search',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
