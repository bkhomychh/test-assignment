import { ThreeDots } from 'react-loader-spinner';

import classes from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <ThreeDots height="80" width="80" radius="9" ariaLabel="three-dots-loading" visible={true} />
    </div>
  );
};

export default Spinner;
