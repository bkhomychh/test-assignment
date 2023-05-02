import PropTypes from 'prop-types';
import classes from './InputField.module.css';

const InputField = ({ formik = {}, name, large = false, ...otherProps }) => {
  const { handleChange, handleBlur, values, touched, errors } = formik;
  const isInvalid = Boolean(touched[name] && errors[name]);
  const boxClasses = [classes.box, large ? classes.large : ''];
  const inputClasses = [classes.input, isInvalid ? classes.invalid : ''];
  const setting = {
    className: inputClasses.join(' '),
    name: name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    ...otherProps,
  };

  return (
    <div className={boxClasses.join(' ')}>
      {large ? <textarea {...setting} /> : <input {...setting} />}
      {isInvalid && <p className={classes.error}>{errors[name]}</p>}
    </div>
  );
};

InputField.propTypes = {
  formik: PropTypes.object,
  large: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default InputField;
