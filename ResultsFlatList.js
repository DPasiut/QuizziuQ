import { FlatList } from 'react-native';
import React, { Component } from "react";
import {Text, StyleSheet} from 'react-native';



const results = [
    {
        id: 1,
        name: "Marek",
        score: 18,
        total: 20,
        type:"historia",
        date:"2018-11-22"
    },
    {
        id: 2,
        name: "Daniel",
        score: 19,
        total: 21,
        type:"historia",
        date:"2018-11-22"
    },
    {
        id: 3,
        name: "Batman",
        score: 18,
        total: 20,
        type:"historia",
        date:"2018-11-22"
    },
    {
        id: 4,
        name: "Hanka Mostowiak",
        score: 18,
        total: 20,
        type:"historia",
        date:"2018-11-22"
    }
]
const extractKey = ({ id }) => toString()

class ResultsFlatList extends Component {
    renderItem = ({ item }) => {
        return (
            <Text style={styles.resultListStyle}>
                {"nick: "}{item.name}{"\n"}
                {" score: "}{item.score}{"\n"}
                {" total: "}{item.total}{"\n"}
                {" type: "}{item.type}{"\n"}
                {" date: "}{item.date}
            </Text>
        )
    }

    render() {
        return (
            <FlatList
                style={styles.container}
                data={results}
                renderItem={this.renderItem}
                keyExtractor={extractKey}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    resultListStyle: {
        flexDirection: 'column',
        padding: 15,
        marginBottom: 5,
        color: "yellow",
        backgroundColor: '#1A237E',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontFamily: "French Script MT",
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d6d7da',
        textAlign: 'center',
        fontSize: 20
    },
})

export default ResultsFlatList;
