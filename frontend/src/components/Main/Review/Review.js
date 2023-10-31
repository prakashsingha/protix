import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Card from '../../UI/Card';
import classes from './Review.module.css';
import ReviewInfo from './ReviewInfo/ReviewInfo';
import IncidentMedia from './ReviewInfo/IncidentMedia';
import CaseReviewForm from './ReviewDetail/CaseReviewForm';
import RemarksForm from './ReviewDetail/RemarksForm';
import {
  addIncidentComment,
  fetchAllStatuses,
  fetchIncidentCase,
  updateIncidentCase,
} from '../../../api/index';

const ReviewDetail = () => {
  const queryClient = useQueryClient();
  const [isStatusEditable, setIsStatusEditable] = useState(false);
  const [isTitleEditable, setIsTitleEditable] = useState(false);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const updateStatusMutation = useMutation({
    mutationFn: updateIncidentCase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['incidentCaseData'] });
    },
  });

  const updateTitleMutation = useMutation({
    mutationFn: updateIncidentCase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['incidentCaseData'] });
    },
  });

  const addCommentMutation = useMutation({
    mutationFn: addIncidentComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['incidentCaseData'] });
    },
  });

  const {
    data: incidentCase,
    isLoading: incidentIsLoading,
    isError: incidentIsError,
    error: incidentError,
  } = useQuery({
    queryKey: ['incidentCaseData'],
    queryFn: fetchIncidentCase,
  });

  const {
    data: statuses = [],
    isLoading: statusIsLoading,
    isError: statusIsError,
    error: statusError,
  } = useQuery({
    queryKey: ['statusData'],
    queryFn: fetchAllStatuses,
  });

  //
  const incidentCaseId = incidentCase?.id;
  const incidentTitle = incidentCase?.title;

  let isError,
    isLoading = false;
  let errorMessage = null;

  if (incidentIsLoading || statusIsLoading) {
    isLoading = true;
  }

  if (incidentIsError || statusIsError) {
    isError = true;
    errorMessage = `${incidentError} ${statusError}`;
  }

  // status
  const handleStatusChange = (e) => {
    updateStatusMutation.mutate({
      id: incidentCaseId,
      data: { statusId: e.target.value },
    });
    setIsStatusEditable(false);
  };

  const handleSetStatusEditable = () => {
    setIsStatusEditable(true);
  };

  // const handleRemarksSubmit = (e) => {
  //   addIncidentRemarks.mutate({
  //     incidentCaseId,
  //     data: { statusId: e.target.value },
  //   });
  //   setIsStatusEditable(false);
  // };

  // title
  const handleSetTitleEditable = () => {
    setIsTitleEditable(true);
    setTitle(incidentTitle);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleSave = (e) => {
    if (e.key === 'Escape') {
      setIsTitleEditable(false);
    }

    if (e.key === 'Enter' || e.key === undefined) {
      updateTitleMutation.mutate({
        id: incidentCaseId,
        data: { title: e.target.value },
      });
      setIsTitleEditable(false);
    }
  };

  // remarks
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSave = () => {
    addCommentMutation.mutate({
      data: {
        incidentCaseId,
        reviewedBy: 2,
        beforeStatusId: incidentCase.statusId,
        afterStatusId: incidentCase.statusId,
        comments: comment,
      },
    });

    setComment('');
  };

  return (
    <Card>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {errorMessage}</div>}

      <div className={classes.container}>
        {incidentCase && <ReviewInfo incidentCase={incidentCase} />}
        <IncidentMedia />
      </div>

      <div className={classes['container-review']}>
        {incidentCase && (
          <CaseReviewForm
            incidentCase={incidentCase}
            statuses={statuses}
            onStatusChange={handleStatusChange}
            isStatusEditable={isStatusEditable}
            onStatusEdit={handleSetStatusEditable}
          />
        )}
        {incidentCase && (
          <RemarksForm
            incidentCase={incidentCase}
            title={title}
            onTitleChange={handleTitleChange}
            onTitleSave={handleTitleSave}
            isTitleEditable={isTitleEditable}
            onTitleEdit={handleSetTitleEditable}
            comment={comment}
            onCommentChange={handleCommentChange}
            onCommentSave={handleCommentSave}
          />
        )}
      </div>
    </Card>
  );
};

export default ReviewDetail;
