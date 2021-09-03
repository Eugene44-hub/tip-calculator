const percent = function(value) {
    if (value === undefined) {
        return 1
    }
    if (value === '5%') {
        return 5 / 100
    }
    if (value === '10%') {
        return 10 / 100
    }
    if (value === '15%') {
        return 15 / 100
    }
    if (value === '25%') {
        return 25 / 100
    }

    if (value === '50%') {
        return 50 / 100
    }
    return value / 100
}
const bills = (bill) => {
    return Number(bill)
}
const person = (people) => {
    return Number(people)
}
const inputs = (function(bill, percentage, people) {
    document.querySelector('.calculator').addEventListener('click', (e) => {
        if (e.target.className === 'respond') {
            percentage = percent(e.target.value)
            calculation(bill, percentage, people)
        }
        if (e.target.id === 'reset') {
            window.location.reload();
        }


    })
    document.querySelector('.calculator').addEventListener('keyup', (e) => {
        if (e.target.id === 'people') {

            people = person(e.target.value)

            if (Number(people) <= 0) {
                document.querySelector('#people').style.border = '1px solid red';
                document.querySelector('#notZero').style.display = 'block';
            } else {
                document.querySelector('#people').style.border = '1px solid hsl(172, 67%, 45%)';
                document.querySelector('#notZero').style.display = 'none';
            }
        }

        if (e.target.id === 'bill') {
            bill = bills(e.target.value)
        }
        if (e.target.id === 'custom') {
            percentage = percent(Number(e.target.value));

            calculation(bill, percentage, people)
        }

        calculation(bill, percentage, people)
        if (bill != undefined && percentage != undefined && people != undefined) {
            document.querySelector('#reset').style.backgroundColor = 'hsl(172, 67%, 45%)';
        } else
        if (bill != "" && percentage != "" && people != "") {
            document.querySelector('#reset').style.backgroundColor = 'hsl(172, 67%, 45%)';
        } else {
            document.querySelector('#reset').style.backgroundColor = 'hsl(183, 95%, 22%)';
        }
    })

})();

function calculation(bill = 0, percentage = 0, people = 0) {
    let totalTip;
    const onePerson = 1;
    let perPerson = 1;

    if (people <= 0) {
        totalTip = 0;

    } else {
        perPerson = (bill * percentage) / onePerson;

        totalTip = (bill * percentage) / people;
        results(perPerson, totalTip);
    }

}

function results(ans1, ans2) {
    let answer1 = document.querySelector('.answer1');
    let answer2 = document.querySelector('.answer2');
    answer1.textContent = `$${ans1.toFixed(2)}`;
    answer2.textContent = `$${ans2.toFixed(2)}`;
}