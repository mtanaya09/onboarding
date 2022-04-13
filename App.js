import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AppStack = createNativeStackNavigator();

const App = () => {

  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);
  React.useEffect( async () => {

    const appData = await AsyncStorage.getItem('setIsAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('setIsAppFirstLaunched', 'false'); 
    }else {
      setIsAppFirstLaunched(false);
    }

  },[]);
  

  return (
         
    isAppFirstLaunched != null && (
      <NavigationContainer>

          <AppStack.Navigator headerMode = "none">

            {isAppFirstLaunched && (
            <AppStack.Screen 
                name="Onboarding" 
                component={OnboardingScreen} 
                options={{ headerShown: false }}
            />)}
            
              <AppStack.Screen 
                name="Login" 
                component={LoginScreen} 
                options={{ headerShown: false }}/>
                
          </AppStack.Navigator>

    </NavigationContainer>
    )
  );
}


export default App;
