import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import InputField from 'components/InputField';

import classes from 'styles/Form.module.css';
import { phoneRegExp } from 'utils/constants';

const Register = () => {
  const formik = useFormik({
    initialValues: { name: '', phone: '', email: '', password: '' },
    validationSchema: Yup.object({
      name: Yup.string().min(4, 'Від 4 символів').required('Обов`язкове поле'),
      phone: Yup.string()
        .min(10, 'Від 10 символів')
        .matches(phoneRegExp, 'Невірний номер телефону')
        .required('Обов`язкове поле'),
      email: Yup.string().email('Невірна ел. адреса').required('Обов`язкове поле'),
      password: Yup.string().min(7, 'Від 7 символів').required('Обов`язкове поле'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <div>
      <h1 className={classes.title}>Реєстрація</h1>
      <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
        <InputField type="text" name="name" placeholder="Ім'я" formik={formik} />
        <InputField type="tel" name="phone" placeholder="Телефон" formik={formik} />
        <InputField type="email" name="email" placeholder="E-mail" formik={formik} />
        <InputField type="password" name="password" placeholder="Пароль" formik={formik} />

        <button className={classes.btn} type="submit">
          Зареєструватись
        </button>
        <Link className={classes.link} to="/login">
          У мене є акаунт
        </Link>
      </form>
    </div>
  );
};

export default Register;
