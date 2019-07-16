function getNumbers(str) {
    let result = [];
    let base = 10;
    for (let i = 0; i < str.length; i++) {
        let parsed = parseInt(str[i], base);
        if (!isNaN(parsed)){
            result.push(parsed);
        }
    }
    return result;
}

function findTypes() {
    let result = new Object();
    for (let i = 0; i < arguments.length; i++) {
        if (result.hasOwnProperty(typeof arguments[i])) {
            result[typeof arguments[i]] += 1;
        } else {
            result[typeof arguments[i]] = 1;
        }
    }
    return result;
}

function executeForEach(vec, f) {
    let result = [];
    for (let i = 0; i < vec.length; i++) {
        result.push(f(vec[i]));
    }
    return result;
}

function mapArray(vec, f) {
    return executeForEach(vec, f);
}

function filterArray(vec, f) {
    let result = [];
    let lx = executeForEach(vec, f);
    for (let i = 0; i < vec.length; i++) {
        if (lx[i]) {
            result.push(vec[i]);
        }
    }
    return result;
}

function showFormattedDate(date) {
    date = new Date(date);
    let monthNames = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct',
        'Nov', 'Dec'
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return `Date: ${monthNames[monthIndex]} ${day} ${year}`;
}

function canConvertToDate(date) {
    date = new Date(date);
    return date instanceof Date && !isNaN(date);
}

function daysBetween(date1, date2) {
    let milliseconds = 1000;
    let seconds = 60;
    let minutes = 60;
    let hours = 24;
    let diffTime = Math.round(date2.getTime() - date1.getTime());
    return Math.ceil(diffTime / (milliseconds * seconds * minutes * hours));
}

function getAmountOfAdultPeople(input) {
    let years = 18;
    let daysInYear = 365;
    let bd = [];
    for (let i = 0; i < input.length; i++) {
        bd.push(input[i][' birthday ']);
    }
    let adult = filterArray(bd, function (el) {
        return daysBetween(new Date(), new Date(el)) > years * daysInYear;
    })
    return adult.length;
}

function keys(obj) {
    let result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(key);
        }
    }
    return result;
}

function values(obj) {
    let result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
    }
    return result;
}