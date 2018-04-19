var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
const contractAbi = [ { "constant": true, "inputs": [ { "name": "a", "type": "uint256" }, { "name": "b", "type": "uint256" } ], "name": "add", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "a", "type": "uint256" }, { "name": "b", "type": "uint256" } ], "name": "sub", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "a", "type": "uint256" }, { "name": "b", "type": "uint256" } ], "name": "mul", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "a", "type": "uint256" }, { "name": "b", "type": "uint256" } ], "name": "div", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" } ]
var contract_addr = "0x9f980bb001afc79362f0bcdaafaa8a0b60e4a00f";                    
var contract_instance = web3.eth.contract(contractAbi).at(contract_addr);
function balance()
{
  console.log("dfsdasa");
}
function getbalance(){
    var d = web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0]),"ether");
    
    console.log(d);
}

function Addition(){

   var val = contract_instance.add(20,10,{from:web3.eth.accounts[0],gas:200000},function(error,result){
    if(error){
        console.log(error);
    }
    else{
        var txHash = result;
        console.log(result);
    }
})
}

function Multiplication(){

  var val = contract_instance.mul(20,10,{from:web3.eth.accounts[0],gas:200000},function(error,result){
   if(error){
       console.log(error);
   }
   else{
       var txHash = result;
       console.log(result);
   }
})
}

function Subraction(){

  var val = contract_instance.sub(20,10,{from:web3.eth.accounts[0],gas:200000},function(error,result){
   if(error){
       console.log(error);
   }
   else{
       var txHash = result;
       console.log(result);
   }
})
}

function Division(){

  var val = contract_instance.div(20,10,{from:web3.eth.accounts[0],gas:200000},function(error,result){
   if(error){
       console.log(error);
   }
   else{
       var txHash = result;
       console.log(result);
   }
})
}



getbalance();
Addition();
Subraction();
Multiplication();
Division();
