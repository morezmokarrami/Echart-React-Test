import { useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../../Loading/SuspenseLoading";
const HomeDashboard = lazy(() => import('./HomeDashboard/HomeDashboard'))



const DashboardComponents = () => {

     const {pathname} = useLocation();

     const renderComponent = () => {
          switch (pathname) {
               case '/':
                    return <HomeDashboard />
               default:
                    return <></>
          }
     }


     return (
          <Suspense fallback={<Loading />}>
               {
                    renderComponent()
               }
          </Suspense>
     )
}

export default DashboardComponents;