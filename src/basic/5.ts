enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


const isWeekend = (day: DayOfWeek): boolean => {
    if(DayOfWeek[day]==="Saturday" || DayOfWeek[day]==="Sunday" ) {
        return true;
    }
    return false;
}
console.log(isWeekend(DayOfWeek.Wednesday));
    console.log(isWeekend(DayOfWeek.Saturday));
    