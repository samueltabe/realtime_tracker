import React, { useEffect } from 'react'
import { FaDiceThree } from "react-icons/fa6";
import PizzaStatus from './Partial/PizzaStatus';
import {Head, router } from '@inertiajs/react';

export default function show({pizza}) {

    useEffect( () =>{
        const interval = setInterval( () =>{
           router.reload({only: ['pizza']});
        }, 1000);

        return () => {
            clearInterval(interval)
        }

    }, []);
  return (
    <div className="max-w-3xl mx-auto py-12">
        <Head title={'Order #' + pizza.id}/>
        {/* <div className="py-8 flex w-full justify-center">
            <FaDiceThree className='h-32 w-32 text-blue-700 rotate-45'/>
        </div> */}
        <div className='flex justify-center pt-44'>
           <PizzaStatus currentStatus={pizza.status} className='text-center'/>
        </div>
        <div className="text-center mt-4">
            <p className='text-lg'>{pizza.chef} started {pizza.status.toLowerCase()} your order <span className='underline font-semibold'>{pizza.last_updated}</span> </p>
        </div>

    </div>
  )
}

