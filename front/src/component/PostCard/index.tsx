import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Avatar } from 'antd';
import Link from 'next/link';
import { UserOutlined, HeartFilled, ShareAltOutlined, CommentOutlined, EllipsisOutlined } from '@ant-design/icons';

import { CardWrapper } from './styled';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import post, { PostInfo } from '../../reducers/post';
import PostCardContent from './PostCardContent';
import { RootState } from '../../reducers';
import { likePostRequest } from '../../reducers/post/likePost';

interface Props {
  postData: PostInfo;
  postIndex: number;
}

const PostCard = ({ postData, postIndex }: Props) => {
  const dispatch = useDispatch();
  const { info } = useSelector((state: RootState) => state.user);
  const [openCommentForm, setOpenCommentForm] = useState(false);
  const liked = info && postData.Likers && postData.Likers.find((v) => v.id === info.id);
  const heartStyle = liked && { color: 'red' };

  const onClickCommentForm = useCallback(() => {
    setOpenCommentForm(!openCommentForm);
  }, [openCommentForm]);

  const onClickLike = useCallback(() => {
    if (liked) {
    } else {
      dispatch(likePostRequest(postData.id, postIndex));
    }
  }, [liked, postData.id]);

  return (
    <CardWrapper>
      <Card
        cover={postData.Images[0] && <PostImages images={postData.Images} />}
        actions={[
          <HeartFilled key="heart" onClick={onClickLike} style={heartStyle} />,
          <ShareAltOutlined key="share" />,
          <CommentOutlined key="comment" onClick={onClickCommentForm} />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        title={
          <>
            <Link href={`/user/${postData.User.id}`}>
              <a>
                {postData.User.profilePhoto ? (
                  <Avatar src={`http://localhost:3065/${postData.User.profilePhoto}`} />
                ) : (
                  <Avatar icon={<UserOutlined />} />
                )}
                {`${postData.User.familyName}${postData.User.firstName}`}
              </a>
            </Link>
          </>
        }
      >
        <PostCardContent postContent={postData.content} />
      </Card>
      {openCommentForm && <CommentForm comments={postData.comments} />}
    </CardWrapper>
  );
};

export default PostCard;
