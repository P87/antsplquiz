export const formatDateToEnglish = (dateString: string) => {
  const deadline = new Date(dateString);
  const [month, day, year, hour, minutes, seconds] = [
    deadline.getMonth().toString(),
    deadline.getDate().toString(),
    deadline.getFullYear().toString(),
    deadline.getHours().toString(),
    deadline.getMinutes().toString(),
    deadline.getSeconds().toString(),
  ];
  return `${day.length === 1 ? "0" + day : day}/${
    month.length === 1 ? "0" + month : month
  }/${year} ${hour.length === 1 ? "0" + hour : hour}:${
    minutes.length === 1 ? "0" + minutes : minutes
  }:${seconds.length === 1 ? "0" + seconds : seconds}`;
};
