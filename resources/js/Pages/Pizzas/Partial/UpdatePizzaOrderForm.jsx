import Dropdown from '@/components/Dropdown'
import InputError from '@/components/InputError'
import InputLabel from '@/components/InputLabel'
import PrimaryButton from '@/components/PrimaryButton'
import TextInput from '@/components/TextInput'
import { Transition } from '@headlessui/react'
import { useForm } from '@inertiajs/inertia-react'
import React from 'react'

export default function UpdatePizzaOrderForm({pizza, className=''}) {

    const {data, setData, patch, errors, processing, recentlySuccessful} = useForm({
        size: pizza.size,
        crust: pizza.crust,
        toppings: pizza.toppings.join(', '),
        status: pizza.status
    });

    const submit = (e) =>{
        e.preventDefault();

        patch(route('pizzas.update', pizza.id),{
            preserveScroll: true
        });
    }

    const statusOptions = [
        'Ordered',
        'Prepping',
        'Baking',
        'Checking',
        'Ready'
    ];


  return (
    <section className={className}>
        <header>
            <h2 className='text-lg font-medium text-gray-900'>Order Information</h2>
            <p className='mt-1 text-sm text-gray-600'>
                View and change information associated with this order.
            </p>
        </header>

        <form onSubmit={submit} className='mt-6 space-y-6'>
            <div>
                <InputLabel htmlFor="size" value="Size"/>
                <TextInput
                    id="size"
                    className='mt-1 block w-full'
                    value={data.size}
                    disabled
                />

            </div>
            <div>
                <InputLabel htmlFor="crust" value="Crust"/>
                <TextInput
                    id="crust"
                    className='mt-1 block w-full'
                    value={data.crust}
                    disabled
                />

            </div>
            <div>
                <InputLabel htmlFor="toppings" value="Toppings"/>
                <TextInput
                    id="toppings"
                    className='mt-1 block w-full'
                    value={data.toppings}
                    disabled
                />

            </div>
            <div>
                <InputLabel htmlFor="status" value="Status"/>
                <select
                    className='mt-1 block w-full'
                    name="status"
                    id="status"
                    value={data.status}
                    onChange={(e) => setData('status', e.target.value)}
                >
                    {statusOptions.map((status, index) => (
                        <option key={index} value={status}>
                            {status}
                        </option>
                    ))}
                </select>



                <InputError className='mt-2' message={''} />

            </div>

            <div className="flex item-center gap-4">
                <PrimaryButton disabled={processing}>Save Changes</PrimaryButton>

                <Transition
                  show={recentlySuccessful}
                  enter='transition ease-in-out'
                  enterFrom='opacity-0'
                  leave=' transition ease-in-out'
                  leaveTo='opacity-0'
                >
                    <p className='text-sm text-gray-600'>Saves</p>
                </Transition>
            </div>
        </form>
    </section>
  )
}

