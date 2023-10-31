import { useState, useEffect, useCallback } from 'react';
import Card from '../../UI/Card';
import classes from './Review.module.css';
import ReviewInfo from './ReviewInfo/ReviewInfo';
import IncidentMedia from './ReviewInfo/IncidentMedia';
import CaseReviewForm from './ReviewDetail/CaseReviewForm';
import RemarksForm from './ReviewDetail/RemarksForm';

const apiUrl = process.env.REACT_APP_API_URL;
console.log('apiUrl: ', apiUrl);

const ReviewDetail = () => {
  const [incidentCase, setIncidentCase] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}/incident-case/1`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const incidentCase = await response.json();

      setIncidentCase(incidentCase);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Card>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className={classes.container}>
        {incidentCase && <ReviewInfo incidentCase={incidentCase} />}
        <IncidentMedia />
      </div>

      <div className={classes['container-review']}>
        <CaseReviewForm />
        <RemarksForm />
      </div>
    </Card>
  );
};

export default ReviewDetail;
