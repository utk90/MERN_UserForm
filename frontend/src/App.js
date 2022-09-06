import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import Layout from './component/CustomLayout/Layout'
import Home from './component/Home/Home';
import UserDetails from './component/UpdateDetails/UpdateDetails';
import store from './store';
import { getUsers } from './actions/userAction';
import './App.css';
import Form from './component/Form/Form';

function App() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ["Roboto", "Droid Sans", "Chilanka"]
            }
        })
        store.dispatch(getUsers());
    }, [])

    window.addEventListener('contextmenu', (e) => e.preventDefault());

    return (
        <>
            <Layout>
                <Router>
                    <Switch>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/users/:id' element={<UserDetails />} />
                        <Route exact path='/new/user' element={<Form />} />
                    </Switch>
                </Router>
            </Layout>
        </>
    )
}

export default App;