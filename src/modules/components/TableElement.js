import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import ReactLoading from 'react-loading';
import { ArticleItem } from 'modules/components/ArticleItem';
import { TableInfo } from 'styles/components/TableInfo';
import { color } from 'styles/variable';

export const TableElement = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = firebase.firestore();

    return db.collection('articles').onSnapshot((snapshot) => {
      const articlesData = [];
      snapshot.forEach((doc) => articlesData.push({ ...doc.data(), id: doc.id }));
      setArticles(articlesData);
      setLoading(false);
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
      {loading && <ReactLoading type="bubbles" color={color.colorBrand} />}
      {!loading && (
        <tbody>
          {articles.map((article, index) => (
            <ArticleItem key={index} article={article} />
          ))}
        </tbody>
      )}
    </TableInfo>
  );
};
