

      const container = document.querySelectorAll('.div_container')
      const fas_lift = document.querySelector('.fa-angle-left')
      const fas_rigth = document.querySelector('.fa-angle-right')
      const num = document.querySelector('.num')
      var x = 1
      function show(){
          for(var i = 0; i < container.length; i++){
              container[i].style.display = "none" 
          }
          if(x > container.length){
              x = 1
          }
          if(x < 1){
              x = container.length
          }
          container[x - 1].style.display = "block"
          container[x - 1].classList.add('animate')
          num.innerHTML = `${x} / ${container.length}`
      }
      fas_rigth.addEventListener('click', ()=>{
          x += 1
          show()
      })
      fas_lift.addEventListener('click', ()=>{
          x -= 1
          show() 
      })
      
      show()
      



      function bamise(){
        document.getElementById("changejs").innerHTML="Hide associated factors"
      }

      
      function bamise1(){
        document.getElementById("changejs1").innerHTML="Hide associated factors"
      }

      function bamise2(){
        document.getElementById("changejs2").innerHTML="Hide associated factors"
      }

      function bamise3(){
        document.getElementById("changejs3").innerHTML="Hide associated factors"
      }

      function bamise4(){
        document.getElementById("changejs4").innerHTML="Hide associated factors"
      }

      function bamise5(){
        document.getElementById("changejs5").innerHTML="Hide associated factors"
      }

      function bamise6(){
        document.getElementById("changejs6").innerHTML="Hide associated factors"
      }

      function bamise7(){
        document.getElementById("changejs7").innerHTML="Hide associated factors"
      }

      function bamise8(){
        document.getElementById("changejs8").innerHTML="Hide associated factors"
      }

      function bamise9(){
        document.getElementById("changejs9").innerHTML="Hide associated factors"
      }

      function bamise10(){
        document.getElementById("changejs10").innerHTML="Hide associated factors"
      }

      function bamise11(){
        document.getElementById("changejs11").innerHTML="Hide associated factors"
      }

      function bamise12(){
        document.getElementById("changejs12").innerHTML="Hide associated factors"
      }

      function bamise13(){
        document.getElementById("changejs13").innerHTML="Hide associated factors"
      }

      function bamise14(){
        document.getElementById("changejs14").innerHTML="Hide associated factors"
      }

      function bamise15(){
        document.getElementById("changejs15").innerHTML="Hide associated factors"
      }



      
    

        