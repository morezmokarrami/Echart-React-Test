import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { DashboardOptions } from "../../../interfaces/DashboardInterfaces"
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import menuLanguage from '../../../helpers/menuLanguage'
import { useAppDispatch } from "../../../hooks/reduxHook";
import { SET_HAMBURGER_MENU_STATE } from "../../../redux/slices/mainSlice";


const DashboardSecondOptions = () => {


     const { pathname } = useLocation();
     const navigate = useNavigate();
     const dispatch = useAppDispatch()
     //put svg to change color for scale 
     const firstOptions: DashboardOptions[] = [
          {
               title: 'مخزن تمرین‌ها',
               url: '/exercises',
               icon: <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.69275 6H7.8466V8.76923H3.69275V6Z" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.84659 19.8462L8.9949 15.2548C9.13672 14.6869 8.90611 14.0912 8.4189 13.7668C7.61157 13.2287 7.06319 12.3802 6.90413 11.4231L6.46198 8.76923H7.84659V6C7.84659 5.2353 8.4665 4.61538 9.23121 4.61538H14.7697C15.5344 4.61538 16.1543 5.2353 16.1543 6V10.8462C16.1322 11.7675 15.9627 12.6794 15.6521 13.5471C15.5274 14.0465 15.5274 14.5689 15.6521 15.0683L16.8466 19.8462" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.30814 2.53846C1.54344 2.53846 0.923523 3.15837 0.923523 3.92308V11.5385C0.923523 12.3032 1.54344 12.9231 2.30814 12.9231C3.07284 12.9231 3.69275 12.3032 3.69275 11.5385V3.92308C3.69275 3.15837 3.07284 2.53846 2.30814 2.53846Z" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.3081 2.53846C19.5434 2.53846 18.9235 3.15837 18.9235 3.92308V11.5385C18.9235 12.3032 19.5434 12.9231 20.3081 12.9231C21.0728 12.9231 21.6928 12.3032 21.6928 11.5385V3.92308C21.6928 3.15837 21.0728 2.53846 20.3081 2.53846Z" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.1543 6H18.9235V8.76923H16.1543V6Z" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.6158 7.38461V4.61538" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.3851 7.38461V4.61538" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
          },
          {
               title: 'استراتژی',
               url: '/strategy',
               icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_270_217)">
                         <path d="M6 21C7.10457 21 8 20.1046 8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21Z" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                         <path d="M18 7C19.1046 7 20 6.10457 20 5C20 3.89543 19.1046 3 18 3C16.8954 3 16 3.89543 16 5C16 6.10457 16.8954 7 18 7Z" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                         <path d="M12 19H16.5C17.4283 19 18.3185 18.6313 18.9749 17.9749C19.6313 17.3185 20 16.4283 20 15.5C20 14.5717 19.6313 13.6815 18.9749 13.0251C18.3185 12.3687 17.4283 12 16.5 12H8.5C7.57174 12 6.6815 11.6313 6.02513 10.9749C5.36875 10.3185 5 9.42826 5 8.5C5 7.57174 5.36875 6.6815 6.02513 6.02513C6.6815 5.36875 7.57174 5 8.5 5H12" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                         <clipPath id="clip0_270_217">
                              <rect width="24" height="24" fill="white" />
                         </clipPath>
                    </defs>
               </svg>
          },
          {
               title: 'تنظیمات',
               url: '/setting',
               icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <mask id="mask0_270_225" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                         <path fillRule="evenodd" clipRule="evenodd" d="M0 0.000499725H19.2849V20.7215H0V0.000499725Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_270_225)">
                         <path fillRule="evenodd" clipRule="evenodd" d="M5.2022 15.4405C5.4312 15.4405 5.6602 15.4695 5.8842 15.5295C6.5602 15.7115 7.1472 16.1635 7.4952 16.7705C7.7212 17.1515 7.8462 17.5965 7.8502 18.0505C7.8502 18.7005 8.3722 19.2215 9.0142 19.2215H10.2672C10.9062 19.2215 11.4282 18.7035 11.4312 18.0645C11.4272 17.3585 11.7032 16.6875 12.2082 16.1825C12.7062 15.6845 13.4022 15.3855 14.0982 15.4055C14.5542 15.4165 14.9932 15.5395 15.3802 15.7595C15.9372 16.0785 16.6482 15.8885 16.9702 15.3385L17.6342 14.2315C17.7822 13.9765 17.8252 13.6565 17.7462 13.3615C17.6682 13.0665 17.4722 12.8105 17.2082 12.6595C16.5902 12.3035 16.1492 11.7295 15.9662 11.0415C15.7852 10.3665 15.8842 9.6295 16.2372 9.0225C16.4672 8.6225 16.8042 8.2855 17.2082 8.0535C17.7502 7.7365 17.9402 7.0275 17.6252 6.4755C17.6122 6.4535 17.6002 6.4305 17.5902 6.4065L17.0042 5.3905C16.6852 4.8355 15.9752 4.6445 15.4182 4.9615C14.8162 5.3175 14.1002 5.4195 13.4122 5.2385C12.7252 5.0605 12.1492 4.6255 11.7902 4.0115C11.5602 3.6275 11.4352 3.1805 11.4312 2.7255C11.4402 2.3835 11.3202 2.0765 11.1022 1.8515C10.8852 1.6275 10.5802 1.5005 10.2672 1.5005H9.0142C8.7042 1.5005 8.4142 1.6215 8.1952 1.8395C7.9772 2.0585 7.8582 2.3495 7.8602 2.6595C7.8392 4.1215 6.6442 5.2985 5.1972 5.2985C4.7332 5.2935 4.2862 5.1685 3.8982 4.9365C3.3532 4.6265 2.6412 4.8175 2.3222 5.3725L1.6452 6.4855C1.3352 7.0235 1.5252 7.7345 2.0772 8.0555C2.8962 8.5295 3.4072 9.4135 3.4072 10.3615C3.4072 11.3095 2.8962 12.1925 2.0752 12.6675C1.5262 12.9855 1.3362 13.6925 1.6542 14.2425L2.2852 15.3305C2.4412 15.6115 2.6962 15.8145 2.9912 15.8975C3.2852 15.9795 3.6092 15.9445 3.8792 15.7945C4.2762 15.5615 4.7382 15.4405 5.2022 15.4405ZM10.2672 20.7215H9.0142C7.5452 20.7215 6.3502 19.5275 6.3502 18.0585C6.3482 17.8775 6.2962 17.6895 6.1992 17.5265C6.0422 17.2525 5.7882 17.0565 5.4952 16.9785C5.2042 16.9005 4.8852 16.9435 4.6232 17.0955C3.9952 17.4455 3.2562 17.5305 2.5802 17.3405C1.9052 17.1495 1.3222 16.6855 0.980198 16.0705L0.355198 14.9935C-0.375802 13.7255 0.0591976 12.1005 1.3252 11.3685C1.6842 11.1615 1.9072 10.7755 1.9072 10.3615C1.9072 9.9475 1.6842 9.5605 1.3252 9.3535C0.0581977 8.6175 -0.375802 6.9885 0.354198 5.7205L1.0322 4.6075C1.7532 3.3535 3.3832 2.9115 4.6542 3.6415C4.8272 3.7445 5.0152 3.7965 5.2062 3.7985C5.8292 3.7985 6.3502 3.2845 6.3602 2.6525C6.3562 1.9555 6.6312 1.2865 7.1322 0.7815C7.6352 0.2775 8.3032 0.000499725 9.0142 0.000499725H10.2672C10.9832 0.000499725 11.6792 0.2945 12.1782 0.8055C12.6762 1.3195 12.9512 2.0245 12.9302 2.7395C12.9322 2.9005 12.9852 3.0865 13.0812 3.2495C13.2402 3.5195 13.4912 3.7095 13.7892 3.7875C14.0872 3.8615 14.3992 3.8215 14.6642 3.6645C15.9442 2.9335 17.5732 3.3715 18.3042 4.6415L18.9272 5.7205C18.9432 5.7495 18.9572 5.7775 18.9692 5.8065C19.6312 7.0575 19.1892 8.6325 17.9592 9.3515C17.7802 9.4545 17.6352 9.5985 17.5352 9.7725C17.3802 10.0415 17.3372 10.3615 17.4152 10.6555C17.4952 10.9555 17.6862 11.2045 17.9552 11.3585C18.5622 11.7075 19.0152 12.2955 19.1962 12.9745C19.3772 13.6525 19.2782 14.3885 18.9252 14.9955L18.2612 16.1015C17.5302 17.3575 15.9012 17.7925 14.6342 17.0605C14.4652 16.9635 14.2702 16.9105 14.0762 16.9055H14.0702C13.7812 16.9055 13.4842 17.0285 13.2682 17.2435C13.0492 17.4625 12.9292 17.7545 12.9312 18.0645C12.9242 19.5335 11.7292 20.7215 10.2672 20.7215Z" fill="black" />
                    </g>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.64509 8.4746C8.60509 8.4746 7.75909 9.3216 7.75909 10.3616C7.75909 11.4016 8.60509 12.2466 9.64509 12.2466C10.6851 12.2466 11.5311 11.4016 11.5311 10.3616C11.5311 9.3216 10.6851 8.4746 9.64509 8.4746ZM9.64509 13.7466C7.77809 13.7466 6.25909 12.2286 6.25909 10.3616C6.25909 8.4946 7.77809 6.9746 9.64509 6.9746C11.5121 6.9746 13.0311 8.4946 13.0311 10.3616C13.0311 12.2286 11.5121 13.7466 9.64509 13.7466Z" fill="black" />
               </svg>
          },
          {
               title: 'آخرین فعالیت‌ها',
               url: '/activities',
               icon: <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
                    <mask id="mask0_270_237" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="18">
                         <path fillRule="evenodd" clipRule="evenodd" d="M6.10352e-05 0H18.497V17.348H6.10352e-05V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_270_237)">
                         <path fillRule="evenodd" clipRule="evenodd" d="M9.24707 1.5C5.75207 1.5 3.31607 4.238 3.31607 6.695C3.31607 8.774 2.73907 9.735 2.22907 10.583C1.82007 11.264 1.49707 11.802 1.49707 12.971C1.66407 14.857 2.90907 15.848 9.24707 15.848C15.5501 15.848 16.8341 14.813 17.0001 12.906C16.9971 11.802 16.6741 11.264 16.2651 10.583C15.7551 9.735 15.1781 8.774 15.1781 6.695C15.1781 4.238 12.7421 1.5 9.24707 1.5ZM9.24707 17.348C4.57107 17.348 0.345074 17.018 7.43898e-05 13.035C-0.00292561 11.387 0.500074 10.549 0.944074 9.811C1.39307 9.063 1.81607 8.358 1.81607 6.695C1.81607 3.462 4.80207 0 9.24707 0C13.6921 0 16.6781 3.462 16.6781 6.695C16.6781 8.358 17.1011 9.063 17.5501 9.811C17.9941 10.549 18.4971 11.387 18.4971 12.971C18.1481 17.018 13.9231 17.348 9.24707 17.348Z" fill="black" />
                    </g>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.19827 21.5H9.19627C8.07527 21.499 7.01427 21.005 6.20927 20.108C5.93227 19.801 5.95727 19.326 6.26527 19.05C6.57327 18.772 7.04727 18.797 7.32427 19.106C7.84227 19.683 8.50727 20 9.19727 20H9.19827C9.89127 20 10.5593 19.683 11.0783 19.105C11.3563 18.798 11.8303 18.773 12.1373 19.05C12.4453 19.327 12.4703 19.802 12.1933 20.109C11.3853 21.006 10.3223 21.5 9.19827 21.5Z" fill="black" />
               </svg>
          }
     ]

     const onNavigateHandler = (url: string) => {
          dispatch(SET_HAMBURGER_MENU_STATE(false))
          navigate(url)
     }

     const [searchParams] = useSearchParams();
     const lng = searchParams.get('lng');
     const { t } = useTranslation();
     useEffect(() => {
          console.log(lng);

          if (lng) {
               menuLanguage.changeLanguage(lng)
          }
     }, [lng])


     return (
          <>
               {
                    firstOptions.map((value, index) => {
                         return (
                              <div onClick={() => onNavigateHandler(value.url)} className={pathname === value.url ? "px-8 py-4 mx-3 bg-s-red rounded-xl transition-all ease-linear duration-100 flex justify-end items-center my-2" : "px-8 py-4 mx-3 flex justify-end items-center my-2 rounded-xl cursor-pointer transition-all ease-linear duration-100 hover:text-p-red hover:bg-s-red"} key={index.toString()}>
                                   <div className={`${pathname === value.url ? 'text-p-red' : null} me-3 text-sm whitespace-nowrap`}>
                                        {t(value.title)}
                                   </div>
                                   <div>
                                        {value.icon}
                                   </div>
                              </div>
                         )
                    })
               }
          </>
     )
}

export default DashboardSecondOptions;