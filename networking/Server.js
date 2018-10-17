import React, {Componen} from 'react';
import {
    SectionList, StyleSheet, Text, View, Alert, Platform,
} from 'react-native';

const apiGetUsers = 'https://api.github.com/users';
const apiInsertUsers = 'https://api.github.com/users';

async function getUsers() {
    try {
        let response = await fetch(apiGetUsers);
        let responseJson = await response.json();
        return responseJson;  // lay ve json: responseJson.data (de lay ra data trong json tra ve)
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
}

async function insertNewUser(params) {
    try {
        let response = await fetch(apiInsertUsers, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson.result;
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
}

export {getUsers};
export {insertNewUser};
