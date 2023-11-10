let isStarted = false;

const verifyNumber = () => {

    if(isStarted === false){
        //타이머가 작동중이 아닐때
        isStarted = true
        document.getElementById("complete").disabled = false

        let target = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        let time = 10
    
        document.getElementById("verifyID").innerText = target
    
        let timer

        timer = setInterval(function(){
    
            if(time >= 0){
    
                let min = Math.floor( time / 60)
                let sec = String( time % 60 ).padStart(2, "0")
        
                let remain = min + ":" + sec
        
                document.getElementById("remain__time").innerText = remain
        
                time = time - 1
            }
            else{
                document.getElementById("complete").disabled = true
                isStarted = false
                clearInterval(timer)
            }
    
        },1000)

    }else{
        //타이머가 작동중일때
    }

}