import React from 'react';
import AppShell from './AppShell';

class App extends React.Component {
    render() {
        return (
            //사용자가 처음 접속하는 페이지 
            // <div>
            //    <h3>Hello World</h3>
            // </div>
            <AppShell />
        );
    }
}

export default App;