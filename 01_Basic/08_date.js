//js, Date objects represent a single moment in time in a platform-independent format.

let myDate= new Date();

console.log(typeof(myDate)); //object
console.log(myDate); //2025-02-19T00:02:06.560Z

console.log(myDate.toString());
//Converts the Date object to a string representation in the local timezone.
//Wed Feb 19 2025 00:02:06 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); 
//Returns a string representing the date portion of the Date object, without the time.
//Wed Feb 19 2025

console.log(myDate.toISOString()); 
//Converts the Date object to a string in ISO 8601 format
//2025-02-19T00:02:06.560Z

console.log(myDate.toJSON());
/*
Returns a string representation of the Date object in ISO 8601 format, same as toISOString().
This method is mainly used to convert Date objects to JSON-compatible strings, useful when serializing objects.
*/
//2025-02-19T00:02:06.560Z

console.log(myDate.toLocaleString());
//Returns a string representing the Date object in a locale-sensitive format. The output depends on the system's locale settings.
//2/19/2025, 12:02:06 AM

console.log(myDate.toTimeString());
//Returns a string representing the time portion of the Date object, including the timezone.
//00:02:06 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toUTCString());
//Converts the Date object to a string representing the date and time in UTC (Coordinated Universal Time).
//Wed, 19 Feb 2025 00:02:06 GMT


/*
Summary of Each Method:
toString(): Full string with date and time in local timezone.
toDateString(): Only the date part in string format.
toISOString(): Date in ISO 8601 format (standardized).
toJSON(): Same as toISOString(), used for JSON serialization.
toLocaleString(): Locale-dependent string representation of date and time.
toTimeString(): Only the time part in string format with timezone.
toUTCString(): Date and time in UTC format.
*/

// decalare a specific date
let myCreateDate = new Date(2023, 0, 23);
console.log(myCreateDate); //2023-01-23T00:00:00.000Z

console.log(myCreateDate.toDateString()); 
//Mon Jan 23 2023
//month start form 0 in js.

let myCreateDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myCreateDate1.toLocaleString());
//1/23/2023, 5:03:00 AM

let myCreateDate2 = new Date("2023-01-14"); //yyyy,mm,dd
console.log(myCreateDate2.toLocaleString());
//1/14/2023, 12:00:00 AM

let myCreateDate3 = new Date("01-14-2023");
console.log(myCreateDate3.toLocaleString());
//1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp); //1739923326601
console.log(myTimeStamp.toLocaleString()); //1,739,923,326,601
console.log(Date.now()); //1739923326604

console.log(Math.floor(Date.now()/1000)); //1739923326

let newDate = new Date();
console.log(newDate); //2025-02-19T00:02:06.604Z

console.log(newDate.getMonth()); //1 month is feb, because js months start from 0

console.log(newDate.getMonth()+1); //2, month is feb,for start from 1

console.log(newDate.getDay()); //2 
//(mon1, tue2, wed3, thu4, fri5, sat6, sun7)

let dayOfWeek = newDate.toLocaleString('default', {
    weekday: "long"
});

console.log(dayOfWeek);
//Wednesday







