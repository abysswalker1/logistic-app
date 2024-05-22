import { makeAutoObservable } from "mobx";
import { IApplication, IFormValues } from "../../types";
import {v4 as uuid} from 'uuid';
import getCurrentDate from '@/utils/getCurrentDate';
import profileStore from "./profileStore";

class ListStore {
  constructor() {
    makeAutoObservable(this);
  }
  
  public list : IApplication[] = [
    {
      id: '1',
      userData: {
        title: 'Мувит Мувит', 
        firstName: 'Василий', 
        lastName: 'Иванов', 
        patronym: 'Михайлович',
        phone: '7 (902) 111 11 11',
        code: '12345',
      },  
      date: {
        day: 20,
        month: 12,
        year: 2022
      },
      status: 'completed'
    },
    {
      id: '2',
      userData: {
        title: 'Том Груз', 
        firstName: 'Иван', 
        lastName: 'Виноградов', 
        patronym: 'Васильевич',
        phone: '7 (902) 111 11 11',
        code: '12345',
      }, 
      date: {
        day: 10,
        month: 20,
        year: 2022
      },
      status: 'completed'
    },
    {
      id: '3',
      userData: {
        title: 'Expert Logistics', 
        firstName: 'Владислав', 
        lastName: 'Филиппов', 
        patronym: 'Михайлович',
        phone: '7 (902) 111 11 11',
        code: '12345',
      }, 
      date: {
        day: 4,
        month: 5,
        year: 2024
      },
      status: 'new'
    },
  ];

  addNewApplication = (values: IFormValues) => {
    const newApplication: IApplication = {
      userData: values,
      date: getCurrentDate(),
      status: 'new',  
      id: uuid()
    };
    this.list.unshift(newApplication);
  }

  changeApplication = (values: IFormValues) => {
    const id = profileStore.itemIdToChange;
    const itemToChange = this.list.find(item => item.id === id);

    if (itemToChange) {
      itemToChange.userData = values;
      itemToChange.status = 'inProgress';
      itemToChange.date = getCurrentDate();
    }
  }

  removeApplication = (id: string) => {
    this.list = this.list.filter(item => item.id != id);
  }
}

export default new ListStore();