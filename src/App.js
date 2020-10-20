import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './../src/assets/css/home.css';
import '../src/tailwind.css';
import 'mdbreact/dist/css/mdb.css';
import MainLayout from './layouts/MainLayout';
import Login from './pages/users/Login';
import SignUp from './pages/users/SignUp';
import PasswordReset from './pages/users/PasswordReset';
import UserProvider from './providers/UserProvider';
import Application from './pages/users/Application';
import BusSelection from './components/BusSelection';

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<MainLayout>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/passwordreset" component={PasswordReset} />
						<Route exact path="/busselection" component={BusSelection} />
					</MainLayout>

					<UserProvider>
						<Application />
					</UserProvider>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
