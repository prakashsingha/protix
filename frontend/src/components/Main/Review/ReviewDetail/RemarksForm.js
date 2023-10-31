import { Fragment } from 'react';
import classes from './RemarksForm.module.css';
import ReviewItem from './ReviewItem';
import { convertISOToDateTime } from '../../../../utils/index';
import RoundedTextBox from '../../../UI/RoundedTextBox';
import Button from '../../../UI/Button';

const RemarksForm = (props) => {
  const {
    incidentCase,
    title,
    onTitleChange,
    onTitleSave,
    isTitleEditable,
    onTitleEdit,
    comment,
    onCommentChange,
    onCommentSave,
  } = props;

  const createdReviews = incidentCase?.incidentReviews.sort(
    (prev, next) =>
      new Date(next.createdAt).getTime() - new Date(prev.createdAt).getTime()
  );

  return (
    <Fragment>
      <div className={classes['container-holder']}>
        <div className={classes.container}>
          <div className={classes['flex-row']}>
            <h3 className={classes['team-title']}>{incidentCase.team.name}</h3>
            {!isTitleEditable && (
              <span className={classes['edit-link']} onClick={onTitleEdit}>
                Edit
              </span>
            )}
          </div>
          <div className={classes['flex-column']}>
            {!isTitleEditable && (
              <h4 className={classes['case-title']}>{incidentCase.title}</h4>
            )}
            {isTitleEditable && (
              <input
                className={classes['case-title-box']}
                type='text'
                name='title'
                id='title-box'
                value={title}
                onChange={onTitleChange}
                onKeyDown={onTitleSave}
                onBlur={onTitleSave}
              ></input>
            )}
          </div>

          <div
            className={`${classes['flex-row']} ${classes['review-title-separator']}`}
          >
            <div className={classes.column}>
              <div className={classes['comment-heading']}>Comments</div>
            </div>
            <div className={`${classes.column} ${classes['updated-at']}`}>
              Updated{' '}
              {createdReviews.length > 0 &&
                convertISOToDateTime(createdReviews[0].updatedAt)}
            </div>
          </div>

          <div className={classes['remarks-list']}>
            {createdReviews.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </div>

          <div className={classes['flex-row']}>
            <RoundedTextBox
              value={comment}
              onChange={onCommentChange}
              placeholder='Type Comment Here'
              className={classes['input-comment']}
            />
          </div>
        </div>
        <div className={classes['button-container']}>
          <Button
            type='button'
            onClick={onCommentSave}
            label='Submit'
            className={`${classes['rounded-button']} ${classes['blue-button']}`}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default RemarksForm;
