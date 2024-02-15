import { Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback, ViewProps } from 'react-native'
import React, { ReactNode } from 'react'
import R from '../../utils/R'

interface IScreenWrapperProps extends ViewProps {
    children: ReactNode;

}

const ScreenWrapper: React.FC<IScreenWrapperProps> = ({ children }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default ScreenWrapper

const styles = StyleSheet.create({
    container: {
        backgroundColor: R.color.BG_DARK,
        flex: 1,
        padding: 10
    }
})