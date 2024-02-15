import { Alert } from "react-native";

export const showWarningAlert = (title: string, text: string) => {
    Alert.alert(
        title,
        text,
        [{ text: 'OK' }],
        { cancelable: false }
    );
};

export const showAskAlert = (title: string, text: string, action?: { text: string, onPress: () => void }) => {
    Alert.alert(
        title,
        text,
        [
            { text: 'Нет' },
            action
        ],
        { cancelable: false }
    );
};

