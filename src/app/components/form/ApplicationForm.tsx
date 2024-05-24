'use client';
import {FC, useEffect} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import './applicationForm.scss';
import listStore from '@/store/listStore';
import {IFormValues} from '../../../../types';
import {observer} from 'mobx-react-lite';
import profileStore from '@/store/profileStore';
import {Button} from '@gravity-ui/uikit';
import {Xmark} from '@gravity-ui/icons';
import withAdminMode from '../_high-order/withAdminMode';

const initialValues: IFormValues = {
    title: '',
    firstName: '',
    lastName: '',
    patronym: '',
    phone: '',
    comment: '',
    code: '',
};

const ApplicationForm: FC = observer(() => {
    const {itemIdToChange, setItemIdToChange} = profileStore;

    const handleSubmit = (values: IFormValues) => {
        if (itemIdToChange) {
            listStore.changeApplication(values);
        } else {
            listStore.addNewApplication(values);
        }
        resetForm();
    };

    const resetForm = () => {
        setItemIdToChange(null);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {(props) => {
                useEffect(() => {
                    if (itemIdToChange) {
                        const item = listStore.list.find((item) => item.id === itemIdToChange);
                        if (item) {
                            const data = item.userData;
                            props.setValues(data);
                        }
                    } else {
                        props.setValues(initialValues);
                    }
                }, [itemIdToChange]);

                return (
                    <Form className="application-form">
                        <div className="application-form__field">
                            <label htmlFor="title">Наименование компании</label>
                            <Field type="text" id="title" name="title" required />
                            <ErrorMessage name="title" component="div" />
                        </div>

                        <div className="application-form__field-wrap">
                            <div className="application-form__field">
                                <label htmlFor="lastName">Фамилия</label>
                                <Field
                                    value={props.values.lastName}
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    required
                                />
                                <ErrorMessage name="lastName" component="div" />
                            </div>
                            <div className="application-form__field">
                                <label htmlFor="firstName">Имя</label>
                                <Field
                                    value={props.values.firstName}
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    required
                                />
                                <ErrorMessage name="firstName" component="div" />
                            </div>
                            <div className="application-form__field">
                                <label htmlFor="patronym">Отчество</label>
                                <Field
                                    value={props.values.patronym}
                                    type="text"
                                    id="patronym"
                                    name="patronym"
                                />
                                <ErrorMessage name="patronym" component="div" />
                            </div>
                        </div>

                        <div className="application-form__field">
                            <label htmlFor="phone">Телефон</label>
                            <Field
                                value={props.values.phone}
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                            />
                            <ErrorMessage name="phone" component="div" />
                        </div>

                        <div className="application-form__field">
                            <label htmlFor="code">Ати-код</label>
                            <Field
                                value={props.values.code}
                                type="text"
                                id="code"
                                name="code"
                                required
                            />
                            <ErrorMessage name="code" component="div" />
                        </div>

                        <div className="application-form__field">
                            <label htmlFor="comment">Комментарий</label>
                            <Field
                                value={props.values.comment}
                                as="textarea"
                                id="comment"
                                name="comment"
                            />
                        </div>

                        <div className="application-form__buttons">
                            <Button view="outlined-success" size="l" type="submit">
                                {itemIdToChange ? 'Изменить' : 'Добавить'}
                            </Button>

                            {itemIdToChange && (
                                <Button
                                    view="outlined-danger" 
                                    size="l"
                                    className="application-form__reset"
                                    onClick={resetForm}
                                    type="button"
                                >
                                    <Xmark />
                                </Button>
                            )}
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
});

export default withAdminMode(ApplicationForm);
