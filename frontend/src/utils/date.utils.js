import { format, isValid, parseISO } from 'date-fns';

export const convertISOToDateTime = (
  isoString,
  dateFormat = 'MMM dd, yyyy HH:mm a'
) => {
  const date = parseISO(isoString);
  if (!isValid(date)) {
    return null;
  }

  return format(date, dateFormat);
};
