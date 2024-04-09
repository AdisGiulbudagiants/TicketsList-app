const options = {
  day: 'numeric',
  month: 'long',
  hour: '2-digit',
  minute: '2-digit',
}

export function timeFixer(time) {
  return new Date(time).toLocaleDateString('en', options)
}
