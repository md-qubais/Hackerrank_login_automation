const puppeteer=require("puppeteer")
let browser=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized","--incognito"]

})
let current_tab;
browser.then(function(browser){
    let alltabs=browser.pages();
    return alltabs;
})
.then(function(arr){
    current_tab=arr[0];
    let loginPage=current_tab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login")
    return loginPage;
})
.then(function(){
    console.log("login page")
    let email=current_tab.type("input[name='username']","raqimad2006@gmail.com")
    return email
})
.then(function(){
    let pass=current_tab.type("input[name='password']","qubaisuddin")
    return pass
})
.then(function(){
    console.log("email and password Entered")
  let tab=current_tab.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled')
    return tab;
})

.then(function(){
    let wait=current_tab.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled",{visible:true})
    return wait;
})
.then(function(tab){
    //here we have to delay because it will have to parse and randered and them
    //it will have to create dom after going to next page
    //thats why we are directly accessing it before all these three
    //process that why the error occured
    let clicked=current_tab.click(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled")
    return clicked;
})
//we have to use something that it will wait for the dom to construct
//and to access it
.then(function(){
    console.log("reached ip page")
})
//we have to wait always if we are proceeding to next page
.then(function(){
    let wait=current_tab.waitForSelector(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-primary.ui-btn-link.ui-btn-styled",{visible:true})
    return wait;
})
.then(function(){
    let warm_up=current_tab.click(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-primary.ui-btn-link.ui-btn-styled")
})
.then(function(){
    console.log("inside warmup challenges")
})


//create new our own promise
//first it will wait and then after wards it will click
