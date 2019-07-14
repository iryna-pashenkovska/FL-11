function formatTime(inputMinutes){
    let minutes = inputMinutes % 60;
    let hours = Math.floor(inputMinutes / 60);
    let days = 0;
    if(hours >= 24){
        days = Math.floor(hours/24);
        hours = hours % 24;
    }
    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`
}

formatTime(120);