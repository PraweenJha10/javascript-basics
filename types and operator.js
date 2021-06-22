let message='Hello';
message=message.substring(2)
console.log(message);

let amount=123;
amount=amount.toString();
console.log(amount +2);

let price='132.12'
price=Number.parseFloat(price)
console.log(price +2)

let price1='A132.12'
price1=Number.parseFloat(price1)
console.log(price1 +2)

let price2='132.12A'
price2=Number.parseFloat(price2)
console.log(price2 +2)

let person={
    firstName:'pk',
    lastName:'kr'
}
   
console.log(person)//person is type of ojject

if(+(1.1+1.3).toFixed(2)!==2.4){
    console.log('dispaly')
}