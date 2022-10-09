import classNames from 'classnames/bind';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import style from './style.module.scss';
type Props = {
    button?: boolean;
    placeholder?: string;
    contentButtonLargeBottom?: string;
};
const cx = classNames.bind(style);
const Input = (props: Props) => {
    const { button, placeholder, contentButtonLargeBottom } = props;
    return (
        <div className={cx('wrapper-all')}>
            <div className={cx('wrapper-input')}>
                <input type='text' placeholder={placeholder ? placeholder : 'Search Keyword'} />

                {button && (
                    <button>
                        <BsSearch />
                    </button>
                )}
            </div>

            {contentButtonLargeBottom && (
                <button className={cx('button-large', 'reset-btn')}>{contentButtonLargeBottom}</button>
            )}
        </div>
    );
};

export default Input;
