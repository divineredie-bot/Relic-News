export const formatDate = (date) => {
  const options = {
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-US', options)
}
