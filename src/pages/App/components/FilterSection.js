import React, { useState, useCallback } from "react";
import Select from "react-select";
import debounce from 'lodash/debounce';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function FilterSection({ handleSearchChange, handleCategoryChange, handleDateChange }) {

    const [selectedOptions, setSelectedOptions] = useState();

    const [selectedCategory, setSelectedCategory] = useState();

    const [startDate, setStartDate] = useState(new Date());

    const debouncedUpdateValue = useCallback(debounce((newValue) => {
        handleSearchChange(newValue);
    }, 700), []);


    // Array of all options
    

    const categoryList = [
        { value: "news", label: "News" },
        { value: "politics", label: "Politics" },
        { value: "culture", label: "Culture" },
        { value: "science", label: "Science" },
        { value: "education", label: "Education" },
        { value: "food", label: "Food" },
        { value: "fashion", label: "Fashion" },
        { value: "society", label: "Society" }
    ];

    // Function triggered on selection
    function handleSelect(data) {
        setSelectedOptions(data);
    }

    const handleSelectCategory = (data, action) => {
        if (action.action == "clear") {
            handleCategoryChange('');
        } else {
            handleCategoryChange(data.value);
        }
        setSelectedCategory(data);
    }

    const handleSelectDate = (date) => {
        let dateF = new Date(date.toString());
        const formattedDate = dateF.toISOString().split('T', 1)[0];
        handleDateChange(formattedDate);
    }

    const updateSearchValue = (event) => {
        console.log(selectedCategory);
        debouncedUpdateValue(event.target.value);
    }

    return (
        <div>
            <div className='grid grid-cols-4 gap-4'>
                <div class="mb-4">
                    <input onChange={updateSearchValue} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search" />
                </div>

                <div>
                    <Select
                        options={categoryList}
                        placeholder="Select Category"
                        isClearable={true}
                        value={selectedCategory}
                        onChange={handleSelectCategory}
                        isSearchable={true}
                    />
                </div>

                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DatePicker onChange={(value) => {
                            handleSelectDate(value);
                        }} />
                    </LocalizationProvider>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    );
}