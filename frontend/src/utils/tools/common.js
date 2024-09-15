export const sortObjectByKeysOrder = (keysOrder, obj) => {
  const sortedObj = {};

  keysOrder.forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      sortedObj[key] = obj[key];
    }
  });

  return sortedObj;
};

export const capitalizeFirstLetter = (string) => {
  if (typeof string !== "string") return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const isEmptyObject = (obj) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};
