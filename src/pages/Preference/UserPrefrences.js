import React, { useState } from 'react';
import Select from "react-select";
import Switch from '@mui/material/Switch';

function UserPrefrences() {
    const [selectedOptions, setSelectedOptions] = useState();

    // Array of all options
    const optionList = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
        { value: "blue", label: "Blue" },
        { value: "white", label: "White" }
    ];

    // Function triggered on selection
    function handleSelect(data) {
        setSelectedOptions(data);
    }


    return (
        <>
            <div>
                <div className='mt-7 mx-2'>
                    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                            Set Your Preferences
                        </span></h1>
                </div>

                <div className='mt-20 mx-2 grid place-items-center'>

                    <div class="bg-sky-50 shadow-md rounded px-8 pt-6 pb-8 mb-4  w-full sm:w-8/12">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label class="block text-gray-450 text-base font-bold mb-4 flex items-center justify-between">
                                    Sources
                                </label>
                                <Select
                                    options={optionList}
                                    placeholder="Select color"
                                    value={selectedOptions}
                                    onChange={handleSelect}
                                    isSearchable={true}
                                    isMulti
                                />
                            </div>

                            <div>
                                <label class="block text-gray-450 text-base font-bold mb-4 flex items-center justify-between">
                                    Categories
                                </label>
                                <Select
                                    options={optionList}
                                    placeholder="Select Source"
                                    value={selectedOptions}
                                    onChange={handleSelect}
                                    isSearchable={true}
                                    isMulti
                                />
                            </div>

                            <div>
                                <label class="block text-gray-450 text-base font-bold mb-4 flex items-center justify-between">
                                    Authors
                                </label>
                                <Select
                                    options={optionList}
                                    placeholder="Select color"
                                    value={selectedOptions}
                                    onChange={handleSelect}
                                    isSearchable={true}
                                    isMulti
                                />
                            </div>


                        </div>
                        <div class="mt-8 flex items-center justify-between">
                            <div>
                                <label>Todays News Only</label>
                                <Switch color="primary" />
                            </div>
                        </div>

                        <div class="mt-8 flex items-center justify-between">
                            <button class="shadow bg-sky-800 hover:bg-sky-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Save
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UserPrefrences;

