import { createSelector } from 'reselect';


const notificationState = (state) => state.notifications;

export const filterTypeSelected = createSelector(
  [notificationState],
  (notifications) => notifications.get('filter')
);
