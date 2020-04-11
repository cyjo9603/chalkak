import React from 'react';
import { useSelector } from 'react-redux';

import WritePostForm from '../component/WritePostForm';
import PostCard from '../component/PostCard';
import { RootState } from '../reducers';

const Home = () => {
  const { posts } = useSelector((state: RootState) => state.post);

  return (
    <>
      <WritePostForm />
      {posts.map((v) => (
        <PostCard key={`post_${v.id}`} postData={v} />
      ))}
    </>
  );
};

export default Home;
