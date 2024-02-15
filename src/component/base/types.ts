import { ReactNode } from "react";
import { StyleProp, TextInputProps, TextProps, TextStyle, ViewStyle } from "react-native"
import weightStyles from "./weightStyles";




export interface IButtonProps {
    style?: ViewStyle;
    textStyle?: TextStyle;
    textWeight?: keyof typeof weightStyles;
    text?: string | number;
    disabled?: boolean;
    onPress?: () => void;
};


export interface ICustomTextProps extends TextProps {
    children: ReactNode;
    weight?: keyof typeof weightStyles;
}


export interface ICustomTextInputProps extends TextInputProps {
    weight?: keyof typeof weightStyles;
}



export interface ICheckBoxProps {
    value: boolean;
    onValueChange: (newValue: boolean) => void;
    text?: string;
    textStyle?: StyleProp<TextStyle>;
  }
