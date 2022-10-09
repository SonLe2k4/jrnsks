import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

interface IListNotificationPage {
    id: string;
    text: string;
    link: string;
}

type Props = {
    listNotificationPage: IListNotificationPage[];
};

const NotificationPage = (props: Props) => {
    const { listNotificationPage } = props;
    const renderListNotificationPage = useCallback(() => {
        return listNotificationPage.map((item) => (
            <li key={item.id}>
                <Link to={item.link}>{item.text}</Link>
            </li>
        ));
    }, [listNotificationPage]);
    return (
        <div className={style['notification-page']}>
            <ul>{renderListNotificationPage()}</ul>
        </div>
    );
};

export default NotificationPage;
