// console.log('Client side javascript loaded');

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data=>{
//                 console.log(data);
//             }))
// })


const weatherForm = document.querySelector('form');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');

weatherForm.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const location = document.querySelector('input').value;
    // console.log(location);
    message1.textContent = 'Loading...';
    fetch("/weather?address=" + location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            message1.innerHTML = data.error;
            message2.innerHTML ="";
        }
        else{
            message1.innerHTML = data.location;
            message2.innerHTML = "Summary: "+data.forecast.summary +"<br />" +"Temperature: " + data.forecast.temperature+"<br />" +"Rain Chances : " + data.forecast.rain +"%";
        }
    })
})
})