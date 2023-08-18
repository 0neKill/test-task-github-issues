import { Outlet, useLocation } from 'react-router-dom';

import { Navigator, IssueSearcher } from '@/widgets';
import { Layout, Logo, Container } from '@/shared/ui';
import { RockerImage } from '@/shared/utils/images';

import './styles.scss';

import { Routes } from '@/shared/utils/constants';


export default function Main() {

   const location = useLocation();

   return (
      <Layout className='main'
              headerContent={
                 <>
                    <Logo className='main__logo' image={<RockerImage />} titleLeft='Github ' titleRight='Issues' />
                    <Navigator className='main__navigator' />
                    {location.pathname === Routes.MAIN ?
                       <IssueSearcher className='main__issue-searcher' /> : null}
                 </>
              }
              bodyContent={<Outlet />}
      >
         {
            (content) => (
               <Container className='main__container'>
                  {content}
               </Container>
            )
         }
      </Layout>
   );
}


