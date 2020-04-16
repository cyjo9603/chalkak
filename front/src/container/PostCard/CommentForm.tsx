import React, { useState, useCallback } from 'react';
import { Avatar, Form, List, Button, Comment, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { CommentFormWrapper } from './styled';
import { CommentInfo } from '../../reducers/post';
import { writeCommentRequest } from '../../reducers/post/writeComment';

interface Props {
  comments: CommentInfo[];
  postId: number;
  postIndex: number;
}

const CommentForm = ({ comments, postId, postIndex }: Props) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState('');

  const onSubmitForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(writeCommentRequest(commentText, postId, postIndex));
    },
    [commentText],
  );

  const onChangeCommentText = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  }, []);

  return (
    <CommentFormWrapper>
      <Form onSubmitCapture={onSubmitForm}>
        <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
        <Button type="primary" htmlType="submit">
          작성
        </Button>
      </Form>
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
                      <Avatar src={`http://localhost:3065/${item.User.profilePhoto}`} />
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
};

export default CommentForm;
