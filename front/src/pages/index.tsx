import React, { useEffect, useCallback, useRef, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPageContext } from 'next';

import WritePostForm from '../container/WritePostForm';
import PostCard from '../container/PostCard';
import { RootState } from '../reducers';
import { getAllPostsRequest } from '../reducers/post/getAllPosts';

const Home: any = memo(() => {
  const dispatch = useDispatch();
  const { info } = useSelector((state: RootState) => state.user);
  const { posts } = useSelector((state: RootState) => state.post);
  const { hasMorePost } = useSelector((state: RootState) => state.post);
  const countRef = useRef<string[]>([]);

  const onScroll = useCallback(() => {
    if (
      posts.length !== 0 &&
      hasMorePost &&
      window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300
    ) {
      const lastUpdatedAt = posts[posts.length - 1].updatedAt;
      if (!countRef.current.includes(lastUpdatedAt)) {
        dispatch(getAllPostsRequest(lastUpdatedAt));
        countRef.current.push(lastUpdatedAt);
      }
    }
  }, [countRef.current, hasMorePost, posts]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      countRef.current = [];
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePost, posts.length]);

  return (
    <>
      {info && <WritePostForm />}
      {posts.map((v, i) => (
        <PostCard key={`post_${v.id}`} postIndex={i} postData={v} />
      ))}
    </>
  );
});

Home.getInitialProps = async (context: NextPageContext) => {
  const { post } = context.store.getState();
  if (post.posts.length) {
    const lastUpdatedAt = post.posts[post.posts.length - 1].updatedAt;
    context.store.dispatch(getAllPostsRequest(lastUpdatedAt));
  }
  context.store.dispatch(getAllPostsRequest());
};

export default Home;
