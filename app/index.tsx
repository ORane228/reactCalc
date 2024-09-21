import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { CalculationScreen } from './CalculationScreen'
import { HistoryScreen } from './HistoryScreen'


const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
      <Stack.Screen 
            name="Home"
            component={CalculationScreen}
            options={{title: "Welcomde"}}
        />
        <Stack.Screen 
            name="History"
            component={HistoryScreen}
            options={{title: "Welcomde"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App