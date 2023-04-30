export const filterItems = (items, filters) => {
  return items.filter(({ category, available, discount, price, producer }) => {
    return filters.every(({ name, value }) => {
      switch (name) {
        case 'category':
          return category === value;
        case 'available':
          return available;
        case 'discount':
          return discount !== '';
        case 'price':
          return price > value[0] && price < value[1];
        case 'producer':
          if (value.length < 1) {
            return true;
          }
          return value.some(val => val === producer);
        default:
          console.log('There is no such filter');
          return false;
      }
    });
  });
};
