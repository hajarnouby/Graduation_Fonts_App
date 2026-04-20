import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { C, F, SZ } from '../styles/tokens';

const FilterPill = ({ label, active, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={[ss.pill, active ? ss.pillact : ss.pillidle]}>
      <Text style={[ss.pilltxt,
        active ? ss.pilltxt_act : ss.pilltxt_idle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const ss = StyleSheet.create({
  pill: {
    borderRadius:      100,
    height:            32,
    paddingHorizontal: 16,
    alignItems:        'center',
    justifyContent:    'center',
  },
  pillact: {
    backgroundColor: C.purple,
  },
  pillidle: {
    backgroundColor: C.card,
    borderWidth:     1,
    borderColor:     C.bdrSub,
  },
  pilltxt: {
    fontFamily: F.semi,
    fontSize:   SZ.s12,
  },
  pilltxt_act:  { color: C.white },
  pilltxt_idle: { color: C.wht50 },
});

export default FilterPill;
