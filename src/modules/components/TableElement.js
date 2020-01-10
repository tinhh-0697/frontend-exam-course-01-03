import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import { ArticleItem } from './ArticleItem';
import { TableInfo } from '../../assets/styles/components/TableInfo';

export const TableElement = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    return db.collection('articles').onSnapshot((snapshot) => {
      const articlesData = [];
      snapshot.forEach((doc) => articlesData.push({ ...doc.data(), id: doc.id }));
      setArticles(articlesData);
    });
  }, []);

  return (
    <TableInfo responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Views</th>
          <th>Status</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article, index) => (
          <ArticleItem key={index} article={article} />
        ))}
      </tbody>
    </TableInfo>
  );
};
