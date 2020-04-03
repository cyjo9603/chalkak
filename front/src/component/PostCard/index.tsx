import React from 'react';
import { Card, Avatar } from 'antd';
import { UserOutlined, HeartFilled, ShareAltOutlined, CommentOutlined, EllipsisOutlined } from '@ant-design/icons';

import { CardWrapper } from './styled';
import PostImages from './PostImages';

import { PostData } from '../../dummy';

const { Meta } = Card;

interface Props {
  postData: PostData;
}

const PostCard = ({ postData }: Props) => {
  return (
    <CardWrapper>
      <Card
        cover={postData.images[0] && <PostImages images={postData.images} />}
        actions={[
          <HeartFilled key="heart" />,
          <ShareAltOutlined key="share" />,
          <CommentOutlined key="comment" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            {postData.user.nickname}
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
