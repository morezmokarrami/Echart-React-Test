import React, { Suspense, lazy } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHook";
import { SET_HAMBURGER_MENU_STATE } from "../../../redux/slices/mainSlice";
const DashboardMenuControllers = lazy(() => import('./DashboardMenuControllers'))


const DashboardMenu: React.FC = () => {

     const { hamburgerMenuState } = useAppSelector(state => state.main)     
     const dispatch = useAppDispatch();
     const handleMenuState = () => dispatch(SET_HAMBURGER_MENU_STATE(!hamburgerMenuState))

     return (
          <>
               <Suspense fallback={'Loading...'}>
                    <aside className="hidden lg:block">
                         <DashboardMenuControllers />
                    </aside>
                    <div className="relative lg:hidden overflow-hidden z-30">
                         <div className="flex justify-between items-center mt-4 border-b pb-4">
                              <div className="ml-4" onClick={handleMenuState}>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M22 3H4V5H22V3Z" fill="#616161" />
                                        <path d="M22 19H4V21H22V19Z" fill="#616161" />
                                        <path d="M22 11H4V13H22V11Z" fill="#616161" />
                                   </svg>
                              </div>
                              <div className="text-xl mr-4">
                                   ورزشکاران من
                              </div>
                         </div>
                         <DashboardMenuControllers />
                    </div>
               </Suspense>
          </>
     )
}

export default DashboardMenu;