import { Image, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Icons, Colors, Routes } from '../common';

const Banner = ({ banner }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.bannerContainer}>
      <Icons.Entypo
        name='chevron-thin-left'
        size={20}
        style={styles.backButton}
        color={Colors.white}
        onPress={() => {
          navigation.navigate(Routes.home);
        }}
      />
      <Image source={{ uri: banner }} style={styles.banner} />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
  },
  bannerContainer: {
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1000,
    fontWeight: 'bold',
  },
});

export default Banner;
