export function removeTracking(data) {
  if (Array.isArray(data)) {
    return data.map(removeTracking);
  }

  if (data && typeof data === "object") {
    if (data?.id?.indexOf("builder-pixel") > -1) {
      return "";
    }

    for (const [key, value] of Object.entries(data)) {
      data[key] = removeTracking(value);
    }
  }

  return data;
}
