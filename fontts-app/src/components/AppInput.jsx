import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { C, F, SZ } from '../styles/tokens';

const AppInput = ({
  placeholder,
  value,
  onChangeText,
  multiline,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={[ss.inp, multiline && ss.inparea]}
      placeholder={placeholder}
      placeholderTextColor={C.wht30}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
      secureTextEntry={secureTextEntry}
    />
  );
};

const ss = StyleSheet.create({
  inp: {
    backgroundColor: C.card,
    borderRadius:     12,
    borderWidth:      1,
    borderColor:      C.bdrSub,
    height:           52,
    paddingHorizontal: 16,
    color:            C.white,
    fontFamily:       F.reg,
    fontSize:         SZ.s14,
    width:            '100%',
  },
  inparea: {
    height:          120,
    paddingVertical: 14,
    textAlignVertical: 'top',
  },
});

export default AppInput;
