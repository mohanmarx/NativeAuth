import React from 'react';
import { StatusBar, Button } from 'react-native'
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideBar from '../components'
import { Login, Home, Blog, About } from '../screens'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

function Navigation() {
    return (
        <React.Fragment>
            <StatusBar backgroundColor="rgba(151, 235, 244, .7)" barStyle="dark-content" />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        cardStyle: { backgroundColor: '#fff' },
                        headerShown: false
                    }}>
                    <Stack.Screen name="Login" component={Login}
                        options={{
                            headerShown: true,
                            headerTitleAlign: "center"
                        }}
                    />
                    <Stack.Screen name="Main" component={DrawerNav} />
                </Stack.Navigator>
            </NavigationContainer>
        </React.Fragment>
    )
}

export default Navigation;


export function DrawerNav() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Blog" component={Blog} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    )
}
