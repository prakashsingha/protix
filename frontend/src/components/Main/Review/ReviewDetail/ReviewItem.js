import { Fragment, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import classes from './ReviewItem.module.css';
import { convertISOToDateTime } from '../../../../utils/index';
import { updateIncidentComment } from '../../../../api/index';

const ReviewItem = (props) => {
  const { review } = props;
  const [isCommentEditable, setIsCommentEditable] = useState(false);
  const [comment, setComment] = useState(props.review.comments);

  const handleSetReviewEditable = () => {
    setIsCommentEditable(true);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const updateReviewMutation = useMutation({
    mutationFn: updateIncidentComment,
  });

  const handleCommentSave = (e) => {
    if (e.key === 'Escape') {
      setIsCommentEditable(false);
    }

    if (e.key === 'Enter' || e.key === undefined) {
      updateReviewMutation.mutate({
        id: review.id,
        data: { comments: e.target.value },
      });
      setIsCommentEditable(false);
    }
  };

  return (
    <Fragment>
      <div className={classes['remarks-item']}>
        <div className={classes['remarks-info']}>
          <div className={classes.column}>
            <div className={classes['updated-at']}>
              {convertISOToDateTime(review.updatedAt)}
            </div>
            <div>{`${review.reviewedByUser.firstName} ${review.reviewedByUser.lastName}`}</div>
          </div>
          {!isCommentEditable && (
            <div className={classes.column}>
              <span
                className={classes['edit-link']}
                onClick={handleSetReviewEditable}
              >
                Edit
              </span>
            </div>
          )}
        </div>
        <div className={classes['remarks-description']}>
          {!isCommentEditable && comment}
          {isCommentEditable && (
            <textarea
              className={classes['comment']}
              onChange={handleCommentChange}
              onKeyDown={handleCommentSave}
              onBlur={handleCommentSave}
            >
              {comment}
            </textarea>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ReviewItem;
