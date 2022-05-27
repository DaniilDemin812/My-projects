class Patient {
    constructor (i,f,o,d,g,ps) {
        This.I=i ;
        This.F=f ;
        This.O=o ;
        This.D=new Date(d) ;
        This.G=g ;
        This.PS=ps ;
}
    setById(){
        document.getElementById("I").textContent=This.I;
        document.getElementById("F").textContent=This.F;
        document.getElementById("O").textContent=This.O;
        document.getElementById("D").textContent=This.D.GetFullYear() ;
        document.getElementById("G").textContent=This.G;
        document.getElementById("PS").textContent=This.PS;
    }
}
 let Ivanov = new Patient('Иванов','Иван','Иванович',new Date(1980,6,10),"м","назначено");
 Ivanov.setById();


