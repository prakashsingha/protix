import { Fragment } from 'react';
import classes from './IncidentMedia.module.css';

const IncidentMedia = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <img
          className={classes['rounded-image']}
          src='https://images.pexels.com/photos/5876444/pexels-photo-5876444.jpeg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=2'
          alt='CCTV1 shot'
        />
      </div>
    </Fragment>
  );
};

export default IncidentMedia;
