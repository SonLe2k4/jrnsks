import { useState } from 'react';
import classNames from 'classnames/bind';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu';
import HeaderProvider from './HeaderProvider';
import { BsSearch, BsCart } from 'react-icons/bs';
import style from './style.module.scss';
import Social from '../common/Social/Social';
import Input from '../common/Input';

const cx = classNames.bind(style);
interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
    const [isSearchDisplay, setIsSearchDisplay] = useState<boolean>(false);
    const [keywordsSearch, setKeywordsSearch] = useState<string>('');
    return (
        <HeaderProvider>
            <div className={style['wp-header']}>
                <div className={style['header-left']}>
                    <Logo />
                    <Menu />
                </div>
                <div className={style['header-right']}>
                    <div className={style['wrapper-social-search']}>
                        <div className={cx('ll', isSearchDisplay && 'isSearchDisplay')}>
                            <Social className={cx('social')} />
                            <Input
                                value={keywordsSearch}
                                onChange={(v) => setKeywordsSearch(v)}
                                className={cx('input-search')}
                                placeholder='Search Keyword'
                                button={true}
                                onClickBtnRightInput={() => {
                                    alert('Search: ' + keywordsSearch);
                                }}
                            />
                        </div>
                    </div>
                    <div className={style['header-search']}>
                        <ul className={cx('flex_center')}>
                            <li
                                className={cx('flex_center', 'search')}
                                onClick={() => setIsSearchDisplay((prev) => !prev)}
                            >
                                <div className={cx('icon')}>
                                    <BsSearch />
                                </div>
                            </li>
                            <li className={cx('flex_center', 'cart')}>
                                <div className={cx('icon')}>
                                    <BsCart />
                                </div>
                                <span className={cx('quantity')}>0</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </HeaderProvider>
    );
};

export default Header;
