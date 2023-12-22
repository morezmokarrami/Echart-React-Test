import logo from '../../../assets/images/Dashboard/TP- LOGO 1 (1).png'
import DashboardFirstOptions from "./DashboardFirstOptions";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHook";
import { SET_HAMBURGER_MENU_STATE } from "../../../redux/slices/mainSlice";
import DashboardSecondOptions from './DashboardSecondOptions';





const DashboardMenuControllers = () => {

     const { hamburgerMenuState } = useAppSelector(state => state.main)     
     const dispatch = useAppDispatch();
     const handleMenuState = () => dispatch(SET_HAMBURGER_MENU_STATE(!hamburgerMenuState))
     


     return (
          <div className={hamburgerMenuState ? "lg:block flex flex-row-reverse fixed top-0 right-0 lg:static transition-all ease-linear duration-[350ms] w-screen " : "flex flex-row-reverse lg:block lg:static fixed top-0 -right-full transition-all ease-linear duration-[350ms] w-screen"}>
               <div className={"bg-white h-screen rounded-tl-3xl rounded-bl-3xl w-[60%] lg:w-1/6 z-10"}>
                    <div className="flex justify-center items-center py-8">
                         <img src={logo} className="w-[50px] h-[32px] object-contain" alt="" />
                    </div>
                    <>
                         <DashboardFirstOptions />
                    </>
                    <div className='border-b mx-3'>

                    </div>
                    <>
                         <DashboardSecondOptions />
                    </>
               </div>
               <div onClick={handleMenuState} className={hamburgerMenuState ? "w-[40%] fadeIn h-screen z-10 lg:hidden" : "w-[40%] fadeOut h-screen z-10 lg:hidden"} style={{backgroundColor: 'rgba(0, 0, 0, 0.60)'}}>

               </div>
          </div>
     )
}

export default DashboardMenuControllers;