import React from 'react';
import { NextPageContext } from 'next';
import { useSelector } from 'react-redux';

import { getPostRequest } from '../reducers/post/getPost';
import PostCard from '../component/PostCard';
import { RootState } from '../reducers';

const Post = () => {
  const { post } = useSelector((state: RootState) => state.post);

  return <PostCard postData={post} />;
};

Post.getInitialProps = async (context: NextPageContext) => {
  if (context.query.id) {
    const id = parseInt(context.query.id as string, 10);
    context.store.dispatch(getPostRequest(id));
  }
};

export default Post;
