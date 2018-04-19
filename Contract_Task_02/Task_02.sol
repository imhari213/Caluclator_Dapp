contract C1 {
    
    address owner;
    
    function f1() returns(uint) {
        return(10);
    }
    
    function return_owner() constant returns(address){
        
        owner = tx.origin;
        return owner;
    }
    
    
}


contract C2 {
    

    function f2(address addrC1) constant returns(uint) {
        C1 c1 = C1(addrC1);
        return c1.f1();
    }
    
    function f3(address addrC1)constant returns(address){
        C1 c1 = C1(addrC1);
        return c1.return_owner();
        
    }
    
}