export const getButtonText = ({ name, value }) => {
  switch (name) {
    case 'category':
      return value;
    case 'available':
      return 'В наявності';
    case 'discount':
      return 'Зі знижкою';
    case 'price':
      return `Від ${value[0]} до ${value[1]}`;
    case 'producer':
      return `Виробник: ${value}`;
    default:
      return null;
  }
};
