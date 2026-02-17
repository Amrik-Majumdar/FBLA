import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FBLA_COLORS } from './src/theme/theme';

import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
              <Stack.Screen 
                name="Welcome" 
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
