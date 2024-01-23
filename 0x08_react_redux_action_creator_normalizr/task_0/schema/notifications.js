import * as notificationData from './path/to/notifications.json';


function getAllNotificationsByUser(userId) {
  return notificationData.default.filter(notification => notification.author_id === userId);
}
