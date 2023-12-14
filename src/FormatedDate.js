import React from "react";

export default function FormatedDate(props){
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.date*1000);
    let day = days[date.getDay()];
    let nDay = date.getDate();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July","Aug","Sep","Oct","Nov","Dec"]
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
            Last updated: <br/> {day} {month} {nDay} {year}, {hour}:{minute}
        </div> 
        
    )
};