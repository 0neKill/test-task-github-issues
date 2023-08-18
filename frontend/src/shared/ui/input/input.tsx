import {
   useId,
   type DetailedHTMLProps,
   type InputHTMLAttributes,
   type FC,
} from 'react';
import { clsx } from 'clsx';

import './styles.scss';

type InputProps = FC<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>

export const Input: InputProps = ({ className, children, ...args }) => {
   const id = useId();

   return (
      <div className='input'>
         <input id={id} className={clsx('input__wrapper', className)}
                {...args}
         />
         <label className='input__border' htmlFor={id} />
         {children}
      </div>
   );
};
