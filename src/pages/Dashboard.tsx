import React from "react";
import DashboardMenu from "../components/Dashboard/DashboardMenu/DashboardMenu";
import DashboardComponents from "../components/Dashboard/DashboardComponents/DashboardComponents";



const Dashboard:React.FC = () => {

     

     return (
          <div className="lg:flex lg:h-screen lg:flex-row-reverse lg:mx-0">
               <div className="w-full lg:w-1/6 overflow-hidden">
                    <DashboardMenu />
               </div>
               <div className="w-full lg:w-5/6 overflow-y-auto overflow-x-hidden ">
                    <DashboardComponents />
               </div>
          </div>
     )
}

export default Dashboard;