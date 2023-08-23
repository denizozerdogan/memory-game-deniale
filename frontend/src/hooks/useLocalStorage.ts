import { Dispatch, SetStateAction, useEffect, useState } from "react";

const getValue = (key: string): string => {
  if (typeof window !== "undefined") {
    const storedValue = window.localStorage.getItem(key);
    return storedValue !== null ? storedValue : "0";
  }
  return "0";
};

type useLocalStorageType = [string, Dispatch<SetStateAction<string>>];

/**
 * localStorage state
 */
export const useLocalStorage = function (key: string): useLocalStorageType {
  // Get the value saved on localStorage
  const [value, setValue] = useState(() => getValue(key));

  // Set on localStorage the state every time the value changes
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
};