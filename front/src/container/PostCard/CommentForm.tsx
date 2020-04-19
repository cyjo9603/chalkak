import React, { useState, useCallback, memo } from 'react';
import { Avatar, Form, List, Button, Comment, Input, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import { CommentFormWrapper } from './styled';
import { CommentInfo } from '../../reducers/post';
import { RootState } from '../../reducers';
import { writeCommentRequest } from '../../reducers/post/writeComment';
import SERVER_URL from '../../util/config';

interface Props {
  comments: CommentInfo[];
  postId: number;
  postIndex: number;
}

const CommentForm = memo(({ comments, postId, postIndex }: Props) => {
  const dispatch = useDispatch();
  const { info } = useSelector((state: RootState) => state.user);
  const [commentText, setCommentText] = useState('');

  const onSubmitForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!commentText || !commentText.trim()) {
        return message.error('댓글의 내용을 입력해주세요!');
      }
      dispatch(writeCommentRequest(commentText, postId, postIndex));
    },
    [commentText],
  );

  const onChangeCommentText = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  }, []);

  return (
    <CommentFormWrapper>
      {info && (
        <Form onSubmitCapture={onSubmitForm}>
          <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
          <Button type="primary" htmlType="submit">
            작성
          </Button>
        </Form>
      )}
      <List
        header={`${comments ? comments.length : 0}개의 댓글`}
        dataSource={comments || []}
        renderItem={(item: CommentInfo) => (
          <li>
            <Comment
              author={`${item.User.familyName}${item.User.firstName}`}
              avatar={
                <Link href={`/user/${item.User.id}`}>
                  <a>
                    {item.User.profilePhoto ? (
                      <Avatar src={`${SERVER_URL}/${item.User.profilePhoto}`} />
                    ) : (
                      <Avatar icon={<UserOutlined />} />
                    )}
                  </a>
                </Link>
              }
              content={item.content}
            />
          </li>
        )}
      />
    </CommentFormWrapper>
  );
});

export default CommentForm;
