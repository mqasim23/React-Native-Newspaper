import { Screen } from '../../layouts';
import { getArticle } from '../../utils';
import { Banner, ArticleDetails } from '../../components';

const ArticleScreen = ({ route }) => {
  const { id } = route.params;
  const article = getArticle(id);

  return (
    <Screen>
      <Banner banner={article?.imageUrl} />
      <ArticleDetails
        author={article?.author}
        content={article?.content}
        title={article?.title}
        date={article?.publishedDate}
      />
    </Screen>
  );
};

export default ArticleScreen;
