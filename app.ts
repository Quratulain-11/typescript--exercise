let personName : string = '';

personname = prompt ('what is your name?') || '';


let uppercase : string =  personName.toUpperCase () ;
let lowercase : string =  personName.toLowerCase ();
let titlecase : string =  personName.split(' ').map(word => word.charAt(0).toUpperCase()+ word.slice(1).
tolowercase()).join(' ')

if (personName !== null && personName  !==''){
alert ( `hellow ${personName},here are your name in:
lowercase: ${lowercase}
uppercase: ${uppercase}
Titlecase: ${titlecase}`)
}
else {

    alert ('please fill your name !')
}