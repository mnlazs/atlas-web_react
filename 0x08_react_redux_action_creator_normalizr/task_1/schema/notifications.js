import React, { useState, PureComponent } from 'react';
import * as notificationData from './path/to/notifications.json';
import { schema } from 'normalizr';



function getAllNotificationsByUser(userId) {
  return notificationData.default.filter(notification => notification.author_id === userId);
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
