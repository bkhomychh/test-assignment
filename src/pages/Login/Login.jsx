import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import InputField from 'components/InputField';

import { logIn } from 'redux/auth';

import classes from 'styles/Form.module.css';
import { phoneRegExp } from 'utils/constants';

Yup.addMethod(Yup.MixedSchema, 'oneOfSchemas', function (schemas) {
  return this.test('one-of-schemas', 'Введено невірні дані', item =>
    schemas.some(schema => schema.isValidSync(item, { strict: true })),
  );
});

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { login: '', password: '' },
    validationSchema: Yup.object({
      login: Yup.mixed()
        .oneOfSchemas([
          Yup.string().email('Невірна ел. адреса'),
          Yup.string().min(10).matches(phoneRegExp),
        ])
        .required('Обов`язкове поле'),
      password: Yup.string().min(7, 'Від 7 символів').required('Обов`язкове поле'),
    }),
    onSubmit: values => {
      dispatch(logIn(values));
    },
  });

  return (
    <div>
      <h1 className={classes.title}>Вхід</h1>
      <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
        <InputField type="text" name="login" placeholder="Телефон або e-mail" formik={formik} />
        <InputField type="password" name="password" placeholder="Пароль" formik={formik} />

        <Link className={classes.advice} to="/">
          Забули пароль?
        </Link>
        <button className={classes.btn} type="submit">
          Увійти
        </button>
        <Link className={classes.link} to="/register">
          У мене немає акаунта
        </Link>
      </form>
    </div>
  );
};

export default Login;
