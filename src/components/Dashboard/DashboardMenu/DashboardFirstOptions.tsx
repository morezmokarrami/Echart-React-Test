import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { DashboardOptions } from "../../../interfaces/DashboardInterfaces"
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import menuLanguage from "../../../helpers/menuLanguage";
import { useAppDispatch } from "../../../hooks/reduxHook";
import { SET_HAMBURGER_MENU_STATE } from "../../../redux/slices/mainSlice";





const DashboardFirstOptions = () => {


     const { pathname } = useLocation();
     const [searchParams] = useSearchParams();
     const lng = searchParams.get('lng');
     const navigate = useNavigate();
     const { t } = useTranslation();
     const dispatch = useAppDispatch()


     //put svg to change color for scale 
     const firstOptions: DashboardOptions[] = [
          {
               title: 'خانه',
               url: '/',
               icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.13478 18.7733V15.7156C7.13478 14.9351 7.77217 14.3023 8.55844 14.3023H11.4326C11.8102 14.3023 12.1723 14.4512 12.4393 14.7163C12.7063 14.9813 12.8563 15.3408 12.8563 15.7156V18.7733C12.8539 19.0978 12.9821 19.4099 13.2124 19.6402C13.4427 19.8705 13.7561 20 14.0829 20H16.0438C16.9596 20.0023 17.8388 19.6428 18.4872 19.0008C19.1356 18.3588 19.5 17.487 19.5 16.5778V7.86686C19.5 7.13246 19.1721 6.43584 18.6046 5.96467L11.934 0.675869C10.7737 -0.251438 9.11111 -0.221498 7.98539 0.746979L1.46701 5.96467C0.872741 6.42195 0.517552 7.12064 0.5 7.86686V16.5689C0.5 18.4639 2.04738 20 3.95617 20H5.87229C6.55123 20 7.103 19.4562 7.10792 18.7822L7.13478 18.7733Z" fill={"#FF0072"} />
               </svg>
          },
          {
               title: 'تقویم',
               url: '/calender',
               icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.6665 8.9043H0.842529C0.428529 8.9043 0.0925293 8.5683 0.0925293 8.1543C0.0925293 7.7403 0.428529 7.4043 0.842529 7.4043H18.6665C19.0805 7.4043 19.4165 7.7403 19.4165 8.1543C19.4165 8.5683 19.0805 8.9043 18.6665 8.9043Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.2012 12.8096C13.7872 12.8096 13.4472 12.4736 13.4472 12.0596C13.4472 11.6456 13.7782 11.3096 14.1922 11.3096H14.2012C14.6152 11.3096 14.9512 11.6456 14.9512 12.0596C14.9512 12.4736 14.6152 12.8096 14.2012 12.8096Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.7637 12.8096C9.3497 12.8096 9.0097 12.4736 9.0097 12.0596C9.0097 11.6456 9.3407 11.3096 9.7547 11.3096H9.7637C10.1777 11.3096 10.5137 11.6456 10.5137 12.0596C10.5137 12.4736 10.1777 12.8096 9.7637 12.8096Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.31689 12.8096C4.90289 12.8096 4.56189 12.4736 4.56189 12.0596C4.56189 11.6456 4.89389 11.3096 5.30789 11.3096H5.31689C5.73089 11.3096 6.06689 11.6456 6.06689 12.0596C6.06689 12.4736 5.73089 12.8096 5.31689 12.8096Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.2012 16.6963C13.7872 16.6963 13.4472 16.3603 13.4472 15.9463C13.4472 15.5323 13.7782 15.1963 14.1922 15.1963H14.2012C14.6152 15.1963 14.9512 15.5323 14.9512 15.9463C14.9512 16.3603 14.6152 16.6963 14.2012 16.6963Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.7637 16.6963C9.3497 16.6963 9.0097 16.3603 9.0097 15.9463C9.0097 15.5323 9.3407 15.1963 9.7547 15.1963H9.7637C10.1777 15.1963 10.5137 15.5323 10.5137 15.9463C10.5137 16.3603 10.1777 16.6963 9.7637 16.6963Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.31689 16.6963C4.90289 16.6963 4.56189 16.3603 4.56189 15.9463C4.56189 15.5323 4.89389 15.1963 5.30789 15.1963H5.31689C5.73089 15.1963 6.06689 15.5323 6.06689 15.9463C6.06689 16.3603 5.73089 16.6963 5.31689 16.6963Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.7935 4.791C13.3795 4.791 13.0435 4.455 13.0435 4.041V0.75C13.0435 0.336 13.3795 0 13.7935 0C14.2075 0 14.5435 0.336 14.5435 0.75V4.041C14.5435 4.455 14.2075 4.791 13.7935 4.791Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.71527 4.791C5.30127 4.791 4.96527 4.455 4.96527 4.041V0.75C4.96527 0.336 5.30127 0 5.71527 0C6.12927 0 6.46527 0.336 6.46527 0.75V4.041C6.46527 4.455 6.12927 4.791 5.71527 4.791Z" fill="black" />
                    <mask id="mask0_171_154" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="1" width="20" height="21">
                         <path fillRule="evenodd" clipRule="evenodd" d="M0 1.5791H19.5V21.5H0V1.5791Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_171_154)">
                         <path fillRule="evenodd" clipRule="evenodd" d="M5.521 3.0791C2.928 3.0791 1.5 4.4621 1.5 6.9731V16.0221C1.5 18.5881 2.928 20.0001 5.521 20.0001H13.979C16.572 20.0001 18 18.6141 18 16.0981V6.9731C18.004 5.7381 17.672 4.7781 17.013 4.1181C16.335 3.4381 15.29 3.0791 13.988 3.0791H5.521ZM13.979 21.5001H5.521C2.116 21.5001 0 19.4011 0 16.0221V6.9731C0 3.6451 2.116 1.5791 5.521 1.5791H13.988C15.697 1.5791 17.11 2.0911 18.075 3.0581C19.012 3.9991 19.505 5.3521 19.5 6.9751V16.0981C19.5 19.4301 17.384 21.5001 13.979 21.5001Z" fill="black" />
                    </g>
               </svg>
          },
          {
               title: 'آنالیز',
               url: '/analyze',
               icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.12109 16.5625C5.70709 16.5625 5.37109 16.2265 5.37109 15.8125V8.95251C5.37109 8.53851 5.70709 8.20251 6.12109 8.20251C6.53509 8.20251 6.87109 8.53851 6.87109 8.95251V15.8125C6.87109 16.2265 6.53509 16.5625 6.12109 16.5625Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.7881 16.5615C10.3741 16.5615 10.0381 16.2255 10.0381 15.8115V5.66849C10.0381 5.25449 10.3741 4.91849 10.7881 4.91849C11.2021 4.91849 11.5381 5.25449 11.5381 5.66849V15.8115C11.5381 16.2255 11.2021 16.5615 10.7881 16.5615Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.3784 16.5615C14.9644 16.5615 14.6284 16.2255 14.6284 15.8115V12.5775C14.6284 12.1635 14.9644 11.8275 15.3784 11.8275C15.7924 11.8275 16.1284 12.1635 16.1284 12.5775V15.8115C16.1284 16.2255 15.7924 16.5615 15.3784 16.5615Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.064 1.5C3.292 1.5 1.5 3.397 1.5 6.335V15.165C1.5 18.103 3.292 20 6.064 20H15.436C18.209 20 20 18.103 20 15.165V6.335C20 3.397 18.209 1.5 15.436 1.5H6.064ZM15.436 21.5H6.064C2.437 21.5 0 18.954 0 15.165V6.335C0 2.546 2.437 0 6.064 0H15.436C19.063 0 21.5 2.546 21.5 6.335V15.165C21.5 18.954 19.063 21.5 15.436 21.5Z" fill="black" />
               </svg>
          },
          {
               title: 'ATP',
               url: '/ATP',
               icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.08011 13.5928H0.779114C0.365114 13.5928 0.0291138 13.2568 0.0291138 12.8428C0.0291138 12.4288 0.365114 12.0928 0.779114 12.0928H7.08011C7.49411 12.0928 7.83011 12.4288 7.83011 12.8428C7.83011 13.2568 7.49411 13.5928 7.08011 13.5928Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.1909 3.90039H9.89087C9.47687 3.90039 9.14087 3.56439 9.14087 3.15039C9.14087 2.73639 9.47687 2.40039 9.89087 2.40039H16.1909C16.6049 2.40039 16.9409 2.73639 16.9409 3.15039C16.9409 3.56439 16.6049 3.90039 16.1909 3.90039Z" fill="black" />
                    <mask id="mask0_171_182" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="7" height="7">
                         <path fillRule="evenodd" clipRule="evenodd" d="M0 0.000396729H6.2258V6.192H0V0.000396729Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_171_182)">
                         <path fillRule="evenodd" clipRule="evenodd" d="M3.11282 1.5C2.22382 1.5 1.49982 2.216 1.49982 3.097C1.49982 3.977 2.22382 4.692 3.11282 4.692C4.00282 4.692 4.72582 3.977 4.72582 3.097C4.72582 2.216 4.00282 1.5 3.11282 1.5ZM3.11282 6.192C1.39682 6.192 -0.000183105 4.804 -0.000183105 3.097C-0.000183105 1.39 1.39682 0 3.11282 0C4.82982 0 6.22582 1.39 6.22582 3.097C6.22582 4.804 4.82982 6.192 3.11282 6.192Z" fill="black" />
                    </g>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.3877 11.208C13.4977 11.208 12.7737 11.924 12.7737 12.804C12.7737 13.685 13.4977 14.4 14.3877 14.4C15.2767 14.4 15.9997 13.685 15.9997 12.804C15.9997 11.924 15.2767 11.208 14.3877 11.208ZM14.3877 15.9C12.6707 15.9 11.2737 14.511 11.2737 12.804C11.2737 11.097 12.6707 9.70799 14.3877 9.70799C16.1037 9.70799 17.4997 11.097 17.4997 12.804C17.4997 14.511 16.1037 15.9 14.3877 15.9Z" fill="black" />
               </svg>
          },
          {
               title: 'مدیریت ورزشکاران',
               url: '/manageAthlete',
               icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.8598 9.138H10.8868C13.4068 9.138 15.4558 7.088 15.4558 4.569C15.4558 2.05 13.4068 0 10.8868 0C8.36776 0 6.31877 2.05 6.31877 4.566C6.31377 5.783 6.78277 6.929 7.64077 7.792C8.49677 8.656 9.63976 9.134 10.8598 9.138ZM7.81877 4.569C7.81877 2.877 9.19477 1.5 10.8868 1.5C12.5788 1.5 13.9558 2.877 13.9558 4.569C13.9558 6.262 12.5788 7.638 10.8868 7.638H10.8618C10.0458 7.635 9.27977 7.314 8.70477 6.735C8.12977 6.156 7.81576 5.389 7.81877 4.569Z" fill="black" />
                    <path d="M16.1448 7.50051C16.1978 7.87551 16.5188 8.14651 16.8868 8.14651C16.9208 8.14651 16.9558 8.14451 16.9908 8.13951C18.7658 7.89051 20.1068 6.35051 20.1108 4.55551C20.1108 2.77251 18.8338 1.26851 17.0758 0.979506C16.6648 0.914506 16.2818 1.18851 16.2138 1.59751C16.1468 2.00651 16.4238 2.39251 16.8318 2.45951C17.8628 2.62851 18.6108 3.51051 18.6108 4.55351C18.6088 5.60551 17.8238 6.50751 16.7838 6.65351C16.3728 6.71051 16.0878 7.08951 16.1448 7.50051Z" fill="black" />
                    <path d="M19.1604 14.0482C19.2744 14.3472 19.5594 14.5312 19.8614 14.5312C19.9504 14.5312 20.0404 14.5152 20.1284 14.4822C21.5584 13.9372 21.7724 12.9442 21.7724 12.4002C21.7724 11.5092 21.2634 10.3712 18.8404 10.0082C18.4274 9.95515 18.0474 10.2282 17.9864 10.6382C17.9254 11.0492 18.2084 11.4302 18.6174 11.4922C19.7154 11.6562 20.2724 11.9622 20.2724 12.4002C20.2724 12.5372 20.2724 12.8222 19.5944 13.0802C19.2074 13.2272 19.0124 13.6612 19.1604 14.0482Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.8867 16.7909C9.22773 16.7909 4.17773 16.7909 4.17773 13.5959C4.17773 10.4139 9.22773 10.4139 10.8867 10.4139C12.5457 10.4139 17.5947 10.4139 17.5947 13.6129C17.5947 16.7909 12.7217 16.7909 10.8867 16.7909ZM10.8867 11.9139C8.51073 11.9139 5.67773 12.2059 5.67773 13.5959C5.67773 14.9969 8.51073 15.2909 10.8867 15.2909C13.2627 15.2909 16.0947 14.9999 16.0947 13.6129C16.0947 12.2089 13.2627 11.9139 10.8867 11.9139Z" fill="black" />
                    <path d="M4.88572 8.14645C4.85172 8.14645 4.81672 8.14445 4.78172 8.13945C3.00672 7.89045 1.66672 6.35045 1.66272 4.55745C1.66272 2.77245 2.93972 1.26845 4.69772 0.97945C5.11872 0.91345 5.49172 1.19045 5.55972 1.59745C5.62672 2.00645 5.34972 2.39245 4.94172 2.45945C3.91072 2.62845 3.16272 3.51045 3.16272 4.55545C3.16472 5.60545 3.94972 6.50845 4.98872 6.65345C5.39972 6.71045 5.68472 7.08945 5.62772 7.50045C5.57472 7.87545 5.25372 8.14645 4.88572 8.14645Z" fill="black" />
                    <path d="M1.64512 14.4822C1.73312 14.5152 1.82312 14.5312 1.91212 14.5312C2.21412 14.5312 2.49912 14.3472 2.61312 14.0482C2.76112 13.6612 2.56612 13.2272 2.17912 13.0802C1.50012 12.8212 1.50012 12.5372 1.50012 12.4002C1.50012 11.9622 2.05712 11.6562 3.15512 11.4922C3.56412 11.4302 3.84712 11.0492 3.78612 10.6382C3.72412 10.2282 3.34612 9.95619 2.93312 10.0082C0.509122 10.3712 0.00012207 11.5102 0.00012207 12.4002C0.00012207 12.9432 0.214122 13.9362 1.64512 14.4822Z" fill="black" />
               </svg>
          },
     ]

     useEffect(() => {
          console.log(lng);
          
       if (lng) {
          menuLanguage.changeLanguage(lng)
       }
     }, [lng])


     const onNavigateHandler = (url: string) => {
          dispatch(SET_HAMBURGER_MENU_STATE(false))
          navigate(url)
     }

     return (
          <>
               {
                    firstOptions.map((value, index) => {



                         return (
                              <div onClick={() => onNavigateHandler(value.url)} className={pathname === value.url ? "px-8 py-4 mx-3 bg-s-red rounded-xl transition-all ease-linear duration-100 flex justify-end items-center my-2" : "px-8 py-4 mx-3 flex justify-end items-center my-2 rounded-xl cursor-pointer transition-all ease-linear duration-100 hover:text-p-red hover:bg-s-red"} key={index.toString()}>
                                   <div className={`${pathname === value.url ? 'text-p-red' : null} me-3 text-sm whitespace-nowrap`}>
                                       {t(`${value.title}`)}
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

export default DashboardFirstOptions;