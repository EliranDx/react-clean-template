import React, { Component } from 'react';
import mainStore from './mainStore';
import { observer } from 'mobx-react';

@observer
class App extends React.Component {
    render() {
        return (
            <div>
                REACT!
            </div>
        );
    }
}

export default App;