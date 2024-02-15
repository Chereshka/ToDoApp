import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

import { NunitoText } from "./NunitoText";

import { IButtonProps } from "./types";
import R from "../../utils/R";



export const NunitoButton: React.FC<IButtonProps> = ({ disabled, style, text, textStyle, textWeight = 'extraBold', onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, { opacity: disabled ? 0.7 : 1 }, style]} disabled={disabled} activeOpacity={R.style.BUTTON_OPACITY} onPress={onPress}>
      <NunitoText style={[styles.text, textStyle]} weight={textWeight}>
        {text}
      </NunitoText>      
    </TouchableOpacity>

  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 15,
    paddingVertical: R.style.PADDING.MIDDLE,
    backgroundColor: R.color.BUTTON_YELLOW,
    borderRadius: R.style.BORDER_RADIUS.MIDDLE,
  },
  text: {
    color: R.color.TEXT_DARK,
    fontSize: R.style.FONT_SIZE.MIDDLE,
    letterSpacing: 2,
  }
});