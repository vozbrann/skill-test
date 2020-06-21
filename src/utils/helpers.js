export function convertMS( milliseconds ) {
  let day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  return {
    day,
    hour,
    minute,
    seconds
  };
}

export const transformApiErrors = (data) => {
  let res = {};
  for (let [key, value] of Object.entries(data)) {
    res[key] = value.reduce((res, errMessage) => res + " " + errMessage);
  }
  return res;
};
