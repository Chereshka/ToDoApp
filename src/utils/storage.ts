import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = false;

export const changeState = async () => {
    const state = await getState();
    await AsyncStorage.setItem('onlyImportant', (!state).toString());

};

// Получение значения
export const getState = async () => {

    const value = await AsyncStorage.getItem('onlyImportant');
    return value === 'true' || initialState; // Преобразование строки обратно в булево значение

}