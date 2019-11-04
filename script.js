
let date = new Date()


let currentDate = date.toDateString()
let weekday 


let time = date.getTime()
let month

document.getElementById("displayTime").innerHTML = time

getWeekday()
document.getElementById("displayWeekday").innerHTML = weekday

getDisplayMonth()
document.getElementById("displayMonth").innerHTML = month


function getTime(){
    
}

/**
 * Gets weekday by name
 */

function getWeekday(){

    switch (date.getDay()){
        case 0:
            weekday = 'Sunday'
            break 
        
        case 1:
            weekday = 'Monday'
            break
        
        case 2:
            weekday = 'Tuesday'
            break
        
        case 3:
            weekday = 'Wednesday'
            break
        
        case 4:
            weekday = 'Thursday'
            break
        
        case 5:
            weekday = 'Friday'
            break
        
        case 6:
            weekday = 'Saturday'
        
        default:
            weekday = 'There is no such thing as weekdays.'

    }

}

/**
 * Gets month by name
 */

function getDisplayMonth(){
    switch(date.getMonth()){
        case 0:
            month = 'January'
            break
        case 1:
            month = 'February'
            break
        case 2:
            month = 'Mars'
            break
        case 3:
            month = 'April'
            break
        case 4:
            month = 'May'
            break
        case 5: 
            month = 'June'
            break
        case 6:
            month = 'July'
            break
        case 7:
            month = 'August'
            break
        case 8:
            month = 'September'
            break
        case 9:
            month = 'October'
            break
        case 10:
            month = 'November'
            break
        case 11:
            month = 'December'
            break
        default:
            month = 'There is no such thing as months'
    }
}