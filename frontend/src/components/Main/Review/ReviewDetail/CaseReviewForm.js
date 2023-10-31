import { Fragment } from 'react';
import classes from './CaseReviewForm.module.css';
import Dropdown from '../../../UI/Dropdown';

const CaseReviewForm = (props) => {
  const {
    incidentCase,
    statuses,
    // selectedStatus,
    onStatusChange,
    isStatusEditable,
    onStatusEdit,
  } = props;

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes['inner-container']}>
          <div className={classes['flex-row']}>
            <h4>Case Review</h4>
            {!isStatusEditable && (
              <span className={classes['edit-link']} onClick={onStatusEdit}>
                Edit
              </span>
            )}
          </div>

          <div className={classes['review-fields']}>
            <div className={classes.row}>
              <div className={`${classes.column} ${classes['field-name']}`}>
                Authority*
              </div>
              <div className={classes.column}>
                {incidentCase &&
                  `${incidentCase.authority.firstName} ${incidentCase.authority.lastName}`}
              </div>
            </div>
            <div className={classes.row}>
              <div className={`${classes.column} ${classes['field-name']}`}>
                Assigned
              </div>
              <div className={classes.column}>
                {incidentCase &&
                  `${incidentCase.assignee.firstName} ${incidentCase.assignee.lastName}`}
              </div>
            </div>
            <div className={classes.row}>
              <div className={`${classes.column} ${classes['field-name']}`}>
                Team
              </div>
              <div className={classes.column}>
                {incidentCase && incidentCase.team.name}
              </div>
            </div>
            <div className={classes.row}>
              <div className={`${classes.column} ${classes['field-name']}`}>
                Status
              </div>
              <div className={classes.column}>
                {!isStatusEditable && incidentCase && incidentCase.status.name}
                {isStatusEditable && statuses && (
                  <Dropdown
                    options={statuses}
                    selectedOption={incidentCase.statusId}
                    onChange={onStatusChange}
                    defaultLabel='Select a status'
                    id='id'
                    value='name'
                    className={classes['rounded-dropdown']}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={classes['bottom-container']}>
          <div className={classes['bottom-group-left']}>
            <button>&#128188;</button>
            <button>&#9734;</button>
            <button>&#9872;</button>
          </div>

          <div className={classes['bottom-group-right']}>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CaseReviewForm;
