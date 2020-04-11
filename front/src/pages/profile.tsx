import React from 'react';
import { useSelector } from 'react-redux';

import ProfileForm from '../component/ProfileForm';
import PostCard from '../component/PostCard';
import { RootState } from '../reducers';

const Profile = () => {
  const { posts } = useSelector((state: RootState) => state.post);

  return (
    <>
      <ProfileForm />
      {posts.map((v) => (
        <PostCard key={`post_${v.id}`} postData={v} />
      ))}
    </>
  );
};

export default Profile;
