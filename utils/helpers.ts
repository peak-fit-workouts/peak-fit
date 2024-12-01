export const formatSimpleDate = (date: Date) => {
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

export const displaySmartDate = (
  date: Date,
  dateFormatter: (d: Date) => string
) => {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - date.getTime();

  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  } else if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else {
    return dateFormatter(date);
  }
};
