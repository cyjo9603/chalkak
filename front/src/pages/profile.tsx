import React, { useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPageContext } from 'next';

import ProfileForm from '../component/ProfileForm';
import PostCard from '../component/PostCard';
import { RootState } from '../reducers';
import { getUserPostsRequest } from '../reducers/post/getUserPosts';

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state: RootState) => state.user.info);
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
        dispatch(getUserPostsRequest(id, lastUpdatedAt));
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
      <ProfileForm />
      {posts.map((v) => (
        <PostCard key={`post_${v.id}`} postData={v} />
      ))}
    </>
  );
};

Profile.getInitialProps = async (context: NextPageContext) => {
  const { id } = context.store.getState().user.info;
  if (id) {
    context.store.dispatch(getUserPostsRequest(id));
  }
};

export default Profile;
