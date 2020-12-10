import {SafeAreaView, Text, View} from "react-native";
import React from "react";

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
