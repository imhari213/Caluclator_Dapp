contract Addition{
    
 uint total;
 
 uint val1;
 uint val2;
 
 
 function add(uint a,uint b)  constant returns(uint){
     
     val1 = a;
     val2 = b;
     total = val1+val2;
     return total;
     
 }
 
  function sub(uint a,uint b)  constant returns(uint){
     
     val1 = a;
     val2 = b;
     total = val1-val2;
     return total;
     
 }
 
  function mul(uint a,uint b)  constant returns(uint){
     
     val1 = a;
     val2 = b;
     total = val1*val2;
     return total;
     
 }
 
  function div(uint a,uint b)  constant returns(uint){
     
     val1 = a;
     val2 = b;
     total = val1/val2;
     return total;
     
 }
    
    
}