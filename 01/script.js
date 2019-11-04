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