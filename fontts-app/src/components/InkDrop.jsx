import React from 'react';
import { View, StyleSheet } from 'react-native';
import { C } from '../styles/tokens';

const InkDrop = ({ size = 120, style }) => (
  <View style={[ss.ink,
    { width: size, height: size * 1.2 },
    style,
  ]} />
);

const ss = StyleSheet.create({
  ink: {
    position:        'absolute',
    borderRadius:    999,
    backgroundColor: C.purple,
    opacity:         0.06,
    transform:       [{ scaleX: 0.75 }],
    pointerEvents:   'none',
  },
});

export default InkDrop;
