import React from 'react';

import WritePostForm from '../component/WritePostForm';
import PostCard from '../component/PostCard';

import dummy from '../dummy';

const Home = () => {
  const { mainPosts } = dummy.post;

  return (
    <>
      <WritePostForm />
      {mainPosts.map((v) => (
        <PostCard key={`post_${v.id}`} postData={v} />
      ))}
    </>
  );
};

export default Home;
