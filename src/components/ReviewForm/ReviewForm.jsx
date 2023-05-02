import { useFormik } from 'formik';
import * as Yup from 'yup';

import formClasses from 'styles/Form.module.css';
import InputField from 'components/InputField';
import Button from 'components/Button';

import classes from './ReviewForm.module.css';
import sprite from 'images/sprite.svg';
import PreviewImage from 'components/PreviewImage';

const ReviewForm = ({ close }) => {
  const formik = useFormik({
    initialValues: { name: '', email: '', comment: '', files: [], rate: 0 },
    validationSchema: Yup.object({
      name: Yup.string().required('Обов`язкове поле'),
      email: Yup.string().email('Невірна ел. адреса').required('Обов`язкове поле'),
      comment: Yup.string().min(20, 'Від 20 символів').required('Обов`язкове поле'),
      files: Yup.array(),
      rate: Yup.number().min(0).max(5),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      close();
    },
  });

  const {
    handleSubmit,
    setFieldValue,
    values: { files, rate },
  } = formik;

  const removeFile = name => {
    const filteredFiles = files.filter(file => file.name !== name);
    setFieldValue('files', filteredFiles);
  };

  return (
    <div className={classes.wrapper}>
      <h2 className={formClasses.title}>Ваш відгук</h2>
      <form className={formClasses.form} onSubmit={handleSubmit} noValidate>
        <div className={classes.rate}>
          <span>Оцінка: </span>
          <ul className={classes.btnList}>
            {[...Array(5).keys()].map(val => (
              <li key={val}>
                <button
                  className={`${classes.btn}`}
                  type="button"
                  onClick={() => {
                    setFieldValue('rate', val + 1);
                  }}
                >
                  <svg
                    className={`${val + 1 <= rate ? classes.colored : ''}`}
                    width="36px"
                    height="36px"
                  >
                    <use href={sprite + '#icon-star'}></use>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <InputField type="text" name="name" placeholder="Ім'я" formik={formik} />
        <InputField type="email" name="email" placeholder="E-mail" formik={formik} />
        <InputField type="text" name="comment" placeholder="Ваш коментар" formik={formik} large />

        {files.length > 0 && (
          <ul className={classes.previews}>
            {files.map(file => (
              <li key={file.name}>
                <PreviewImage file={file} removeFile={removeFile} />
              </li>
            ))}
          </ul>
        )}

        <label className={classes.file}>
          <input
            type="file"
            name="files"
            multiple
            hidden
            onChange={({ target }) => setFieldValue('files', [...target.files])}
          />
          <svg width="16px" height="16px">
            <use href={sprite + '#icon-picture'}></use>
          </svg>
          Додати фото
        </label>

        <Button type="submit" colored large rounded>
          Залишити
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
