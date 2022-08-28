 var left=1;
 var right=5;
    function show(){
        for(let i=left; i<=right; i++){
            document.getElementById("c"+i).style.display="inline-block"
        }

        }
        function moveleft(){
            if(left<=8&&right<=16){
            document.getElementById("c"+left).style.display="none"
            left++;
            right++;
            for(i=left; i<=right; i++){
                document.getElementById("c"+i).style.display="inline-block"
            }}
             
        }
        function movergt(){
            if(left>=5&&right>=5){
            document.getElementById("c"+right).style.display="none"
            left--;
            right--;
            for(i=left; i<=right; i++){
                document.getElementById("c"+i).style.display="inline-block"
            } }
            else{
                return
            }

        }
       function topup(){
        window.location.href="sigin.html"
        display="popup-z index"
       } 
 function searchHere(){
    let ma=fr.value;
     if(ma=="goa"){
        window.location.href="secondpg.html"
     }
     else if(ma=="lonavala"){
        window.location.href="lonavala.html"
     }else if(ma==""){
        alert("Please Put Your Location" )
     }
     else{
        alert("Soryy Till Now We Are Not in "+ma)
     }
    //   window.location.href="secondpg.html"
 }
  function lon(){
    window.location.href="lonavala.html"
  }
//  let ma=fr.value;
//  console.log(ma)