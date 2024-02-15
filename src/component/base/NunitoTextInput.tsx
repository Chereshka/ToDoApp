import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import R from '../../utils/R';

import { ICustomTextInputProps } from './types';

import weightStyles from './weightStyles';


export const NunitoTextInput: React.FC<ICustomTextInputProps> = (
  {
    style,
    weight,
    ...rest
  }) => {

  const combinedStyles = weight ? [styles.text, weightStyles[weight], style] : [styles.text, style];


  return (
    <TextInput
      style={combinedStyles}
      {...rest}
    />
  );
};


const styles = StyleSheet.create({
  
  text: {
    textAlignVertical: 'top', 
    paddingHorizontal: 6,
    fontFamily: 'Nunito-Regular',    
    backgroundColor: R.color.TEXT_INPUT_BG,
    borderWidth: 1,    
    borderRadius: R.style.BORDER_RADIUS.MIDDLE,    
    borderColor: R.color.BORDER_DARK,
    fontSize: R.style.FONT_SIZE.MIDDLE,
  },
});


