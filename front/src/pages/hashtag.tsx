import React, { useRef, useEffect, useCallback, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPageContext } from 'next';

import PostCard from '../component/PostCard';
import { RootState } from '../reducers';
import { getHashtagPostsRequest } from '../reducers/post/getHashtagPosts';

interface Props {
  tag: string;
}

const Hashtag = ({ tag }: Props) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.post);
  const { hasMorePost } = useSelector((state: RootState) => state.post);
  const countRef = useRef<string[]>([]);

  const onScroll = useCallback(() => {
    if (
      hasMorePost &&
      window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300
    ) {
      const lastUpdatedAt = posts[posts.length - 1].updatedAt;
      if (!countRef.current.includes(lastUpdatedAt)) {
        dispatch(getHashtagPostsRequest(tag, lastUpdatedAt));
        countRef.current.push(lastUpdatedAt);
      }
    }
  }, [countRef.current, hasMorePost, posts]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePost, posts.length]);

  return (
    <>
      {posts.map((v, i) => (
        <PostCard key={`post_${v.id}`} postIndex={i} postData={v} />
      ))}
    </>
  );
};

Hashtag.getInitialProps = async (context: NextPageContext) => {
  if (context.query.tag && typeof context.query.tag === 'string') {
    const { tag } = context.query;
    context.store.dispatch(getHashtagPostsRequest(tag));
    return { tag };
  }
};

export default Hashtag;