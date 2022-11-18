import { addDays } from 'date-fns/esm';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const DayPickerExample = () => {
    // single day picker
    const [days, setDays] = useState(new Date());
    // multiple days picker 
    const [multipleDays, setMultipleDays] = useState([new Date()])
    // day range picker
    const defaultSelected = {
        from: new Date(),
        to: addDays(new Date(), 2)
    };
    const [range, setRange] = useState(defaultSelected);
    console.log(range);
    return (
        <div className='flex gap-4 justify-center'>
            <div className='bg-slate-200 dark:bg-slate-600 p-4 rounded-xl'>
                <h2 className='text-2xl text-center text-secondary font-bold'>Single Day Selector</h2>
                <DayPicker
                    mode='single'
                    selected={days}
                    onSelect={setDays}

                ></DayPicker>
            </div>


            <div className='bg-slate-200 dark:bg-slate-600 p-4 rounded-xl'>
                <h2 className='text-2xl text-center text-secondary font-bold'>Multiple Day Selector</h2>
                <DayPicker
                    mode='multiple'
                    min={0}
                    max={3}
                    selected={multipleDays}
                    onSelect={setMultipleDays}

                ></DayPicker>
            </div>


            <div className='bg-slate-200 dark:bg-slate-600 p-4 rounded-xl'>
                <h2 className='text-2xl text-center text-secondary font-bold'>Day Range Selector</h2>
                <DayPicker
                    mode='range'
                    defaultMonth={new Date()}
                    selected={range}
                    onSelect={setRange}

                ></DayPicker>   
            </div>

        </div>
    );
};

export default DayPickerExample;