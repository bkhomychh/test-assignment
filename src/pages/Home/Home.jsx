import Section from 'components/Section';
import Slider from 'components/Slider';
import Carousel from 'components/Carousel';
import Brands from 'components/Brands';
import About from 'components/About';
import PopularCategories from 'components/PopularCategories';

import classes from './Home.module.css';
import items from 'data/items.json';
import ViewedItems from 'components/ViewedItems';

const filteredItems = items.filter(item => item.discount !== '');

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <Section>
        <Slider />
      </Section>
      <Section title="Акція!" label="Sale" to="/">
        <Carousel items={filteredItems} navigation />
      </Section>
      <Section title="Популярні категорії">
        <PopularCategories />
      </Section>
      <Section title="Популярні бренди" to="/">
        <Brands />
      </Section>
      <Section>
        <About />
      </Section>
      <ViewedItems />
    </div>
  );
};

export default Home;
