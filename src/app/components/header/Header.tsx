'use client';
import profileStore from '@/store/profileStore';
import { observer } from 'mobx-react-lite';
import React from 'react';
import {Avatar, Button} from '@gravity-ui/uikit';
import PersonWorkerIcon from '@gravity-ui/icons/svgs/person-worker.svg';
import Image from 'next/image';

const Header = observer(() => {
  const {isAdminMode, toggleAdminMode} = profileStore;
  const handleClick = () => {
    toggleAdminMode(!isAdminMode);
  }

  return (
    <header>
      <div className="container">
        <button onClick={() => handleClick()}>
          <Avatar icon={PersonWorkerIcon}/>
        </button>
      </div>
    </header>
  );
});

export default Header;