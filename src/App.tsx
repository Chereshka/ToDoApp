
import React, { useEffect } from 'react';

import { selectTasks } from './store/TaskStore';

import AppNavigation from './navigation/AppNavigation';
import { BackHandler } from 'react-native';



const App = () => {

    useEffect(() => {
        selectTasks()

        BackHandler.addEventListener('hardwareBackPress', () => true);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', () => true);
        };
    }, []);


    return (
        <AppNavigation />
    );
};


export default App;