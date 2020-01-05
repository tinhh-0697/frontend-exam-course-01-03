import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import firebase from '../../firebase';
import { ArticleItem } from './ArticleItem';

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
    <Table>
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
    </Table>
  );
};
