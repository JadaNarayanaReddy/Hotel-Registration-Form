function BookRoom(){
                document.getElementById("cust").innerHTML=document.getElementById("customer").value;
                document.getElementById("mob").innerHTML=document.getElementById("mobile").value;
                
                var deluxradio=document.getElementById("delux");
                var suiteradio=document.getElementById("suite");
                var accheck=document.getElementById("acroom");
                var lockercheck=document.getElementById("locker");

                var selectroom="";
                var aminities="";

                var roomcost=0;
                var aminitycost=0;

                if (deluxradio.checked){
                    selectroom=deluxradio.value;
                    roomcost=2500;
                    document.getElementById("rmtype").innerHTML=selectroom;
                }
                if (suiteradio.checked){
                    selectroom=suiteradio.value;
                    roomcost=4000;
                    document.getElementById("rmtype").innerHTML=selectroom;
                }
                if(accheck.checked && lockercheck.checked){
                    aminitycost=1300;
                    aminities=`${accheck.value},${lockercheck.value}`;
                    document.getElementById("rmaminities").innerHTML=aminities;
                }
                else if(accheck.checked){
                    aminitycost=1000;
                    aminities=accheck.value;
                    document.getElementById("rmaminities").innerHTML=aminities;
                }
                else if(lockercheck.checked){
                    aminitycost=300;
                    aminities=lockercheck.value;
                    document.getElementById("rmaminities").innerHTML=aminities;
                }
                else{
                    aminitycost=0;
                }
                var total=document.getElementById("total").innerHTML=roomcost+aminitycost;
            }
            function BookClick(){
                alert("Hotel room Booked Successfully");
            }