import { useQuery } from '@tanstack/react-query';
import { getCategories } from 'services/categories.services';

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
    initialData: [],
  });
}
