import Section from 'components/Section';
import Carousel from 'components/Carousel';
import { useState } from 'react';

const ViewedItems = () => {
  const [items, setItems] = useState([]);

  return (
    items.length > 0 && (
      <Section title="Ви переглядали">
        <Carousel items={items} />
      </Section>
    )
  );
};

export default ViewedItems;
