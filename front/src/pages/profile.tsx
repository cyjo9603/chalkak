import React from 'react';

import ProfileForm from '../component/ProfileForm';
import PostCard from '../component/PostCard';

import dummy from '../dummy';

const Profile = () => {
  const { mainPosts } = dummy.post;
  return (
    <>
      <ProfileForm />
      {mainPosts.map((v) => (
        <PostCard key={`post_${v.id}`} postData={v} />
      ))}
    </>
  );
};

export default Profile;
