'use client';
import {FC} from 'react';
import withAdminMode from '../../_high-order/withAdminMode'
import PencilToLineIcon from '@gravity-ui/icons/svgs/pencil-to-line.svg';
import TrashBinIcon from '@gravity-ui/icons/svgs/trash-bin.svg';
import Image from 'next/image';
import listStore from '@/store/listStore';
import { observer } from 'mobx-react-lite';
import './ListItemDetails.scss';
import profileStore from '@/store/profileStore';
import {Button} from '@gravity-ui/uikit';

interface Props {
  id: string
}

const ListItemDetails: FC<Props> = observer(({ id }) => {
  const { removeApplication } = listStore;
  const { setItemIdToChange } = profileStore;

  return (
    <>
      <Button onClick={() => setItemIdToChange(id)} type="button">
        <Image src={PencilToLineIcon} alt=""/>
      </Button>
      <Button view="outlined-danger" className='details-delete' type="button" onClick={() => removeApplication(id)}>
        <Image src={TrashBinIcon} alt=""/>
      </Button>
    </>
  );
})

export default withAdminMode(ListItemDetails);