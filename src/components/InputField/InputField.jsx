import PropTypes from 'prop-types';
import classes from './InputField.module.css';

const InputField = ({ formik = {}, name, ...otherProps }) => {
  const { handleChange, handleBlur, values, touched, errors } = formik;
  const isInvalid = Boolean(touched[name] && errors[name]);

  return (
    <div className={classes.box}>
      <input
        className={`${classes.input} ${isInvalid ? classes.invalid : ''}`}
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        {...otherProps}
      />
      {isInvalid && <p className={classes.error}>{errors[name]}</p>}
    </div>
  );
};

InputField.propTypes = {
  formik: PropTypes.object,
  name: PropTypes.string.isRequired,
};

export default InputField;
