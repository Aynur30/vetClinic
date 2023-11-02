import { FC, useState } from 'react';
import { Collapse } from 'antd';
import classNames from 'classnames/bind';
import { setStyle } from '../../utils/utils';
import { useTheme } from '../../app/providers/ThemeProvide';
import Button from '../../shared/ui/Button/Button';

import { PetsCollapseProps } from './info';
import style from './PetsCollapse.module.scss'


const PetsCollapse: FC<PetsCollapseProps> = ({ data }) => {
  const { theme } = useTheme();

  const [expandItem, setExpandItem] = useState({});

  const onChange = (keys: string | string[]) => {
    setExpandItem(Number(...keys));
  }

  const cx = classNames.bind(style);

  const buttonStyle = {
    width: '125px',
    height: '30px',
    borderRadius: '3px',
    color: 'white',
    fontSize: '11px',
  };

  return (
    <Collapse accordion bordered={false} expandIconPosition='end' onChange={(keys) => onChange(keys)}
      className={setStyle(theme, style['ant-collapse'], `${style['ant-collapse']} ${style['ant-collapse-dark']} ${style['ant-collapse-header-text']}`)}
      items={data.map((item) => ({
        key: item.id,
        label: item.name,
        children: <>
          <Button text='Редактировать' image='/src/assets/icons/edit-btn.svg' styleBtn={{ ...buttonStyle, backgroundColor: 'rgba(84, 150, 212, 1)' }} />
          <Button text='Удалить' image='/src/assets/icons/delete-btn.svg' styleBtn={{ ...buttonStyle, backgroundColor: 'rgba(232, 69, 77, 1)' }} />
        </>,
        headerClass: cx({ 'ant-collapse-header-active': expandItem === item.id }),
        extra: <img className={cx('collapse-img', { 'collapse-img-active': expandItem === item.id })} src={item.avatar || '/src/assets/icons/pet-avatar-default.svg'} alt="avatar" />
      }))}
    />
  )
}

export default PetsCollapse;