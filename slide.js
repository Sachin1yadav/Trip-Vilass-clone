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
       } 
 