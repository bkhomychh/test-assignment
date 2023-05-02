import { useState } from 'react';
import PropTypes from 'prop-types';

import classes from './PreviewImage.module.css';
import sprite from 'images/sprite.svg';

const PreviewImage = ({ file, removeFile }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = () => setPreview(reader.result);

  return (
    <div className={classes.wrapper}>
      <img src={preview} alt="Preview" />
      <button className={classes.btn} onClick={() => removeFile(file.name)}>
        <svg width="15px" height="15px">
          <use href={sprite + '#icon-cross'}></use>
        </svg>
      </button>
    </div>
  );
};

PreviewImage.propTypes = {
  file: PropTypes.object.isRequired,
  removeFile: PropTypes.func.isRequired,
};

export default PreviewImage;
