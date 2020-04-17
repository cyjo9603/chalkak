import React, { memo } from 'react';
import Link from 'next/link';

interface Props {
  postContent: string;
}

const PostCardContent = memo(({ postContent }: Props) => (
  <>
    {postContent.split(/(#[^\s]+)/g).map((v, i) => {
      if (v.match(/#[^\s]+/)) {
        const tagName = v.slice(1);

        return (
          <Link key={tagName + i} href={{ pathname: '/hashtag', query: { tag: tagName } }} as={`/hashtag/${tagName}`}>
            <a>{v}</a>
          </Link>
        );
      }
      return v;
    })}
  </>
));

export default PostCardContent;
