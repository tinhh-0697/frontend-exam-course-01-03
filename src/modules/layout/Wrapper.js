import React from 'react';
import Header from '../common/Header';
import { Sidebar } from '../common/Sidebar';
import { Wrap, Main } from '../../assets/styles/layout/wrapper';

const Wrapper = (props) => {
  const { children } = props;
  return (
    <Wrap>
      <Sidebar />
      <Main>
        <Header />
        {children}
      </Main>
    </Wrap>
  );
};

export default Wrapper;
