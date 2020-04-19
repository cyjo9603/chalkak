import React, { useState, useCallback, useMemo, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Avatar, message } from 'antd';
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
    if (!info) {
      return message.error('로그인한 사용자만 가능합니다.');
    }
    if (liked && (postIndex || postIndex === 0)) {
      dispatch(unLikePostRequest(postData.id, postIndex));
    } else {
      dispatch(likePostRequest(postData.id, postIndex));
    }
  }, [info, liked, postData.id]);

  const onClickShare = useCallback(() => {
    if (!info) {
      return message.error('로그인한 사용자만 가능합니다.');
    }
    dispatch(sharePostRequest(postData.id));
  }, [info]);

  const onClickRemove = useCallback(() => {
    if (postData.User.id !== info.id) {
      return message.error(`${info.firstName}님이 작성한 게시글이 아닙니다.`);
    }
    dispatch(removePostRequest(postData.id, postIndex));
  }, [postData, postIndex, info]);

  return (
    <CardWrapper>
      <Card
        cover={postData.Images && postData.Images[0] && <PostImages images={postData.Images} />}
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
                  <Avatar src={`${postData.User.profilePhoto}`} />
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
                      <Avatar src={`${postData.SharePost.User.profilePhoto}`} />
                    ) : (
                      <Avatar icon={<UserOutlined />} />
                    )}
                    {`${postData.SharePost.User.familyName}${postData.SharePost.User.firstName}`}
                  </a>
                </Link>
              </>
            }
          >
            <PostCardContent postContent={postData.SharePost.content} />
          </Card>
        ) : (
          <PostCardContent postContent={postData.content} />
        )}
      </Card>
      {openCommentForm && <CommentForm comments={postData.comments} postId={postData.id} postIndex={postIndex} />}
    </CardWrapper>
  );
});

export default PostCard;
