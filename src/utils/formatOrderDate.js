import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

export const formatOrderDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, "d MMMM yyyy HH:mm", { locale: uk });
};