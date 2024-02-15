import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { ICheckBoxProps } from './types';

import CheckBox from '@react-native-community/checkbox';

import { NunitoText } from './NunitoText';
import R from '../../utils/R';


export const NunitoCheckBox: React.FC<ICheckBoxProps> = ({ value, onValueChange, text, textStyle }) => {

  const onChange = () => onValueChange(!value)

  return (
    <TouchableOpacity style={styles.container} onPress={onChange} activeOpacity={2}>
      <CheckBox
        value={value}
        onValueChange={onValueChange}
        tintColors={{ true: R.color.TEXT_DARK, false: R.color.TEXT_DARK }}
        onFillColor={R.color.BUTTON_YELLOW}

      />
      <NunitoText style={textStyle} weight='bold'>
        {text}
      </NunitoText>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
