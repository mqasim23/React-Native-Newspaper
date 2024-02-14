import { ArticlesData } from '../common';

export const truncateDescription = (text, maxLength) => {
  if (text?.length <= maxLength) {
    return text;
  }
  const trimmedText = text.substr(0, text.lastIndexOf(' ', maxLength));
  return trimmedText + ' ..';
};

export const getArticle = (id) => {
  const article = ArticlesData.find((article) => article?.id == id);
  return article;
};
