import axios from 'axios';

export const fetchEventsBegin = () => ({
  type: "FETCH_EVENTS_BEGIN"
});

export const fetchEventsSuccess = (events) => ({
  type: "FETCH_EVENTS_SUCCESS",
  payload: events
});

export const fetchEventsError = (err) => ({
  type: "FETCH_EVENTS_ERROR",
  payload: err
});

export const fetchEventsAPI = () => axios.get(`http://www.json-generator.com/api/json/get/cjsCfHNcSW?indent=2`);

export const fetchEvents = () => (dispatch) => {
  dispatch(fetchEventsBegin());
  const onSuccess = (response) => {
    if (response.data) {
      dispatch(fetchEventsSuccess(response.data));
    } else {
      dispatch(fetchEventsError(response));
    }
  };

  const onError = (error) => {
    dispatch(fetchEventsError(error));
  };
  fetchEventsAPI()
    .then(onSuccess)
    .catch(onError);
};
