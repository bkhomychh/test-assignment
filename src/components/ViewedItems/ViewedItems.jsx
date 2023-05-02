import Section from 'components/Section';
import Carousel from 'components/Carousel';

import { selectViewed } from 'redux/viewed';
import { useSelector } from 'react-redux';

const ViewedItems = () => {
  const viewedItems = useSelector(selectViewed);

  return (
    viewedItems.length > 0 && (
      <Section title="Ви переглядали">
        <Carousel items={viewedItems} />
      </Section>
    )
  );
};

export default ViewedItems;
