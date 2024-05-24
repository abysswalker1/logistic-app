'use client';
import {FC} from 'react';
import listStore from '@/store/listStore';
import { observer } from 'mobx-react-lite';
import './applicationList.scss';
import ListItem from './listItem/ListItem';

const ApplicationList: FC = observer(() => {
  const list = listStore.list;

  if (list.length <= 0) {
    return <p className='application-list__zero'>Пока нет заявок</p>
  } 
    
  return (
    <div className='application-list'>
      <div className="application-list__head">
        <div className="application-list__item-data">
          <div className="application-list__item-section">
            Название компании
          </div>
          <div className="application-list__item-section item-name">
            Ф.И.О
          </div>
          <div className="application-list__item-section item-date">
            Дата
          </div>
          <div className="application-list__item-section item-status">
            Статус
          </div>
          <div className="application-list__item-section item-details">
            <p>Кол-во: {list.length}</p>
          </div>
        </div>
      </div>
      {list.map(item => {
        return <ListItem application={item} key={'list-item' + item.id}/>
      })}
    </div>
  );
})

export default ApplicationList;