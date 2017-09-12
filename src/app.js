import React, {Component} from 'react';
import {Header} from './Components/common';
import {
    View,
    Text
}
from 'react-native';


class App extends Component {
    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <Text>An App!</Text>
            </View>
        )
    }
}

export default App;