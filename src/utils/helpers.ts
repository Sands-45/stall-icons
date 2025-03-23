export const toPureString = (str: string): string => {
  return str?.toString()?.toLowerCase()?.replace(/\s/gim, "");
};
