import React from 'react';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import { Post } from '../../types/Post';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments = [],
  } = post;

  return (
    <li className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {
        comments.length === 0
          ? <b data-cy="NoCommentsMessage">No comments yet</b>
          : <CommentList comments={comments} />
      }
    </li>
  );
};
