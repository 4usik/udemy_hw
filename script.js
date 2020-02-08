let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt("Введите дату в формате YYYY-MM-DD?", '');

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

let qu1 = prompt("Введите обязательную статью расходов в этом месяце", '');
	qu2 = prompt("Во сколько обойдется?", ''),
	qu3 = prompt("Введите обязательную статью расходов в этом месяце", '');
	qu4 = prompt("Во сколько обойдется?", ''),
		
appData.expenses.a1 = qu2;
appData.expenses.a3 = qu4;

alert("Ваш бюджет на 1 день: " + appData/30);

//console.log (money);
//console.log (time);
//console.log (appData);
//console.log (day);