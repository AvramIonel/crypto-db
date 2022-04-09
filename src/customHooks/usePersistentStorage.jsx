import React from "react";

/*
  - method: get | set
  - key: string
  - data: obj
  - type: local | session
*/

export function usePersistentStorage(method, key, data, type) {
  const dataToBeStored = JSON.stringify(data);

  switch (method) {
    case "get":
      if (type === "local") return localStorage.getItem(key);
      else if (type === "session") return sessionStorage.getItem(key);
    case "set":
      if (type === "local") return localStorage.setItem(key, dataToBeStored);
      else if (type === "session")
        return sessionStorage.setItem(key, dataToBeStored);
    default:
      break;
  }
}
