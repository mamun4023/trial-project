
import React, {Component} from 'react';
import Today from './components/today/index';
import Graph from './components/today/graph';
import MonthDetail from './components/month/index';

class App extends Component{

	render(){
		return(
			<>
				<Today/>
				<Graph/>
				<MonthDetail/>
			</>

			)
	}
}

export default App;