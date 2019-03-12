export default [
    {
        name: "JavaScript",
        questions: [
            {
                question: "Какой оператор из этих выполняет не только математические операции?",
                type: "oneOF",
                answers: [
                        {
                            text: "*",
                            weight: "+5"
                        },
                        {
                            text: "-",
                            weight: "-5"
                        },
                        {
                            text: "+",
                            weight: "-5"
                        },
                        {
                            text: "/",
                            weight: "-5"
                        },
                        {
                            text: ">>>",
                            weight: "-5"
                        }
                ]
            }, 
            {
                question: 'Чему равна переменная name? let name = "пупкин".replace("п", "д")',
                type: "oneOF",
                answers: [
                    {
                        text: "дудкин",
                        weight: "-5"
                    },
                    {
                        text: "дупкин",
                        weight: "+5"
                    },
                    {
                        text: "пупкин",
                        weight: "-5"
                    },
                    {
                        text: "ляпкин-тяпкин",
                        weight: "-5"
                    }
                ]
            },
            {
                question: "Выберите правильные варианты объявления массива, то есть такие, в результате которых мы получаем массив из двух чисел 1 и 2.",
                type: "manyOF",
                answers: [
                    {
                        text: "new Array.prototype.constructor(1, 2)",
                        weight: "-1"
                    },
                    {
                        text: "new Array(1, 2)",
                        weight: "+2"
                    },
                    {
                        text: "Array(1, 2)",
                        weight: "-1"
                    },
                    {
                        text: "[1, 2]",
                        weight: "+2"
                    },
                    {
                        text: "1..2",
                        weight: "-1"
                    },
                    {
                        text: "Все варианты правильные.",
                        weight: "-1"
                    }
                ]
            },
            {
                question: "Сколько параметров можно передать функции?",
                type: "oneOF",
                answers: [
                    {
                        text: "Ровно столько, сколько указано в определении функции.",
                        weight: "-5"
                    },
                    {
                        text: "Любое количество.",
                        weight: "+5"
                    },
                    {
                        text: "Сколько указано в определении функции или больше.",
                        weight: "-5"
                    },
                    {
                        text: "Сколько указано в определении функции или меньше.",
                        weight: "-5"
                    }
                ]
            },
            {
                question: "Каких операторов из этого списка нет в javascript?",
                type: "manyOF",
                answers: [
                    {
                        text: "*",
                        weight: "+2"
                    },
                     {
                        text: "^",
                        weight: "-2"
                    },
                     {
                        text: "%",
                        weight: "+2"
                    }, 
                    {
                        text: "#",
                        weight: "-2"
                    },
                    {
                        text: ">>>",
                        weight: "+2"
                    }
                ]
            }
        ]      
    },
    {
        name: "jQuery",
        questions: [
            {
                question: 'Как правильно убрать рамку (border) у элемента с идентификатором "someImg"?',
                type: "manyOF",
                answers: [
                        {
                            text: '$("#someImg").css("border","none")',
                            weight: "+5"
                        },
                        {
                            text: '$("#someImg").removeCss("border")',
                            weight: "-5"
                        },
                        {
                            text: '$("#someImg").removeBorder()',
                            weight: "-5"
                        },
                        {
                            text: '$("#someImg").attr("border","none")',
                            weight: "+5"
                        },
                        {
                            text: '$("#someImg").removeAttr("border")',
                            weight: "-5"
                        }
                ]        
            },
            {
                question: 'Как правильно спрятать элемент с идентификатором "el"?',
                type: "oneOF",
                answers: [
                    {
                        text: '$("#el").display("none")',
                        weight: "-5"
                    },
                    {
                        text: '$("#el").hide()',
                        weight: "+5"
                    },
                    {
                        text: '$("#el").hide(true)',
                        weight: "-5"
                    },
                    {
                        text: '$("#el").show(false)',
                        weight: "-5"
                    }
                ]
            },
            {
                question: "Необходимо установить красный цвет фона для элемента с идентификатором 'element'. Какой фрагмент кода не позволит это сделать?",
                type: "manyOF",
                answers: [
                    {
                        text: '$("#element").css("background-color","red")',
                        weight: "+1"
                    },
                    {
                        text: '$("#element").css("bgcolor","red")',
                        weight: "+2"
                    },
                    {
                        text: '$("#element").css("background","red")',
                        weight: "+1"
                    },
                    {
                        text: '$("#element").css("backgroundColor","red")',
                        weight: "-2"
                    }
                ]
            }
        ]      
    }
];

//,
    // {
    //     name: "test JavaScript",
    //     questions: [
    //         {question: "Какой оператор из этих выполняет не только математические операции?",
    //         type: "oneOF",
    //         answers: [
    //             {
    //                 text: "",
    //                 weight: "5"
    //             },
    //             {
    //                 text: "",
    //                 weight: "5"
    //             },
    //             {
    //                 text: "",
    //                 weight: "5"
    //             },
    //             {
    //                 text: "",
    //                 weight: "5"
    //             },
    //             {
    //                 text: "",
    //                 weight: "5"
    //             },
    //             {
    //                 text: "",
    //                 weight: "5"
    //             },

    //         },
    //         {
    //             question: "Чему равна переменная name? let name = "пупкин".replace("п", "д")",
    //             type: "manyOF",
    //             answers: [
    //                 {
    //                     text: "дудкин",
    //                     weight: "-5"
    //                 },
    //                 {
    //                     text: "дупкин",
    //                     weight: "+5"
    //                 },
    //                 {
    //                     text: "пупкин",
    //                     weight: "-5"
    //                 },
    //                 {
    //                     text: "ляпкин-тяпкин",
    //                     weight: "-5"
    //                 },
    //             ]
    //         },
    //         {
    //             question: "Чему равна переменная name? let name = "пупкин".replace("п", "д")",
    //             type: "manyOF",
    //             answers: [
    //                 {
    //                     text: "дудкин",
    //                     weight: "-5"
    //                 },
    //                 {
    //                     text: "дупкин",
    //                     weight: "+5"
    //                 },
    //                 {
    //                     text: "пупкин",
    //                     weight: "-5"
    //                 },
    //                 {
    //                     text: "ляпкин-тяпкин",
    //                     weight: "-5"
    //                 },
    //             ]
    //         }
        
    //     ]
    // },