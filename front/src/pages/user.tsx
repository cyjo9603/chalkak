import React, { useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextPageContext } from 'next';

import UserInfo from '../component/UserInfo';
import FriendRequestForm from '../component/FriendRequestForm';
import { GetOtherUserInfoRequest } from '../reducers/user/getOtherUserInfo';
import { RootState } from '../reducers';
import PostCard from '../component/PostCard';
import { getUserPostsRequest } from '../reducers/post/getUserPosts';

const User = () => {
  const dispatch = useDispatch();
  const { info } = useSelector((state: RootState) => state.user);
  const { id } = useSelector((state: RootState) => state.user.otherUserInfo);
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
        dispatch(getUserPostsRequest(id, lastUpdatedAt));
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
      {info && info.id !== id && <FriendRequestForm id={id} />}
      <UserInfo />
      {posts.map((v, i) => (
        <PostCard key={`post_${v.id}`} postIndex={i} postData={v} />
      ))}
    </>
  );
};

User.getInitialProps = async (context: NextPageContext) => {
  if (context.query.id) {
    const id = parseInt(context.query.id as string, 10);
    context.store.dispatch(GetOtherUserInfoRequest(id));
    context.store.dispatch(getUserPostsRequest(id));
  }
};

export default User;
