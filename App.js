import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import {StackActions} from "@react-navigation/routers";
import {createDrawerNavigator} from '@react-navigation/drawer';
import ResultDataBox from "./ResultDataBox";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ResultsFlatList from "./ResultsFlatList";


const setRulesTrue = async (nav) => {
    storeData('true').then(nav.navigate('Home'))

}
const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
        // saving error
    }
}
const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value !== null) {
            return value;
        }
    } catch (e) {
        // error reading value
    }
}


class QuizBox extends Component {
    render() {
        const {title, tag1, tag2, text, onClick} = this.props;
        return (
            <TouchableOpacity style={styles.quizBox} onPress={onClick}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.tagLine}>
                    <Text style={styles.tagStyle}>{tag1}</Text>
                    <Text style={styles.tagStyle}>{tag2}</Text>
                </View>
                <Text>{text}</Text>
            </TouchableOpacity>
        )
    }
}

class AnswerButton extends Component {
    render() {
        const {title,} = this.props;
        return (
            <TouchableOpacity style={styles.answerButton}>
                <Text>{title}</Text>
            </TouchableOpacity>

        );
    }
}

function RulesScreen({navigation}) {
    useEffect(() => {
        getData().then(value => {
            if (value === 'true') {
                navigation.navigate('Home')
            }
        })
    })
    return (
        <SafeAreaView>
            <View style={styles.rulesScreen}>
                <Text>Rules</Text>
                <View style={styles.rulesText}>
                    <Text>żadnych zasad, niech poleje się krew!</Text>
                    <Text>żadnych zasad, niech poleje się krew!</Text>
                    <Text>żadnych zasad, niech poleje się krew!</Text>
                    <Text>żadnych zasad, niech poleje się krew!</Text>
                </View>
                <TouchableOpacity style={styles.answerButton} onPress={() => setRulesTrue(navigation)}>
                    <Text>Agree</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

function HomeScreen({navigation}) {
    return (
        <SafeAreaView>
            <ScrollView>
                <QuizBox title={"Quiz1"} onClick={() => navigation.navigate('Quiz1Screen')} tag1={"#Tag1"} tag2={"#Tag2"}
                         text={"W tym miejscu odpowiemy sobie na jedno ważne pytanie, ale to zaj***e ważne pytanie"}/>
                <QuizBox title={"Quiz2"} onClick={() => navigation.navigate('Quiz2Screen')} tag1={"#Tag1"} tag2={"#Tag2"}
                         text={"W tym miejscu odpowiemy sobie na jedno ważne pytanie, ale to zaj***e ważne pytanie"}/>
                <QuizBox title={"Quiz3"} onClick={() => navigation.navigate('Quiz3Screen')} tag1={"#Tag1"} tag2={"#Tag2"}
                         text={"W tym miejscu odpowiemy sobie na jedno ważne pytanie, ale to zaj***e ważne pytanie"}/>
                <QuizBox title={"Quiz4"} onClick={() => navigation.navigate('Quiz4Screen')} tag1={"#Tag1"} tag2={"#Tag2"}
                         text={"W tym miejscu odpowiemy sobie na jedno ważne pytanie, ale to zaj***e ważne pytanie"}/>
                <View style={styles.stopka}>
                    <Text style={styles.checkResultText}>Get to know your result</Text>
                    <TouchableOpacity style={styles.answerButton} onPress={() => navigation.navigate('Result')}>
                        <Text>Check!</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


function Quiz1Screen({navigation}) {
    return (
        <SafeAreaView>
            <View style={styles.flexRow}>
                <Text style={styles.testQuestionNumber}>Question 3 of 10</Text>
                <Text style={styles.testTimeLeft}>Time: 28 sec</Text>
            </View>
            <View style={styles.testTimeBar}>
                <View style={styles.testTime}></View>
                <View></View>
            </View>
            <Text style={styles.categoryQuestions}>{"questionType"}</Text>
            <Text style={styles.question}>{"Question"}</Text>
            <View style={styles.answerBox}>
                <AnswerButton title={"Answer A"}/>
                <AnswerButton title={"Answer B"}/>
                <AnswerButton title={"Answer C"}/>
                <AnswerButton title={"Answer D"}/>
            </View>
        </SafeAreaView>
    );
}
function Quiz2Screen({navigation}) {
    return (
        <SafeAreaView>
            <View style={styles.flexRow}>
                <Text style={styles.testQuestionNumber}>Question 3 of 10</Text>
                <Text style={styles.testTimeLeft}>Time: 28 sec</Text>
            </View>
            <View style={styles.testTimeBar}>
                <View style={styles.testTime}></View>
                <View></View>
            </View>
            <Text style={styles.categoryQuestions}>Quiz 1</Text>
            <Text style={styles.question}>A co jeśli Sasin nigdy nie odpowie za zmarnotrawione 70 mln?</Text>
            <View style={styles.answerBox}>
                <AnswerButton title={"Answer A"}/>
                <AnswerButton title={"Answer B"}/>
                <AnswerButton title={"Answer C"}/>
                <AnswerButton title={"Answer D"}/>
            </View>
        </SafeAreaView>
    );
}
function Quiz3Screen({navigation}) {
    return (
        <SafeAreaView>
            <View style={styles.flexRow}>
                <Text style={styles.testQuestionNumber}>Question 3 of 10</Text>
                <Text style={styles.testTimeLeft}>Time: 28 sec</Text>
            </View>
            <View style={styles.testTimeBar}>
                <View style={styles.testTime}></View>
                <View></View>
            </View>
            <Text style={styles.categoryQuestions}>Quiz 1</Text>
            <Text style={styles.question}>A co jeśli Sasin nigdy nie odpowie za zmarnotrawione 70 mln?</Text>
            <View style={styles.answerBox}>
                <AnswerButton title={"Answer A"}/>
                <AnswerButton title={"Answer B"}/>
                <AnswerButton title={"Answer C"}/>
                <AnswerButton title={"Answer D"}/>
            </View>
        </SafeAreaView>
    );
}
function Quiz4Screen({navigation}) {
    return (
        <SafeAreaView>
            <View style={styles.flexRow}>
                <Text style={styles.testQuestionNumber}>Question 3 of 10</Text>
                <Text style={styles.testTimeLeft}>Time: 28 sec</Text>
            </View>
            <View style={styles.testTimeBar}>
                <View style={styles.testTime}></View>
                <View></View>
            </View>
            <Text style={styles.categoryQuestions}>Quiz 1</Text>
            <Text style={styles.question}>A co jeśli Sasin nigdy nie odpowie za zmarnotrawione 70 mln?</Text>
            <View style={styles.answerBox}>
                <AnswerButton title={"Answer A"}/>
                <AnswerButton title={"Answer B"}/>
                <AnswerButton title={"Answer C"}/>
                <AnswerButton title={"Answer D"}/>
            </View>
        </SafeAreaView>
    );
}
function TestScreen({navigation}) {
    return (
        <SafeAreaView>
            <View style={styles.flexRow}>
                <Text style={styles.testQuestionNumber}>Question 3 of 10</Text>
                <Text style={styles.testTimeLeft}>Time: 28 sec</Text>
            </View>
            <View style={styles.testTimeBar}>
                <View style={styles.testTime}></View>
                <View></View>
            </View>
            <Text style={styles.categoryQuestions}>Kategoria pytania to polityka</Text>
            <Text style={styles.question}>A co jeśli Sasin nigdy nie odpowie za zmarnotrawione 70 mln?</Text>
            <View style={styles.answerBox}>
                <AnswerButton title={"Answer A"}/>
                <AnswerButton title={"Answer B"}/>
                <AnswerButton title={"Answer C"}/>
                <AnswerButton title={"Answer D"}/>
            </View>
        </SafeAreaView>
    );
}

function ResultsScreen({navigation}) {

    return (

        <SafeAreaView>
            <ScrollView>
                <ResultsFlatList/>
{/*                <View style={styles.resultsTitle}>
                    <Text style={styles.resultsTitleColumns}>User</Text>
                    <Text style={styles.resultsTitleColumns}>Points</Text>
                    <Text style={styles.resultsTitleColumns}>Type</Text>
                    <Text style={styles.resultsTitleColumns}>Date</Text>
                </View>
                <ResultDataBox user={"Nick1"} points={"10/10"} type={"Quiz 1"} date={"01-01-2020"}/>
                <ResultDataBox user={"Nick2"} points={"10/10"} type={"Quiz 1"} date={"01-01-2020"}/>
                <ResultDataBox user={"Nick3"} points={"10/10"} type={"Quiz 1"} date={"01-01-2020"}/>
                <ResultDataBox user={"Nick4"} points={"10/10"} type={"Quiz 1"} date={"01-01-2020"}/>*/}
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom:20}}>
                    <Text onPress={() => {
                        navigation.dispatch(StackActions.popToTop());
                        navigation.navigate('Home');
                    }}>Home Screen</Text>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}

function Home({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Test" component={TestScreen}/>
            <Stack.Screen name="Result" component={ResultsScreen}/>
            <Stack.Screen name="Quiz1Screen" component={Quiz1Screen}/>
            <Stack.Screen name="Quiz2Screen" component={Quiz2Screen}/>
            <Stack.Screen name="Quiz3Screen" component={Quiz3Screen}/>
            <Stack.Screen name="Quiz4Screen" component={Quiz4Screen}/>
        </Stack.Navigator>
    );
}


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Rules">
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Result" component={ResultsScreen}/>
                <Drawer.Screen name="Rules" component={RulesScreen}/>
                <Drawer.Screen name="Quiz1Screen" component={Quiz1Screen}/>
                <Drawer.Screen name="Quiz2Screen" component={Quiz2Screen}/>
                <Drawer.Screen name="Quiz3Screen" component={Quiz3Screen}/>
                <Drawer.Screen name="Quiz4Screen" component={Quiz4Screen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultListStyle: {
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
    rulesText:{
        flexDirection: 'column',
        marginTop: 30
    },
    rulesScreen: {
        alignItems: 'center',
        marginTop: 50,

    },
    quizBox: {
        borderWidth: 3,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        padding: 10

    },
    title: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold'
    },
    tagLine: {
        flexDirection: 'row'
    },
    tagStyle: {
        color: 'green',
    },
    answerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        borderWidth: 3,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        padding: 10,

    },
    answerButton: {
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        width: 100
    },
    question: {
        marginLeft: 20,
        marginBottom: 5,
        marginRight: 20,
        marginTop: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    categoryQuestions: {
        marginLeft: 20,
        marginBottom: 5,
        marginRight: 20,
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
    },
    testTimeBar: {
        flexDirection: "row",
        borderWidth: 1,
        margin: 10,
        marginBottom: 0,
    },
    testTime: {
        backgroundColor: "#F9FF7D",
        flex: 0.7,
        height: 10,
    },
    testQuestionNumber: {
        flex: 1,
        textAlign: "left",
        fontSize: 17,
        marginLeft: 25,
    },
    testTimeLeft: {
        flex: 1,
        textAlign: "right",
        fontSize: 17,
        marginRight: 25,
    },
    flexRow: {
        flexDirection: 'row',
    },
    stopka: {
        borderWidth: 1,
        marginLeft: 5,
        marginBottom: 5,
        marginRight: 5,
        marginTop: 20,
        alignItems: 'center'
    },
    checkResultText: {
        fontSize: 20,
        textAlign: 'center',
    },
    resultsTitle: {
        flexDirection: 'row',
        backgroundColor: "#ccc",
        margin: 10,
        marginBottom: 10,
    },
    resultsTitleColumns: {
        flex: 1,
        borderWidth: 1,
        textAlign: 'center',
        padding: 5,
    },
    wrapper: {
        flexDirection: 'row'
    },
    containerResult: {
        flex: 1,
        padding: 18,
        paddingTop: 35,
        backgroundColor: '#ffffff'
    },
    HeadStyle: {
        height: 50,
        alignContent: "center",
        backgroundColor: '#ffe0f0'
    },
    TableText: {
        margin: 10
    }
});

export default App;
