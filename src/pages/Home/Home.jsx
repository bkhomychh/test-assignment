import Section from 'components/Section';
import Slider from 'components/Slider';
import Carousel from 'components/Carousel';
import Brands from 'components/Brands';
import About from 'components/About';
import PopularCategories from 'components/PopularCategories';

import classes from './Home.module.css';
import items from 'data/goods.json';

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <Section>
        <Slider />
      </Section>
      <Section title="Акція!" label="Sale" to="/">
        <Carousel items={items} navigation />
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
      <Section title="Ви переглядали" to="/">
        <Carousel items={items} />
      </Section>
    </div>
  );
};

export default Home;
