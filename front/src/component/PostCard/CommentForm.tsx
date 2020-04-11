import React, { useState, useCallback } from 'react';
import { Avatar, Form, List, Button, Comment, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { CommentFormWrapper } from './styled';
import { CommentInfo } from '../../reducers/post';

interface Props {
  comments: CommentInfo[];
}

const CommentForm = ({ comments }: Props) => {
  const [commentText, setCommentText] = useState('');

  const onChangeCommentText = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  }, []);

  return (
    <CommentFormWrapper>
      <Form>
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
              avatar={<Avatar icon={<UserOutlined />} />}
              content={item.content}
            />
          </li>
        )}
      />
    </CommentFormWrapper>
  );
};

export default CommentForm;
