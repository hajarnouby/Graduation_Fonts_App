import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { C, F, SZ } from '../styles/tokens';

const AppButton = ({
  label,
  variant = 'fill',
  onPress,
  fullWidth = true,
  size = 'default'
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={[
        ss.base,
        variant === 'fill' ? ss.btnfill : ss.btnout,
        fullWidth && ss.btnfw,
        size === 'sm' && ss.btnsm,
      ]}>
      <Text style={[
        ss.btntxt,
        size === 'sm' && ss.btntxtsm,
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const ss = StyleSheet.create({
  base: {
    borderRadius:   100,
    height:         52,
    alignItems:     'center',
    justifyContent: 'center',
  },
  btnfill: {
    backgroundColor: C.purple,
  },
  btnout: {
    borderWidth:     1,
    borderColor:     C.wht20,
    backgroundColor: 'transparent',
  },
  btnfw: {
    width: '100%',
  },
  btnsm: {
    height:            36,
    paddingHorizontal: 16,
    width:             'auto',
  },
  btntxt: {
    fontFamily: F.semi,
    fontSize:   SZ.s14,
    color:      C.white,
  },
  btntxtsm: {
    fontSize: SZ.s12,
  },
});

export default AppButton;
