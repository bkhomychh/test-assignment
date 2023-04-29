import BackLink from 'components/BackLink';
import Filters from 'components/Filters';
import Section from 'components/Section';
import ItemList from 'components/ItemList';

import classes from './Catalog.module.css';
import items from 'data/items.json';

const Catalog = () => {
  return (
    <div className={classes.wrapper}>
      <Section>
        <BackLink classNames={[classes.link]} to="/">
          Головна &gt;
        </BackLink>
        <h1 className={classes.title}>Дитячі коляски</h1>

        <ul>
          <li>
            <button>За замовчуванням</button>
          </li>
          <li>
            <button>По популярності</button>
          </li>
          <li>
            <button>Дешевші</button>
          </li>
          <li>
            <button>Дорожчі</button>
          </li>
        </ul>

        <Filters />

        <ItemList items={items} />

        <button>Показати ще</button>
        <ul>
          <li>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">&gt;</button>
          </li>
        </ul>
      </Section>
    </div>
  );
};

export default Catalog;
