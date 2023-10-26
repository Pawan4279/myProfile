import { stringDiclaire } from "./string";

export const getString = (stringName) => {
  const stringFIle = stringDiclaire;
  debugger;
  let returnString = stringFIle.hasOwnProperty(stringName)
    ? stringFIle.stringName
    : "";
  return returnString;
};
