'use client';
import { FC, useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './applicationForm.scss';
import {Button} from '@gravity-ui/uikit';
import listStore from '@/store/listStore';
import { IApplication, IFormValues } from '../../../../types';
import { observer } from 'mobx-react-lite';
import profileStore from '@/store/profileStore';

const initialValues = {
  title: '',
  firstName: '',
  lastName: '',
  patronym: '',
  phone: '',
  comment: '',
  code: ''
};

interface Props {

}

const ApplicationForm: FC<Props> = observer(() => {
  const { itemIdToChange } = profileStore;
  const [values, setValues] = useState<IFormValues>(initialValues);
  const handleSubmit = (itemIdToChange) 
    ? (values: IFormValues) => listStore.changeApplication(values)
    : (values: IFormValues) => listStore.addNewApplication(values);

  useEffect(() => {
    if (itemIdToChange) {
      const item = listStore.list.find(item => item.id === itemIdToChange);
      if (item) {
        setValues(item.userData);
      }
    } else {
      setValues(initialValues)
    }
    console.log(values);
  }, [itemIdToChange])

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className='application-form'>
        <div className='application-form__field'>
          <label htmlFor="title">Наименование компании</label>
          <Field type="text" id="title" name="title"  required />
          <ErrorMessage name="title" component="div" />
        </div>
        
        <div className="application-form__field-wrap">
          <div className='application-form__field'>
            <label htmlFor="lastName">Фамилия</label>
            <Field type="text" id="lastName" name="lastName" required />
            <ErrorMessage name="lastName" component="div" />
          </div>
          <div className='application-form__field'>
            <label htmlFor="firstName">Имя</label>
            <Field type="text" id="firstName" name="firstName" required />
            <ErrorMessage name="firstName" component="div" />
          </div>
          <div className='application-form__field'>
            <label htmlFor="patronym">Отчество</label>
            <Field type="text" id="patronym" name="patronym" />
            <ErrorMessage name="patronym" component="div" />
          </div>
        </div>
        
        <div className='application-form__field'>
          <label htmlFor="phone">Телефон</label>
          <Field type="tel" id="phone" name="phone" required />
          <ErrorMessage name="phone" component="div" />
        </div>

        <div className='application-form__field'>
          <label htmlFor="code">Ати-код</label>
          <Field type="text" id="code" name="code" required />
          <ErrorMessage name="code" component="div" />
        </div>
        
        <div className='application-form__field'>
          <label htmlFor="comment">Комментарий</label>
          <Field as="textarea" id="comment" name="comment" />
        </div>
        
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
});

export default ApplicationForm;
