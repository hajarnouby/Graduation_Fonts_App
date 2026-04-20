import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { C } from '../styles/tokens';

const Toggle = ({ value, onToggle, color }) => {
  const trackColor = color || C.purple;
  return (
    <TouchableOpacity
      onPress={onToggle}
      activeOpacity={0.85}
      style={[
        ss.togwrap,
        value
          ? [ss.togon, { backgroundColor: trackColor }]
          : ss.togoff,
      ]}>
      <View style={ss.togcir} />
    </TouchableOpacity>
  );
};

const ss = StyleSheet.create({
  togwrap: {
    width:          51,
    height:         31,
    borderRadius:   100,
    padding:        2,
    justifyContent: 'center',
  },
  togon: {
    alignItems: 'flex-end',
  },
  togoff: {
    backgroundColor: 'rgba(245,245,245,0.15)',
    alignItems:      'flex-start',
  },
  togcir: {
    width:           27,
    height:          27,
    borderRadius:    100,
    backgroundColor: '#FFFFFF',
  },
});

export default Toggle;
