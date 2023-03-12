import React, { useEffect, useState } from 'react';
import Navbar from '../../components/nav/Navbar';
import NewsCardMUI from '../../components/news/NewsCardMUI';
import UserPrefrences from '../Preference/UserPrefrences';
import FilterSection from './components/FilterSection';
import ApiIndex from '../../api/index';
import CircularProgress from '@mui/material/CircularProgress';

function Home() {
    const [isHome, setIsHome] = useState(true);
    const [newsData, setNewsData] = useState([]);
    const [spin, setSpin] = useState(false);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    //callback
    const handleViewChange = (value) => {
        setIsHome(value);
    }

    //callback
    const handleSearchChange = (value) => {
        setSearch(value);
        fetchAllNews({ search: value, category: category, from: date, to: date });
    }

    //callback
    const handleCategoryChange = (value) => {
        setCategory(value);
        fetchAllNews({ search: search, category: value, from: date, to: date });
    }

    //callback
    const handleDateChange = (value) => {
        setDate(value);
        fetchAllNews({ search: search, category: category, from: value, to: value })
    }

    const fetchAllNews = async ({ search = "", sources = "", language = "", category = "", from = "", to = "" }) => {
        setSpin(true);
        let data = {
            search,
            sources,
            language,
            category,
            from,
            to
        }
        const response = await ApiIndex.NewsApi.fetchAllNews(data).finally(() => { setSpin(false) });
        const news = response.data;

        setNewsData(news);
    }

    useEffect(() => {
        fetchAllNews({});
    }, []);


    return (
        <div>
            <Navbar handleViewChange={handleViewChange} />

            {isHome &&
                <div>
                    <div className='mt-7 mx-2'>

                        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Genuine Journalism is</span> Expensive!</h1>
                        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">This is news aggregator site where we get news from different sources.</p>

                    </div>
                    <div className='mt-7 mx-7'>
                        <FilterSection handleSearchChange={handleSearchChange} handleCategoryChange={handleCategoryChange} handleDateChange={handleDateChange}/>
                    </div>
                    <div className='mt-14 mx-7'>
                        {spin &&
                            <CircularProgress />}

                        <div class="grid grid-cols-4 gap-y-8">
                            {!spin && newsData.map((item) => (
                                <div>
                                    <NewsCardMUI news={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }



            {!isHome &&
                <UserPrefrences />
            }
        </div>
    )
}

export default Home;