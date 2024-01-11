import React from 'react'

export default function PizzaStatus({currentStatus}) {
    const statuses = [
        'Ordered',
        'Prepping',
        'Baking',
        'Checking',
        'Ready',
    ];

    const getClass = (status, index) => {
        let baseClasses = 'w-1/5 bg-gradient-to-b flex items-center justify-center h-20  border-r-2 transition-all ';

        if(index === 0){
            baseClasses += 'rounded-l-full';
        }

        if(index === (statuses.length -1)){
            baseClasses = baseClasses.replace('border-r-2', 'rounded-r-full')
        }

        if(status === currentStatus){
            baseClasses = baseClasses.replace('border-r-2', '')
            return `${baseClasses} from-violet-900 to-violet-950 scale-110 rounded shadow-lg`;
        }

        if(statuses.indexOf(currentStatus) > index){
            return `${baseClasses} from-violet-600 to-violet-700 border-violet-700`;
        }

        return `${baseClasses} from-violet-300 to-violet-400 border-violet-500`
    }



  return (
    <div className='flex border-4  border-blue-200 rounded-full w-full justify-center'>
       {statuses.map((status, index) =>
       <div key={index} className={getClass(status, index)}>
        <p className='uppercase font-medium italic text-white drop-shadow text-center'>
            <span className='block text-3xl font-bold not-italic leading-none'>{index + 1}</span>
            {status}
        </p>
       </div>
       )}
    </div>
  )
}


