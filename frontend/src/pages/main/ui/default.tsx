import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Drawer } from 'antd';

import { Routes } from '@/shared/utils/constants';
import { IssuesList } from '@/widgets';


export default function Default() {
   const [hasActivePage, setHasActivePage] = useState<boolean>(false);
   const location = useLocation();
   const navigate = useNavigate();

   const handlerOnClose = () => navigate(Routes.MAIN);

   useEffect(() => {
      setHasActivePage(!!location.pathname.split('/')[2]);
   }, [location.pathname]);

   return (
      <section className='default'>
         <IssuesList className='main__issues-list'/>
         <Drawer
            rootClassName='default__drawer'
            open={hasActivePage}
            onClose={handlerOnClose}>
            <Outlet />
         </Drawer>
      </section>
   );
}