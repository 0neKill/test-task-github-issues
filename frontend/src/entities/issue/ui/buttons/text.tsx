import { FC } from 'react';
import { Button as ButtonWrapper } from 'antd';

import './styles.scss';

type ButtonProps = FC<{
   title: string,
   disabled?: boolean,
   loading?: boolean
   onClick: () => void,
}>
export const TextButton: ButtonProps = ({ title, onClick, disabled, loading }) => (
   <ButtonWrapper className='issue__btn--text' type='text' onClick={onClick}
                  loading={loading}
                  disabled={disabled}
   >
      {title}
   </ButtonWrapper>
);