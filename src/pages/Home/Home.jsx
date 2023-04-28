import Section from 'components/Section';
import Slider from 'components/Slider';
import Discounts from 'components/Discounts';

import classes from './Home.module.css';
import PopularCategories from 'components/PopularCategories';

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <Section>
        <Slider />
      </Section>
      <Section title="Акція!" label="Sale">
        <Discounts />
      </Section>
      <Section title="Популярні категорії">
        <PopularCategories />
      </Section>
    </div>
  );
};

export default Home;
