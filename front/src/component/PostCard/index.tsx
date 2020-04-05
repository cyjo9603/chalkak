import React, { useState, useCallback } from 'react';
import { Card, Avatar } from 'antd';
import { UserOutlined, HeartFilled, ShareAltOutlined, CommentOutlined, EllipsisOutlined } from '@ant-design/icons';

import { CardWrapper } from './styled';
import PostImages from './PostImages';
import CommentForm from './CommentForm';

import { PostData } from '../../dummy';

const { Meta } = Card;

interface Props {
  postData: PostData;
}

const PostCard = ({ postData }: Props) => {
  const [openCommentForm, setOpenCommentForm] = useState(false);

  const onClickCommentForm = useCallback(() => {
    setOpenCommentForm(!openCommentForm);
  }, [openCommentForm]);

  return (
    <CardWrapper>
      <Card
        cover={postData.images[0] && <PostImages images={postData.images} />}
        actions={[
          <HeartFilled key="heart" />,
          <ShareAltOutlined key="share" />,
          <CommentOutlined key="comment" onClick={onClickCommentForm} />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            {`${postData.user.familyName}${postData.user.firstName}`}
          </>
        }
      >
        <Meta title="post title" />
        {'test'}
      </Card>
      {openCommentForm && <CommentForm comments={postData.comment} />}
    </CardWrapper>
  );
};

export default PostCard;
