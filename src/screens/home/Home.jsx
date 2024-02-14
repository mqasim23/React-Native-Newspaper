import { Text, FlatList } from 'native-base';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import { Screen } from '../../layouts';
import { ArticleCard } from '../../components';
import { ArticlesData } from '../../common';



const Home = () => {

  const [fontsLoaded] = useFonts({
    'Poppins-ExtraBold': require('../../../assets/fonts/Poppins-ExtraBold.ttf'),
  });

  return (
    <Screen>
      <Text style={style.title}>Articles</Text>
      <FlatList
        numColumns={1}
        data={ArticlesData}
        renderItem={({ item }) => (
          <ArticleCard
            id={item?.id}
            imageSource={item?.imageUrl}
            title={item?.title}
            description={item?.content}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-ExtraBold',
    paddingLeft: 10,
    paddingTop: 14,
  },
});

export default Home;
