import classNames from 'classnames/bind';
import style from './style.module.scss';

type Props = {}

const cx = classNames.bind(style);
const ItemComment = (props: Props) => {
  return (
    <div className={cx('wrapper-item-comment')}>
        This is comment
    </div>
  )
}

export default ItemComment