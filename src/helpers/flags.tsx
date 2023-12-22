import india from '../assets/images/Dashboard/flags/india.png'


interface FlagsProps {
     country: string
}

const flag = ({country}:FlagsProps) => {
     switch (country) {
          case 'india':
               return <img src={india} className='w-[17px] h-[12px] mx-1.5' alt='india image'/>
               break;
     
          default:
               break;
     }
}

export default flag