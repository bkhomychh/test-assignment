import { useState } from 'react';
import { useEffect } from 'react';

import BackLink from 'components/BackLink';
import Filters from 'components/Filters';
import Section from 'components/Section';
import ItemList from 'components/ItemList';
import Sorting from 'components/Sorting';

import { filterItems, SORTING_OPTIONS } from 'utils';

import classes from './Catalog.module.css';
import itemList from 'data/items.json';
import FilterMenu from 'components/FilterMenu';
import { useMediaQuery } from 'hooks';

const Catalog = () => {
  const [items, setItems] = useState(itemList);
  const [filters, setFilters] = useState([]);
  const [currentSorting, setCurrentSorting] = useState(SORTING_OPTIONS.default);
  const isDeskVersion = useMediaQuery('1350px');
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    const filteredItems = filterItems(itemList, filters);

    switch (currentSorting) {
      case SORTING_OPTIONS.popular:
        filteredItems.sort((a, b) => b.rate - a.rate);
        break;
      case SORTING_OPTIONS.cheap:
        filteredItems.sort((a, b) => a.price - b.price);
        break;
      case SORTING_OPTIONS.expensive:
        filteredItems.sort((a, b) => b.price - a.price);
        break;
      default:
    }
    setItems(filteredItems);
  }, [filters, currentSorting]);

  const resetCurrentPage = () => setCurrentPage(1);

  const removeFilter = ({ name, value: filterValue }) => {
    if (name === 'producer') {
      setFilters(state => {
        const filters = [...state];
        const index = filters.findIndex(({ name }) => name === 'producer');
        filters[index].value = filters[index].value.filter(value => value !== filterValue);
        return filters;
      });
      return;
    }

    setFilters(state => state.filter(({ value }) => value !== filterValue));
  };

  const filterList = [];

  filters.forEach(({ name, value }) => {
    if (name === 'producer') {
      filterList.push(...value.map(val => ({ name, value: val })));
    } else {
      filterList.push({ name, value });
    }
  });

  return (
    <div className={classes.wrapper}>
      <Section>
        <BackLink classNames={[classes.link]} to="/">
          Головна &gt;
        </BackLink>
        <div className={classes.box}>
          <h1 className={classes.title}>Дитячі коляски</h1>
          <Sorting
            currentSorting={currentSorting}
            setCurrentSorting={setCurrentSorting}
            resetCurrentPage={resetCurrentPage}
          />
        </div>

        <div className={classes.content}>
          {isDeskVersion ? (
            <FilterMenu setFilters={setFilters} resetCurrentPage={resetCurrentPage} />
          ) : (
            <Filters
              setFilters={setFilters}
              currentFilters={filterList}
              removeFilter={removeFilter}
              resetCurrentPage={resetCurrentPage}
            />
          )}

          <ItemList
            items={items}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            limit={limit}
          />
        </div>
      </Section>
    </div>
  );
};

export default Catalog;
