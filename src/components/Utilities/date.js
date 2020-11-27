const date = (date) => {
  const dateArray = date.split("");
  if (dateArray[4] === "-") return date;

  return date.split("-").reverse().join("-");
};

export default date;
