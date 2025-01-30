/*
this file will include our data types that are used across
multiple files

we can also declare arrays or other variables here
*/
type dataType = {
  id: string; //unique identifier for each list item
  title: string;
};

const DATA: dataType[] = [
  { id: "1", title: "First" },
  { id: "2", title: "Second" },
  { id: "3", title: "Third" },
  { id: "4", title: "Fourth" },
];

//because i am exporting multiple items from the same file,
//i am not using the word default
export { dataType, DATA };
