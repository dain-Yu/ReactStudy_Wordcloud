import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import AppShell from './AppShell';
import Home from './Home';
import Texts from './Texts';
import Words from './Words';

class App extends React.Component {
    render() {
        return (
            //사용자가 처음 접속하는 페이지 
            // <div>
            //    <h3>Hello World</h3>
            // </div>
            <Router>
                <AppShell>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/texts" component={Texts}/>
                        <Route exact path="/words" component={Words}/>
                    </div>
                </AppShell>
            </Router>
        );
    }
}

export default App;