import React, {Component} from 'react';
import {Header} from './Components/common';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';

import {
    View,
    Text
}
from 'react-native';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA1zCifu0tKqg2Hlz7OcnDlRZXw8Q5FGUk",
            authDomain: "donut-test-data.firebaseapp.com",
            databaseURL: "https://donut-test-data.firebaseio.com",
            projectId: "donut-test-data",
            storageBucket: "donut-test-data.appspot.com",
            messagingSenderId: "673089384537"
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        )
    }
}

export default App;