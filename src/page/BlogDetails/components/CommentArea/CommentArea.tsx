import classNames from 'classnames/bind';
import ItemComment from './components/ItemComment';
import style from './style.module.scss';
type Props = {
    data: [{
        avatarSrc: string,
        name: string,
    }]
};
const cx = classNames.bind(style);
const CommentArea = (props: Props) => {
    const { data } = props;
    if(!data) return `There isn't anything`
    return (
        <div className={cx('wrapper-comment-area')}>
            <h4 className={cx('quantity')}>
                { String(data.length).length === 1 ? `0${data.length} Comments` : `${data.length} Comments`}
            </h4>
            <ItemComment />
        </div>
    );
};

export default CommentArea;
