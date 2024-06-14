// case{

//     // case1
//     // {
//     //     function getWeekDay(num) {
//     //         let day;
//     //         switch (num) {
//     //             case 1:
//     //                 day = "Dushanba";
//     //                 break;
//     //             case 2:
//     //                 day = "Chorshanba";
//     //                 break;
//     //             case 3:
//     //                 day = "Payshanba";
//     //                 break;
//     //             case 4:
//     //                 day = "Juma";
//     //                 break;
//     //             case 5:
//     //                 day = "Shanba";
//     //                 break;
//     //             case 6:
//     //                 day = "Yakshanba";
//     //                 break;
//     //             default:
//     //                 day = "Noto'g'ri qiymat";
//     //         }
//     //         return day;
//     //     }
//     //     console.log(getWeekDay(1));
//     // }

//     // case2
//     // {
//     //     function getGradeDescription(k) {
//     //         let description;
//     //         switch (k) {
//     //             case 1:
//     //                 description = "yomon";
//     //                 break;
//     //             case 2:
//     //                 description = "qoniqarsiz";
//     //                 break;
//     //             case 3:
//     //                 description = "qoniqarli";
//     //                 break;
//     //             case 4:
//     //                 description = "yaxshi";
//     //                 break;
//     //             case 5:
//     //                 description = "a'lo";
//     //                 break;
//     //             default:
//     //                 description = "xato";
//     //         }
//     //         return description;
//     //     }
//     //     console.log(getGradeDescription(3));
//     // }

//     // case3
//     // {
//     //     function getSeasonByMonth(month) {
//     //         let season;
//     //         switch (month) {
//     //             case 1:
//     //             case 2:
//     //             case 12:
//     //                 season = "qish";
//     //                 break;
//     //             case 3:
//     //             case 4:
//     //             case 5:
//     //                 season = "bahor";
//     //                 break;
//     //             case 6:
//     //             case 7:
//     //             case 8:
//     //                 season = "yoz";
//     //                 break;
//     //             case 9:
//     //             case 10:
//     //             case 11:
//     //                 season = "kuz";
//     //                 break;
//     //             default:
//     //                 season = "Noto'g'ri oy";
//     //         }
//     //         return season;
//     //     }
//     //     console.log(getSeasonByMonth(2));
//     // }

//     // case4
//     // {
//     //     function getDaysInMonth(month) {
//     //         let days;
//     //         switch (month) {
//     //             case 1:
//     //             case 3:
//     //             case 5:
//     //             case 7:
//     //             case 8:
//     //             case 10:
//     //             case 12:
//     //                 days = 31;
//     //                 break;
//     //             case 4:
//     //             case 6:
//     //             case 9:
//     //             case 11:
//     //                 days = 30;
//     //                 break;
//     //             case 2:
//     //                 days = 28;
//     //                 break;
//     //             default:
//     //                 days = "Noto'g'ri oy";
//     //         }
//     //         return days;
//     //     }
//     //     console.log(getDaysInMonth(4));
//     // }

//     // case5
//     // {
//     //     function calculate(a, b, operation) {
//     //         let result;
//     //         switch (operation) {
//     //             case 1:
//     //                 result = a + b;
//     //                 break;
//     //             case 2:
//     //                 result = a - b;
//     //                 break;
//     //             case 3:
//     //                 result = a * b;
//     //                 break;
//     //             case 4:
//     //                 result = a / b;
//     //                 break;
//     //             default:
//     //                 result = "Noto'g'ri amal";
//     //         }
//     //         return result;
//     //     }
//     //     console.log(calculate(8, 6, 2));
//     // }

//     // case6
//     // {
//     //     function convertToMeters(length, unit) {
//     //         let meters;
//     //         switch (unit) {
//     //             case 1:
//     //                 meters = length * 0.1;
//     //                 break;
//     //             case 2:
//     //                 meters = length * 1000;
//     //                 break;
//     //             case 3:
//     //                 meters = length;
//     //                 break;
//     //             case 4:
//     //                 meters = length * 0.001;
//     //                 break;
//     //             case 5:
//     //                 meters = length * 0.01;
//     //                 break;
//     //             default:
//     //                 meters = "Noto'g'ri birlik";
//     //         }
//     //         return meters;
//     //     }
//     //     console.log(convertToMeters(10, 3));
//     // }

//     // case7
//     // {
//     //     function convertToKilograms(weight, unit) {
//     //         let kilograms;
//     //         switch (unit) {
//     //             case 1:
//     //                 kilograms = weight * 0.001;
//     //                 break;
//     //             case 2:
//     //                 kilograms = weight * 0.000001;
//     //                 break;
//     //             case 3:
//     //                 kilograms = weight * 0.000001;
//     //                 break;
//     //             case 4:
//     //                 kilograms = weight * 1000;
//     //                 break;
//     //             case 5:
//     //                 kilograms = weight * 0.1;
//     //                 break;
//     //             default:
//     //                 kilograms = "Noto'g'ri birlik";
//     //         }
//     //         return kilograms;
//     //     }
//     //     console.log(convertToKilograms(2000, 1));
//     // }

//     // case8
//     // {
//     //     function isLeapYear(year) {
//     //         return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//     //     }

//     //     function daysInYear(year) {
//     //         return isLeapYear(year) ? 366 : 365;
//     //     }
//     //     console.log(daysInYear(2011));
//     // }

//     // case9
//     // {
//     //     function getDaysInGivenYearMonth(year, month) {
//     //         let daysInMonth;
//     //         switch (month) {
//     //             case 1:
//     //             case 3:
//     //             case 5:
//     //             case 7:
//     //             case 8:
//     //             case 10:
//     //             case 12:
//     //                 daysInMonth = 31;
//     //                 break;
//     //             case 4:
//     //             case 6:
//     //             case 9:
//     //             case 11:
//     //                 daysInMonth = 30;
//     //                 break;
//     //             case 2:
//     //                 daysInMonth = isLeapYear(year) ? 29 : 28;
//     //                 break;
//     //             default:
//     //                 daysInMonth = "Noto'g'ri oy";
//     //         }
//     //         return daysInMonth;
//     //     }
//     //     console.log(getDaysInGivenYearMonth(2020, 2));
//     // }

// case10
// {
//     function getRobotPosition(commands) {
//         let position = [0, 0];
//         let direction = 0; // 0: north, 1: east, 2: south, 3: west

//         for (let command of commands) {
//             switch (command) {
//                 case 's':
//                     position[1]++;
//                     break;
//                 case 'j':
//                     position[1]--;
//                     break;
//                 case 'q':
//                     position[0]++;
//                     break;
//                 case 'g':
//                     position[0]--;
//                     break;
//                 case '1':
//                     direction = (direction + 3) % 4;
//                     break;
//                 case '2':
//                     direction = (direction + 1) % 4;
//                     break;
//                 case '0':
//                     if (direction === 0) position[1]++;
//                     else if (direction === 1) position[0]++;
//                     else if (direction === 2) position[1]--;
//                     else if (direction === 3) position[0]--;
//                     break;
//             }
//         }
//         return position;
//     }
//     console.log(getRobotPosition(['s', 's', '1', 'q', '0']));
// }

// for{
// for1
// {
//     function printKTimes(k, n) {
//         for (let i = 0; i < n; i++) {
//             console.log(k);
//         }
//     }
//     printKTimes(5, 3);
// }

// for2
// {
//     function printRangeAtoB(a, b) {
//         let count = 0;
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//             count++;
//         }
//         console.log("Count:", count);
//     }
//     printRangeAtoB(3, 7);
// }

// for3
// {
//     function printRangeBtoA(a, b) {
//         let count = 0;
//         for (let i = b - 1; i > a; i--) {
//             console.log(i);
//             count++;
//         }
//         console.log("Count:", count);
//     }
//     printRangeBtoA(3, 7);
// }


