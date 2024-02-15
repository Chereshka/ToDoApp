import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'

import { useUnit } from "effector-react";
import { $taskStore, updateTask } from '../store/TaskStore';

import ScreenWrapper from './components/ScreenWrapper';
import { TTask } from '../types/task';
import R from '../utils/R';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackNavigationProp, RootStackParamList } from '../navigation/types';
import { NunitoCheckBox, NunitoText } from '../component/base';
import { ItemSeparatorComponent } from '../component/base';

export const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'Home'>>();

  const tasks = useUnit($taskStore)




  const sortedList = [...tasks].sort((a, b) => {
    if (a.closed === b.closed) {
      return 0;
    }
    if (a.closed) {
      return 1;
    }
    return -1;
  });

  const list = route.params?.onlyImportant ? [...sortedList].filter(item => !!item.important) : sortedList;


  const onTaskPressed = (item: TTask) => { navigation.navigate('Editor', { task: item }) }

  const renderItem = useCallback(
    ({ item }: { item: TTask }) =>
      <TouchableOpacity style={[styles.task_wrapper, item.important && styles.important, item.important && item.closed && styles.closed]} onPress={() => onTaskPressed(item)} activeOpacity={2}>
        <View style={styles.task_info_wrapper}>
          <NunitoText weight='extraBold'>{item.title}</NunitoText>
          <NunitoText style={[!!item.closed && styles.strikeThrough]}>{item.text}</NunitoText>
        </View>
        <NunitoCheckBox value={!!item.closed} onValueChange={() => updateTask({ ...item, closed: !!!item.closed })} />
      </TouchableOpacity>
    , [])

  return (
    <ScreenWrapper>

      <FlatList
        data={list}
        keyExtractor={item => item._id}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        style={{ gap: 10 }}
      />

    </ScreenWrapper>
  )
}


const styles = StyleSheet.create({
  task_wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 2,
    borderRadius: R.style.BORDER_RADIUS.MIDDLE,
    borderColor: R.color.TEXT_DARK
  },
  task_info_wrapper: {
    gap: 6
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
  },
  important: { borderColor: R.color.RED},
  closed: { borderColor: R.color.BG_DARK },
})