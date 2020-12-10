export const tasks = {
    quizTitle: "React Quiz Component Demo",
    quizSynopsis: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
    questions:[
        {
            question: "Kto był najpotężiejszym z galów?",
            questionType:"historia",
            answers:[
                {
                    content:"Obeliks",
                    isCorrect:true
                },
                {
                    content:"Gal Anonim",
                    isCorrect:false
                },
                {
                    content:"Adam Małysz",
                    isCorrect:false
                },
                {
                    content:"Mariusz Pudzianowski",
                    isCorrect:false
                },
            ],
            duration:30
        },
        {
            question: "Kiedy powiem sobie dość?",
            questionType:"filozofia",
            answers:[
                {
                    content:"Niedługo",
                    isCorrect:true
                },
                {
                    content:"Nie wiem",
                    isCorrect:false
                },
                {
                    content:"Nigdy",
                    isCorrect:false
                },
                {
                    content:"Pomidodr",
                    isCorrect:false
                },
            ],
            duration:30
        },
    ]
}
