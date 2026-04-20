import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { C, F, SZ } from '../styles/tokens';

const Badge = ({ label, color }) => {
  const bgMap = {
    purple: C.purpA,
    green:  C.grnA,
    red:    C.redA,
    yellow: C.ambA,
  };
  const txtMap = {
    purple: C.purple,
    green:  C.green,
    red:    C.rasp,
    yellow: C.yellow,
  };
  const bdrMap = {
    purple: C.bdrSub,
    green:  'rgba(34,197,94,0.3)',
    red:    'rgba(254,1,73,0.3)',
    yellow: 'rgba(245,158,11,0.3)',
  };

  return (
    <View style={[ss.pill, {
      backgroundColor: bgMap[color] || bgMap.purple,
      borderColor:     bdrMap[color] || bdrMap.purple,
    }]}>
      <Text style={[ss.pilltxt, {
        color: txtMap[color] || txtMap.purple,
      }]}>
        {label}
      </Text>
    </View>
  );
};

const ss = StyleSheet.create({
  pill: {
    borderRadius:      100,
    paddingVertical:   4,
    paddingHorizontal: 12,
    borderWidth:       1,
    alignSelf:         'flex-start',
  },
  pilltxt: {
    fontFamily: F.med,
    fontSize:   SZ.s12,
  },
});

export default Badge;
