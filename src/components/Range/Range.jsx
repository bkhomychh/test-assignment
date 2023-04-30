import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import classes from './Range.module.css';

const rangeOptions = {
  range: true,
  min: 0,
  max: 30000,
  defaultValue: [0, 30000],
  allowCross: false,
  step: 50,
  activeDotStyle: { backgroundColor: 'yellow' },
  className: classes.range,
  handleStyle: {
    boxShadow: 'none',
    borderColor: 'var(--color-accent)',
  },
};

const Range = props => {
  return (
    <>
      <Slider {...rangeOptions} {...props} />
    </>
  );
};

export default Range;
