import React from 'react';
import { View, Text, Image, TextComponent, StyleSheet } from 'react-native';
import iFood from '../assets/food.png';

interface ICategoryListItem {
  // children: TextComponent;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default function CategoryListItem({}: ICategoryListItem) {
  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <Text>CategoryListItems</Text>
      <Image
        source={iFood}
        style={{
          width: 50,
          height: 50,
        }}
      />
      {/* {children} */}
    </View>
  );
}
