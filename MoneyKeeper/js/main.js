let start = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value"),
    daybudgetValue = document.getElementsByClassName("daybudget-value"),
    levelValue = document.getElementsByClassName("level-value"),
    expensesValue = document.getElementsByClassName("expenses-value"),
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value"),
    incomeValue = document.getElementsByClassName("income-value"),
    monthsavingsValue = document.getElementsByClassName("monthsavings-value"),
    yearsavingsValue = document.getElementsByClassName("yearsavings-value"),
    yearValue = document.getElementsByClassName("year-value"),
    monthValue = document.getElementsByClassName("month-value"),
    dayValue = document.getElementsByClassName("day-value"),
    expensesItem1 = document.getElementsByClassName("expenses-item")[0],
    expensesItem2 = document.getElementsByClassName("expenses-item")[1],
    expensesItem3 = document.getElementsByClassName("expenses-item")[2],
    expensesItem4 = document.getElementsByClassName("expenses-item")[3],
    button1 = document.getElementsByTagName("button")[0],
    button2 = document.getElementsByTagName("button")[1],
    button3 = document.getElementsByTagName("button")[2],
    optionalexpensesItem1 = document.querySelectorAll(".optionalexpenses-item")[0],
    optionalexpensesItem2 = document.querySelectorAll(".optionalexpenses-item")[1],
    optionalexpensesItem3 = document.querySelectorAll(".optionalexpenses-item")[2],
    chooseIncomeLabel = document.querySelector(".choose-income-label"),
    checksavings = document.querySelector(".checksavings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent");

    
let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');

    while(isNaN(money) || money=="" || money ==  null) {
        money = +prompt("Ваш бюджет на месяц?",'');
    }
}

//start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,

    chooseExpenses: function() {
        for (let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце",''),
                b = prompt("Во сколько обойдется?",'');
            if ( (typeof(a))==='string' && (typeof(a)) !=null && (typeof(b)) !=null 
                && a !='' && b != '' && a.length < 50 ) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i -1;
            }
        
        }
    },

    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет:" + appData.moneyPerDay);
    },

    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000 ) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },

    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let a = prompt("Статья необязательных расходов?",'');
                appData.optionalExpenses[i] = a;
        }
    },

    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },

    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход (перечислите через запятую)","");

        while ( !isNaN(items) || items == "" || items == null ) {
            items = prompt("Что принесет дополнительный доход (перечислите через запятую)","");
        }

                let a = appData.income = items.split(", ");

                
                appData.income.push(prompt("Может что-то ещё?", ""));
                appData.income.sort();

                appData.income.forEach(function(item, i, mass) {
                    i=i+1;
                    alert("Дополнительные способы: " +i+" - " + item);
                });
                

    }
};
//appData.chooseIncome();

for (let key in appData){
    console.log(key);
}


