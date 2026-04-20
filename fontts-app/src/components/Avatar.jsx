import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { C } from '../styles/tokens';

const Avatar = ({ size = 'md', ring, ringColor, source }) => {
  const sizeMap = { lg: 72, md: 48, sm: 36, xs: 28 };
  const d = sizeMap[size];

  return (
    <View style={[
      ss.avwrap,
      ring && {
        borderWidth:  2,
        borderColor:  ringColor || C.purple,
        borderRadius: 999,
        padding:      2,
      },
    ]}>
      <Image
        source={source}
        style={[ss.avimg, { width: d, height: d }]}
      />
    </View>
  );
};

const ss = StyleSheet.create({
  avwrap: {
    alignSelf: 'flex-start',
  },
  avimg: {
    borderRadius:    999,
    backgroundColor: C.purpA,
  },
});

export default Avatar;
