export const formatDateToEnglish = (dateString: string) => {
  const deadline = new Date(dateString);
  const [month, day, year, hour, minutes, seconds] = [
    deadline.getMonth(),
    deadline.getDate(),
    deadline.getFullYear(),
    deadline.getHours(),
    deadline.getMinutes(),
    deadline.getSeconds(),
  ];
  return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
}