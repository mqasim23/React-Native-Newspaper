import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { Colors } from '../common';
import { useFonts } from 'expo-font';

const ArticleDetails = ({ author, title, content, date }) => {
  const [fontsLoaded] = useFonts({
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-BoldItalic': require('../../assets/fonts/Poppins-BoldItalic.ttf'),
  });

  return (
    <ScrollView style={styles.articleInfo}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{content}</Text>

      <View style={styles.authorDetails}>
        <Text style={styles.author}>By {author}</Text>
        <Text style={styles.author}>{date}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-ExtraBold',
  },
  description: {
    color: Colors.black,
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },
  articleInfo: {
    padding: 20,
  },
  author: {
    color: Colors.gray,
    fontSize: 12,
    fontFamily: 'Poppins-BoldItalic',
  },
  authorDetails: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default ArticleDetails;
