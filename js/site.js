document.getElementById("Button").addEventListener("click", function(){
let loanAmount=document.getElementById("loanAmount").value;
let TermValue=document.getElementById("Term").value;
let Interest=document.getElementById("Interest").value;
let TotalMonthlyPayment=loanAmount*(Interest/1200)/(1-Math.pow((1+Interest/1200),-TermValue))
TotalMonthlyPayment=TotalMonthlyPayment.toFixed(2)
document.getElementById("MonthlyPayment").innerHTML=`$${TotalMonthlyPayment}`
document.getElementById("Principle").innerHTML=`$${loanAmount}.00`
let RemainingBalance=0;
let InterestPayment=0;
let PrincipalPayment=0;
let TotalInterest=0;
for(i=1;i<=TermValue;i++){
    if(i==1){
        RemainingBalance=loanAmount
        InterestPayment=RemainingBalance*Interest/1200
        PrincipalPayment=TotalMonthlyPayment-InterestPayment
        TotalInterest=InterestPayment
    }
    else{
        RemainingBalance=RemainingBalance-PrincipalPayment
        InterestPayment=RemainingBalance*Interest/1200
        PrincipalPayment=TotalMonthlyPayment-InterestPayment
        TotalInterest=TotalInterest+InterestPayment
    }
    document.getElementById("body").innerHTML+=`<tr><th scope="row">${i}</th><th>${TotalMonthlyPayment}</th><th>${PrincipalPayment}</th><th>${InterestPayment}</th><th>${TotalInterest}</th><th>${RemainingBalance}</th></tr>`
}
})