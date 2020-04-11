import React, { useState, useCallback } from 'react';
import { Card, Avatar } from 'antd';
import { UserOutlined, HeartFilled, ShareAltOutlined, CommentOutlined, EllipsisOutlined } from '@ant-design/icons';

import { CardWrapper } from './styled';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import { PostInfo } from '../../reducers/post';

const { Meta } = Card;

interface Props {
  postData: PostInfo;
}

const PostCard = ({ postData }: Props) => {
  const [openCommentForm, setOpenCommentForm] = useState(false);

  const onClickCommentForm = useCallback(() => {
    setOpenCommentForm(!openCommentForm);
  }, [openCommentForm]);

  return (
    <CardWrapper>
      <Card
        cover={postData.Images[0] && <PostImages images={postData.Images} />}
        actions={[
          <HeartFilled key="heart" />,
          <ShareAltOutlined key="share" />,
          <CommentOutlined key="comment" onClick={onClickCommentForm} />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            {`${postData.User.familyName}${postData.User.firstName}`}
          </>
        }
      >
        <Meta title="post title" />
        {'test'}
      </Card>
      {openCommentForm && <CommentForm comments={postData.comments} />}
    </CardWrapper>
  );
};

export default PostCard;
