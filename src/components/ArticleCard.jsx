import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { Text } from 'native-base';
import { Colors, Routes } from '../common';
import { truncateDescription } from '../utils';
import { useNavigation } from '@react-navigation/native';

const ArticleCard = ({ id, imageSource, title, description }) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(Routes.article, { id })}
    >
      <Image source={{ uri: imageSource }} style={styles.image} />
      <View style={styles.articleInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{truncateDescription(description, 100)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-ExtraBold',
  },
  description: {
    color: Colors.gray,
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },
  articleInfo: {
    padding: 20,
  },
});

export default ArticleCard;
