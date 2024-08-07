import { ICategory } from 'types/categories.types';
import api from './api';

export async function getCategories() {
  const { data } = await api.get<ICategory[]>('/categories');

  return data;
}
