import React, { useState, useCallback, useMemo, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Avatar } from 'antd';
import Link from 'next/link';
import {
  UserOutlined,
  HeartFilled,
  ShareAltOutlined,
  CommentOutlined,
  AlertOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import { CardWrapper } from './styled';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import { PostInfo } from '../../reducers/post';
import PostCardContent from './PostCardContent';
import { RootState } from '../../reducers';
import { likePostRequest } from '../../reducers/post/likePost';
import { unLikePostRequest } from '../../reducers/post/unLikePost';
import { getCommentsRequest } from '../../reducers/post/getComments';
import { sharePostRequest } from '../../reducers/post/sharePost';
import { removePostRequest } from '../../reducers/post/removePost';

interface Props {
  postData: PostInfo;
  postIndex?: number;
}

const PostCard = memo(({ postData, postIndex }: Props) => {
  const dispatch = useDispatch();
  const { info } = useSelector((state: RootState) => state.user);
  const [openCommentForm, setOpenCommentForm] = useState(false);
  const liked = useMemo(() => info && postData.Likers && postData.Likers.find((v) => v.id === info.id), [
    info && info.id,
    postData && postData.Likers,
  ]);
  const heartStyle = useMemo(() => liked && { color: 'red' }, [liked]);

  const onClickCommentForm = useCallback(() => {
    if (!openCommentForm) {
      dispatch(getCommentsRequest(postData.id, postIndex));
    }
    setOpenCommentForm(!openCommentForm);
  }, [openCommentForm]);

  const onClickLike = useCallback(() => {
    if (liked && (postIndex || postIndex === 0)) {
      dispatch(unLikePostRequest(postData.id, postIndex));
    } else {
      dispatch(likePostRequest(postData.id, postIndex));
    }
  }, [liked, postData.id]);

  const onClickShare = useCallback(() => {
    dispatch(sharePostRequest(postData.id));
  }, []);

  const onClickRemove = useCallback(() => {
    dispatch(removePostRequest(postData.id, postIndex));
  }, [postData.id, postIndex]);

  return (
    <CardWrapper>
      <Card
        cover={postData.Images[0] && <PostImages images={postData.Images} />}
        actions={[
          <HeartFilled key="heart" onClick={onClickLike} style={heartStyle} />,
          <ShareAltOutlined key="share" onClick={onClickShare} />,
          <CommentOutlined key="comment" onClick={onClickCommentForm} />,
          info ? <DeleteOutlined key="delete" onClick={onClickRemove} /> : <AlertOutlined key="report" />,
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
                {`${postData.User.familyName}${postData.User.firstName}${
                  postData.SharePostId ? '님이 공유한 게시글 입니다.' : ''
                }`}
              </a>
            </Link>
          </>
        }
      >
        {postData.SharePostId && postData.SharePost ? (
          <Card
            cover={postData.SharePost.Images[0] && <PostImages images={postData.SharePost.Images} />}
            title={
              <>
                <Link href={`/post/${postData.SharePost.id}`}>
                  <a>
                    {postData.SharePost.User.profilePhoto ? (
                      <Avatar src={`http://localhost:3065/${postData.SharePost.User.profilePhoto}`} />
                    ) : (
                      <Avatar icon={<UserOutlined />} />
                    )}
                    {`${postData.SharePost.User.familyName}${postData.SharePost.User.firstName}`}
                  </a>
                </Link>
              </>
            }
          />
        ) : (
          <PostCardContent postContent={postData.content} />
        )}
      </Card>
      {openCommentForm && <CommentForm comments={postData.comments} postId={postData.id} postIndex={postIndex} />}
    </CardWrapper>
  );
});

export default PostCard;
