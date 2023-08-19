import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Container } from '@/shared/ui';

import './styles.scss';

export default function Error() {
   const navigate = useNavigate();

   return (
      <Container className='error__container'>
         <Result
            prefixCls='error'
            status='404'
            title='404'
            subTitle='Sorry, the page you visited does not exist.'
            extra={<Button className='error__btn' type='primary' onClick={() => navigate('/')}>Back Home</Button>}
         />
      </Container>
   );
}


