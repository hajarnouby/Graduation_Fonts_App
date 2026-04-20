import React from 'react';
import { View, StyleSheet } from 'react-native';
import { C } from '../styles/tokens';

const Divider = () => <View style={ss.seplin} />;

const ss = StyleSheet.create({
  seplin: {
    height:          1,
    backgroundColor: C.divider,
    width:           '100%',
  },
});

export default Divider;
