'use client';
import {FC, useState, useRef} from 'react';
import {PencilToLine} from '@gravity-ui/icons';
import {TrashBin} from '@gravity-ui/icons';
import listStore from '@/store/listStore';
import {observer} from 'mobx-react-lite';
import profileStore from '@/store/profileStore';
import {Button} from '@gravity-ui/uikit';
import {Ellipsis} from '@gravity-ui/icons';
import {Popup, Menu} from '@gravity-ui/uikit';
import './ListItemDetails.scss';

interface Props {
    id: string;
    toggleValue: (value: boolean) => void;
    value: boolean;
}

const ListItemDetails: FC<Props> = observer((props) => {
    const [popupOpened, setPopupOpened] = useState(false);
    const {removeApplication} = listStore;
    const {isAdminMode, setItemIdToChange} = profileStore;
    const popupBtnRef = useRef(null);

    const openPopup = () => {
        setPopupOpened(!popupOpened);
    };

    return (
        <div className="details">
            <div className="details-desktop">
                <button
                    className="item-details__btn"
                    onClick={() => props.toggleValue(!props.value)}
                >
                    <span className="item-details__text">Подробнее</span>
                    <Ellipsis className="item-details__mobile" />
                </button>
                {isAdminMode && (
                  <>
                    <Button
                        view="outlined"
                        size="s"
                        onClick={() => setItemIdToChange(props.id)}
                        type="button"
                    >
                        <PencilToLine />
                    </Button>
                    <Button
                        view="outlined-danger"
                        size="s"
                        type="button"
                        onClick={() => removeApplication(props.id)}
                    >
                        <TrashBin />
                    </Button>
                  </>
                )}
            </div>

            <button className="details-mobile" ref={popupBtnRef} onClick={openPopup}>
                <Ellipsis />
            </button>

            <Popup
                className="details-mobile__popup"
                anchorRef={popupBtnRef}
                open={popupOpened}
                onOutsideClick={() => setPopupOpened(false)}
            >
                <Menu>
                    <Menu.Item
                         className="details-mobile__popup-btn "
                         onClick={() => props.toggleValue(!props.value)}
                    >
                        Подробно
                    </Menu.Item>
                    {
                    isAdminMode && (
                        <>
                        <Menu.Item
                            className="details-mobile__popup-btn"
                            onClick={() => setItemIdToChange(props.id)}
                        >
                            Редактировать
                        </Menu.Item>
                        <Menu.Item
                            theme='danger'
                            className="details-mobile__popup-btn details-mobile__popup-delete"
                            onClick={() => removeApplication(props.id)}
                        >
                            Удалить
                        </Menu.Item>
                        </>
                    )}
                </Menu>
            </Popup>
        </div>
    );
});

export default ListItemDetails;
