import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { changeState, getState } from '../../utils/storage'
import { NunitoCheckBox } from '../../component/base'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProp } from '../../navigation/types'

const HomeScreenHeaderLeft = () => {

    const navigation = useNavigation<RootStackNavigationProp>();

    const [checked, setChecked] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            const checkedState = (await getState());
            setChecked(checkedState);

            checkedState && navigation.setParams({ onlyImportant: checkedState });
        }
        fetchData()
    }, [])

    const onValueChange = async () => {
        await changeState();
        navigation.setParams({ onlyImportant: !checked });
        setChecked(!checked)

    }

    return (
        <NunitoCheckBox
            text={`Только\nважные`}
            textStyle={styles.text}
            value={checked}
            onValueChange={onValueChange}
        />
    )
}

export default HomeScreenHeaderLeft

const styles = StyleSheet.create({
    text: { lineHeight: 17 }
})