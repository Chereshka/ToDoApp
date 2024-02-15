import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'

import ScreenWrapper from './components/ScreenWrapper'
import R from '../utils/R';

import {
  NunitoText,
  NunitoButton,
  NunitoTextInput
} from '../component/base';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

import { TTask, TTaskNew } from '../types/task';

import { createTask, updateTask, deleteTask as removeTask } from '../store/TaskStore';
import { showAskAlert, showWarningAlert } from '../utils/helperFunctions';
import { NunitoCheckBox } from '../component/base/NunitoCheckBox';

export const EditorScreen = () => {

  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'Editor'>>();

  const [task, setTask] = useState<TTask | TTaskNew>(route.params?.task || R.initial.TASK_OBJECT)

  const setTitle = (title: string) => {
    setTask(prevState => ({ ...prevState, title }));
  };

  const setText = (text: string) => {
    setTask(prevState => ({ ...prevState, text }));
  };


  const setImportant = (important: boolean) => {
    setTask(prevState => ({ ...prevState, important }));
  };

  const checkTask = () =>
    task.text.length >= R.checkProps.TASK_TEXT_MINIMUM
    && task.title.length >= R.checkProps.TASK_TITLE_MINIMUM;



  const saveTask = async () => {


    if (!checkTask()) {
      showWarningAlert(
        'Упс!',
        `Минимальная длина заголовка должна быть не менее ${R.checkProps.TASK_TITLE_MINIMUM} символов, а описание - не менее ${R.checkProps.TASK_TEXT_MINIMUM} символов.`,
      );

      return;
    }

    '_id' in task ?
      await updateTask({ ...task })
      : await createTask({ ...task });

    navigation.goBack();
  }

  const deleteTask = async () => {

    '_id' in task && await removeTask(task._id)
    navigation.goBack();
  }

  const onDeleteTask = async () => {
    showAskAlert(
      task.title,
      "Уверены, что хотите удалить?",
      { text: 'Да', onPress: deleteTask }
    );
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <NunitoText weight='bold'>
          Название:
        </NunitoText>
        <NunitoTextInput
          style={styles.input}
          value={task.title}
          onChangeText={setTitle}
          placeholder='Введите название...'
        />

        <NunitoText weight='bold'>
          Описание:
        </NunitoText>
        <NunitoTextInput
          style={styles.input}
          value={task.text}
          onChangeText={setText}
          placeholder='Введите описание...'
          multiline={true}
          numberOfLines={5}
        />


        <NunitoCheckBox
          text="Важная"
          value={task.important}
          onValueChange={setImportant}
        />
      </View>

      <NunitoButton
        text={'_id' in task ? 'Сохранить' : 'Создать'}
        onPress={saveTask}
      />
      {'_id' in task &&
        <NunitoButton
          text='Удалить'
          onPress={onDeleteTask}
          style={styles.delete_button}
          textStyle={styles.delete_text}
        />}
    </ScreenWrapper>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    gap: 10
  },
  input: {
    width: '100%',
    padding: R.style.TEXT_INPUT.PADDING,
    backgroundColor: R.color.TEXT_INPUT_BG,
    borderWidth: 1,
    borderColor: R.color.BORDER_DARK,
    borderRadius: R.style.BORDER_RADIUS.MIDDLE,
  },
  delete_button: {
    marginTop: 10,
    backgroundColor: R.color.BG_DARK
  },
  delete_text: {
    color: R.color.RED
  }

})