export const sortData = (data) => {
  const sortedData = [...data]; //copy the data
  sortedData.sort((a, b) => { //'sort' is really powerful es6 function
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
 
};
