import React from "react";

export default function FormatedDate(props){
    console.log(props.date)
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.date*1000);
    let day = days[date.getDay()];
    let nDay = date.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"]
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;   
     }
    let minute = date.getMinutes();
    if (minute < 10) {
       minute = `0${minute}`;   
    }
    return(
        <div>
            Last updated: {day} {month} {nDay} {year}, {hour}:{minute}
        </div> 
        
    )
};