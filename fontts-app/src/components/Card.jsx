import React from 'react';
import { View, StyleSheet } from 'react-native';
import { C } from '../styles/tokens';

const Card = ({ children, elevated, bordered, style }) => {
  return (
    <View style={[
      ss.cbase,
      elevated && ss.cel,
      bordered && ss.cbdr,
      style,
    ]}>
      {children}
    </View>
  );
};

const ss = StyleSheet.create({
  cbase: {
    backgroundColor: C.card,
    borderRadius:    16,
    padding:         20,
  },
  cel: {
    backgroundColor: C.cardEl,
  },
  cbdr: {
    borderWidth: 1,
    borderColor: C.bdrSub,
  },
});

export default Card;
