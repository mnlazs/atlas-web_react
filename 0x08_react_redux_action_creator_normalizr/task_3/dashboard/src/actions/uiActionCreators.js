import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

// Creador de acción para iniciar sesión
export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

// Creador de acción para cerrar sesión
export function logout() {
  return { type: LOGOUT };
}

// Creador de acción para mostrar el cajón de notificaciones
export function displayNotificationDrawer() {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
}

// Creador de acción para ocultar el cajón de notificaciones
export function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER };
}
