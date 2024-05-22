import { FC } from 'react';
import { StatusType } from '../../../../types';
import cn from 'classnames';
import './status.scss';

interface Props {
  value: StatusType
}

const Status: FC<Props> = ({ value }) => {
  const className = cn('application-status', value);
  const text = {
    'new': 'Новая',
    'inProgress': 'В процессе',
    'completed': 'Завершенная'
  }

  return (
    <span className={className}>
      { text[value] }
    </span>
  );
};

export default Status;