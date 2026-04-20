import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { C, F, SZ, SP } from '../../styles/tokens';

const Home = ({ navigation }) => {
  return (
    <View style={ss.wrapscr}>
      <ScrollView
        style={ss.scrl}
        contentContainerStyle={ss.scrlcon}
        showsVerticalScrollIndicator={false}>
        <Text style={ss.tit}>Home</Text>
      </ScrollView>
    </View>
  );
};

const ss = StyleSheet.create({
  wrapscr: {
    flex:            1,
    backgroundColor: C.lnavy,
  },
  scrl: {
    flex: 1,
  },
  scrlcon: {
    paddingHorizontal: SP.page,
    paddingBottom:     40,
    gap:               SP.sec,
  },
  tit: {
    fontFamily: F.semi,
    fontSize:   SZ.s28,
    color:      C.white,
  },
});

export default Home;
