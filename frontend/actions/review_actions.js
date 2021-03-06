import * as ReviewApiUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_REVIEW_ERRORS = "REMOVE_REVIEW_ERRORS";

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const removeReviewErrors = () => ({
  type: REMOVE_REVIEW_ERRORS
});

export const fetchReviews = productId => dispatch =>
  ReviewApiUtil.fetchReviews(productId).then(reviews => dispatch(receiveReviews(reviews)));

export const createReview = review => dispatch =>
  ReviewApiUtil.createReview(review).then(
    review => dispatch(receiveReview(review)),
    errors => dispatch(receiveReviewErrors(errors.responseJSON))
  );

export const updateReview = review => dispatch =>
  ReviewApiUtil.updateReview(review).then(
    review => dispatch(receiveReview(review)),
    errors => dispatch(receiveReviewErrors(errors.responseJSON))
  );

export const deleteReview = review => dispatch =>
  ReviewApiUtil.deleteReview(review).then(review => dispatch(removeReview(review)));
