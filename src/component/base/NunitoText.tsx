import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { ICustomTextProps } from './types';

import weightStyles from './weightStyles';


export const NunitoText: React.FC<ICustomTextProps> = ({ style, children, weight, ...rest }) => {

  const combinedStyles = weight ? [styles.text, weightStyles[weight], style] : [styles.text, style];

  return (
    <Text style={combinedStyles} {...rest}>
      {children}
    </Text>
  );
};


const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Regular',    
  },
});
