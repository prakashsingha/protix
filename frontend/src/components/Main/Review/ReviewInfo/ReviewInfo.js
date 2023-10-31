import { Fragment } from 'react';
import Label from '../../../UI/Label';
import classes from './ReviewInfo.module.css';
import { convertISOToDateTime } from '../../../../utils/date.utils';

const ReviewInfo = (props) => {
  const { incidentCase } = props;

  return (
    <Fragment>
      <div className={classes.container}>
        <h2>Review Submitted</h2>
        <h4>Case ID: #{incidentCase?.id}</h4>
        <div className={classes['updated-at']}>
          {incidentCase?.createdAt
            ? convertISOToDateTime(incidentCase?.createdAt)
            : null}
        </div>
        <div className={`${classes['rounded-box']}`}>
          <Label
            className={`${classes['left-label']}`}
            label={incidentCase.riskLevel}
          />
          <Label
            className={`${classes['right-label']}`}
            label={incidentCase.riskCategory}
          />
        </div>

        <div className={classes['review-details']}>
          <div className={classes.row}>
            <div className={`${classes.column} ${classes['field-name']}`}>
              Alert
            </div>
            <div className={classes.column}>{incidentCase.riskSubCategory}</div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.column} ${classes['field-name']}`}>
              Time
            </div>
            <div className={classes.column}>
              {convertISOToDateTime(incidentCase.createdAt)}
            </div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.column} ${classes['field-name']}`}>
              Zone
            </div>
            <div className={classes.column}>{incidentCase.zone.name}</div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.column} ${classes['field-name']}`}>
              Camera
            </div>
            <div className={classes.column}>{incidentCase.camera.name}</div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.column} ${classes['field-name']}`}>
              Authority
            </div>
            <div className={classes.column}>
              {
                (incidentCase.authority.firstName,
                ' ',
                incidentCase.authority.firstName)
              }
            </div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.column} ${classes['field-name']}`}>
              Status
            </div>
            <div className={classes.column}>{incidentCase.status.name}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ReviewInfo;
