import { useFormik } from 'formik';
import * as Yup from 'yup';

import classes from './Mailing.module.css';
import sprite from 'images/sprite.svg';

const Mailing = () => {
  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(JSON.stringify(values, null, 2));
      resetForm();
    },
  });
  const { handleSubmit, handleChange, values, errors } = formik;

  return (
    <div className={classes.wrapper}>
      <div className="container">
        <b className={classes.call}>Отримуйте промокоди та ексклюзивні пропозиції</b>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <input
            className={errors.email ? classes.invalid : ''}
            type="email"
            name="email"
            placeholder="Ваш email"
            value={values.email}
            onChange={handleChange}
          />
          <button type="submit">
            <svg width="20px" height="20px">
              <use href={sprite + '#icon-arrow-right'}></use>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mailing;
