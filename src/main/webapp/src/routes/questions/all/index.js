import React from 'react';
import api from '../../../api';
import QuestionList from '../../../components/QuestionList';
import Container from '../../../components/Container';

export default {

  path: '/',

  async action() {
    const res = await api({
      method: 'GET',
      path: '/api/questions',
    });

    const content = res.entity._embedded;
    if (!content) return undefined;

    return (
      <Container title="Questions">
        <QuestionList {...content} />
      </Container>
    );
  },
};
