import React, { useState, PureComponent } from 'react';
import * as notificationData from './notifications.json';
import { schema } from 'normalizr';
import { normalizedData } from './normalizedData';

const notificationSchema = new schema.Entity('notifications');

export const notificationsNormalizer = (data) => {
  return normalize(data, [notificationSchema]);
};

function getAllNotificationsByUser(userId) {
  const userNotifications = [];
  for (const id of normalizedData.result) {
    const notification = normalizedData.entities.notifications[id];
    if (notification.author === userId) {
      userNotifications.push(notification);
    }
  }
  return userNotifications;
}

// Entidad de usuario ya proporcionada como ejemplo
const user = new schema.Entity("users");

// Crear la entidad de mensaje
const message = new schema.Entity("messages", {}, {
  idAttribute: "guid"
});

// Crear la entidad de notificación
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});
