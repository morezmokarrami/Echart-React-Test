import flag from "../../../../helpers/flags";
import { FutureRacesInterface } from "../../../../interfaces/DashboardInterfaces";

interface Props {
     data: FutureRacesInterface[]
}

const FutureRaces = ({ data }: Props) => {


     return (
          <div className="flex flex-col mx-10 items-end">
               <div className="text-sm text-gray-500 mb-3">
                    مسابقات آینده
               </div>
               {
                    data?.map(value => {
                         return (
                              <div className="border-b flex justify-end my-3 pb-2 items-center w-full lg:w-1/4" key={value.id}>
                                   <div className="flex items-center w-2/3 me-8 justify-end">
                                        <div className="whitespace-nowrap">
                                             {value.name}
                                        </div>
                                        <div className="">
                                             {flag({country: value.location})}
                                        </div>
                                   </div>
                                   <div className="w-1/3" dir="rtl">
                                        {new Date(value.event_date).toLocaleDateString('fa-FA', { month: 'long', day: 'numeric' })}
                                   </div>
                              </div>
                         )
                    })
               }
          </div>
     )
}

export default FutureRaces;