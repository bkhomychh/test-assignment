import { SORTING_OPTIONS } from './constants';

export const sortItems = (arr, sorting) => {
  const items = [...arr];

  switch (sorting) {
    case SORTING_OPTIONS.popular:
      return items.sort((a, b) => b.rate - a.rate);

    case SORTING_OPTIONS.cheap:
      return items.sort((a, b) => a.price - b.price);

    case SORTING_OPTIONS.expensive:
      return items.sort((a, b) => b.price - a.price);

    default:
      return items;
  }
};
