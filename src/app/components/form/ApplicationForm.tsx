'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './applicationForm.css';

const ApplicationForm = () => {
  return (
    <Formik
      initialValues={{
        companyName: '',
        fullName: '',
        phone: '',
        comment: ''
      }}
      onSubmit={(values, actions) => {
        // Handle form submission logic here
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      <Form className='application-form'>
        <div className='application-form__label'>
          <label htmlFor="companyName">Наименование компании</label>
          <Field type="text" id="companyName" name="companyName" required />
          <ErrorMessage name="companyName" component="div" />
        </div>
        
        <div className='application-form__label'>
          <label htmlFor="fullName">ФИО</label>
          <Field type="text" id="fullName" name="fullName" required />
          <ErrorMessage name="fullName" component="div" />
        </div>
        
        <div className='application-form__label'>
          <label htmlFor="phone">Телефон</label>
          <Field type="tel" id="phone" name="phone" required />
          <ErrorMessage name="phone" component="div" />
        </div>
        
        <div className='application-form__label'>
          <label htmlFor="comment">Комментарий</label>
          <Field as="textarea" id="comment" name="comment" />
        </div>
        
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default ApplicationForm;
