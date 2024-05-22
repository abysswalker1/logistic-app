'use client';
import React from 'react';
import listStore from '@/store/listStore';
import { observer } from 'mobx-react-lite';
import './applicationList.scss';
import ListItem from './listItem/ListItem';

const ApplicationList = observer(() => {
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
            Статус заявки
          </div>
          <div className="application-list__item-section item-details">
            <strong>Кол-во: {list.length}</strong>
          </div>
        </div>
      </div>
      {list.map((item, index) => {
        return <ListItem application={item} key={'list-item' + index}/>
      })}
    </div>
  );
})

export default ApplicationList;