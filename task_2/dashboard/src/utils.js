// Retorna el año actual
export function getFullYear() {
  return new Date().getFullYear();
}

// Retorna un texto dependiendo del valor de isIndex
export function getFooterCopy(isIndex) {
  if (isIndex) {
    return 'Holberton School';
  }
  return 'Holberton School main dashboard';
}

// task_2

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
