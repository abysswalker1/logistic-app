'use client';
import profileStore from '@/store/profileStore';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import {PersonWorker} from '@gravity-ui/icons';
import './header.scss';
import {Button} from '@gravity-ui/uikit';

import cn from 'classnames';

const Header: FC = observer(() => {
  const {isAdminMode, toggleAdminMode} = profileStore;
  const view = isAdminMode ? 'normal' : 'outlined'; 
  const handleClick = () => {
    toggleAdminMode(!isAdminMode);
  }

  return (
    <header className='header'>
      <div className="container">
        <Button 
          className='header-admin' 
          onClick={() => handleClick()} 
          view={view}
          type='button'
        >
          <PersonWorker />
          admin
        </Button>
        <div className={cn('header-logo')}>
          Expert logistics 
        </div>
      </div>
    </header>
  );
});

export default Header;