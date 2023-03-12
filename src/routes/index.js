import {
    Routes,
    Route
} from 'react-router-dom';
import routes from '../constants/routes';

//pages
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Home from '../pages/App/Home';


const Routings = () => {

    return (
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/preferences' element={<Home />} />
        </Routes>
    )
}

export default Routings;
