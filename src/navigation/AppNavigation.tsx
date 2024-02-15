
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions
} from '@react-navigation/native-stack';

import { HomeScreen, EditorScreen } from '../screen';


import { NunitoButton } from '../component/base';
import R from '../utils/R';
import HomeScreenHeaderLeft from '../screen/components/HomeScreenHeaderLeft';

const Stack = createNativeStackNavigator();

const NAVIGATION_OPTIONS: NativeStackNavigationOptions = {
    animation: 'slide_from_right',
    headerShadowVisible: false,
};

const BASE_SCREEN_OPTIONS =
{
    title: null,
    navigationBarColor: R.color.BG_DARK,
    headerStyle: {
        backgroundColor: R.color.BG_DARK
    },
};

const HomeOptions = ({ navigation }) => ({
    ...BASE_SCREEN_OPTIONS,
    headerRight: () => (
        <NunitoButton
            onPress={() => navigation.navigate('Editor')}
            text="Новая"
        />
    ),
    headerLeft: HomeScreenHeaderLeft
});

const AppNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ ...NAVIGATION_OPTIONS }}>
                <Stack.Screen name='Home' component={HomeScreen} options={HomeOptions} />
                <Stack.Screen name='Editor' component={EditorScreen} options={BASE_SCREEN_OPTIONS} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default AppNavigation;