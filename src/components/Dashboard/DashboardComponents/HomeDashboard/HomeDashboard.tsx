import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHook";
import Loading from "../../../Loading/SuspenseLoading";
import DateReminder from "./DateReminder";
import FutureRaces from "./FutureRaces";
import HDChart from "./HDChart";
import axios from "axios";
import { ChartInterface, FutureRacesInterface } from "../../../../interfaces/DashboardInterfaces";
import { SET_DASHBOARD_LOADING, SET_FIRST_RACE } from "../../../../redux/slices/mainSlice";




const HomeDashboard = () => {


     const [chart, setChart] = useState<ChartInterface[]>([])

     const getChartData = async () => {
          try {
               const res = await axios({
                    url: 'https://vo2.ir/api/getChartsData'
               })
               setChart(res.data)
               console.log(res.data);
          } catch (error) {
               console.log(error);

          }
     }

     const [races, setRaces] = useState<FutureRacesInterface[]>([]);     
     const dispatch = useAppDispatch();

     //it is a sample and I dont know if I scale this or not for scale I use react query
     const getRacesData = async () => {
          try {
               const res = await axios({
                    url: 'https://vo2.ir/api/getEvents',
                    method: 'GET'
               })
               setRaces(res.data)
          } catch (error) {
               console.log(error);
          }
     }

     useEffect(() => {
       
     }, [])

     useEffect(() => {
          if (races.length > 0) {
               dispatch(SET_FIRST_RACE({date:races[0]?.event_date, name: races[0]?.name, location: races[0]?.location}))
               dispatch(SET_DASHBOARD_LOADING(false))
          }
     }, [races, dispatch])

     useEffect(() => {
          getRacesData();
          getChartData()
     }, [])

     

     const {dashboardLoading} = useAppSelector(state => state.main)
     if (dashboardLoading) {
          return <Loading />
     }

     return (
          <div className="">
               <div className="text-2xl hidden lg:flex justify-end mt-5">
                    ورزشکاران من
               </div>
               <div>
                    <DateReminder />
               </div>
               <div className="mt-5">
                    <HDChart data={chart}/>
               </div>
               <div className="mt-5">
                    <FutureRaces data={races}/>
               </div>
          </div>
     )
}

export default HomeDashboard;