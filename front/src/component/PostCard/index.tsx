import React from 'react';
import { Card, Avatar } from 'antd';
import { UserOutlined, HeartFilled, ShareAltOutlined, CommentOutlined, EllipsisOutlined } from '@ant-design/icons';

import { CardWrapper } from './styled';
import PostImages from './PostImages';

import dummy from '../../dummy';

const { Meta } = Card;

const PostCard = () => {
  const post = dummy.post.mainPosts[0];
  return (
    <CardWrapper>
      <Card
        cover={post.images[0] && <PostImages images={post.images} />}
        actions={[
          <HeartFilled key="heart" />,
          <ShareAltOutlined key="share" />,
          <CommentOutlined key="comment" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            {post.user.nickname}
          </>
        }
      >
        {'tag'}
        <Meta title="post title" />
        {'test'}
      </Card>
    </CardWrapper>
  );
};

export default PostCard;
