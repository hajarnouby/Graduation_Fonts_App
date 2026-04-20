import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { C, F, SZ, SP } from '../styles/tokens';

const TopBar = ({ title, onLeft, onRight, rightIcon }) => {
  return (
    <View style={ss.bartop}>
      <TouchableOpacity
        onPress={onLeft}
        activeOpacity={0.75}
        style={ss.tbLeft}>
        <ChevronLeft size={24} color={C.white} strokeWidth={2} />
      </TouchableOpacity>
      <Text style={ss.tbtit}>{title}</Text>
      <View style={ss.tbRight}>
        {rightIcon || null}
      </View>
    </View>
  );
};

const ss = StyleSheet.create({
  bartop: {
    height:            SP.topBar,
    backgroundColor:   C.navy,
    flexDirection:     'row',
    alignItems:        'center',
    paddingHorizontal: 16,
  },
  tbLeft: {
    width: 40,
  },
  tbtit: {
    flex:       1,
    textAlign:  'center',
    fontFamily: F.semi,
    fontSize:   SZ.s18,
    color:      C.white,
  },
  tbRight: {
    width:      40,
    alignItems: 'flex-end',
  },
});

export default TopBar;
