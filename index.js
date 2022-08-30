// Your code here
const createEmployeeRecord=function(row){
    return{
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
createEmployeeRecords=function(employee){
    return employee.map(function(row){
        return createEmployeeRecord(row)
    })
}
createTimeInEvent=function(employee, dateStamp){
    let[date, hour]=dateStamp.split('')
    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date:date
    })
    return employee
}
createTimeOutEvent=function(employ, dateStamp){
    let [date, hour]=dateStamp.split('')
    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date:date
    })
    return employ
}
hoursWorkedOnDate=function(employ, ddDate){
    let inEvent=employ.timeInEvents.find(function(e){
        return e.date===ddDate
    })
    return (outEvent.hour-inEvent.hour)/100
}
wagesEarnedOnDate=function(employ, datedd){
    let rawWage=hoursWorkedOnDate(employ, datedd)*employ.payPerHour
    return parseFloat(rawWage.toString())
}
allWagesFor=function(employ){
    let eligibleDates=employ.timeInEvents.map(function(e){
        return e.date
    })
    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employ, d)
    }, 0)
    return payable
}
findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(function(rec){
      return rec.firstName === firstName
    })
  },
  
   calculatePayroll = function(arrayOfEmployeeRecords){
      return arrayOfEmployeeRecords.reduce(function(memo, rec){
          return memo + allWagesFor(rec)
      }, 0)
  } 