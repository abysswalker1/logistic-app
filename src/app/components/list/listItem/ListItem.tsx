'use client';
import {FC, useState} from 'react';
import {IApplication} from '../../../../../types';
import Status from '../../status/Status';
import Date from '../../date/Date';
import ListItemDetails from '../details/ListItemDetails';
import cn from 'classnames';

interface Props {
    application: IApplication;
}

const ListItem: FC<Props> = ({application}) => {
    const [detailsOpened, setDetailsOpened] = useState(false);
    const className = cn('application-list__item', detailsOpened ? 'opened' : '');
    const toggleOpened = (value: boolean) => {
        setDetailsOpened(value);
    };
    const code = `https://ati.su/firms/${application.userData.code}/info`;

    return (
        <div className={className}>
            <div className="application-list__item-data">
                <h3 className="application-list__item-section">{application.userData.title}</h3>

                <div className="application-list__item-section item-name">
                    <span>{application.userData.firstName} </span>
                    <span>{application.userData.lastName} </span>
                    <span>{application.userData.patronym} </span>
                </div>

                <div className="application-list__item-section item-date">
                    <Date values={application.date} />
                </div>

                <div className="application-list__item-section item-status">
                    <Status value={application.status} />
                </div>

                <div className="application-list__item-section item-details">
                    <ListItemDetails
                        id={application.id}
                        value={detailsOpened}
                        toggleValue={toggleOpened}
                    />
                </div>
            </div>
            <div className="application-list__additional">
                <div className="application-list__item-section mobile-name">
                    <div className="application-list__additional-title">Ф.И.О. заказчика</div>
                    <p>
                        {application.userData.firstName + ' '}
                        {application.userData.lastName + ' '}
                        {application.userData.patronym + ' '}
                    </p>
                </div>

                <div className="application-list__item-section">
                    <div className="application-list__additional-title">Телефон</div>
                    <a href={`tel:${application.userData.phone}`}>{application.userData.phone}</a>
                </div>

                <div className="application-list__item-section item-code">
                    <div className="application-list__additional-title">ATI</div>
                    <a href={code}>{code}</a>
                </div>

                <div className="application-list__item-section item-comment">
                    <div className="application-list__additional-title">Комментарий</div>
                    <p>{application.userData.comment || '...'}</p>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
