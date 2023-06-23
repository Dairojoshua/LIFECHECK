var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 2000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})





// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 2000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 2000);
}





const sliderWrappers = document.querySelectorAll('.slider-wrapper');

sliderWrappers.forEach(sliderWrapper => {
  const sliderInput = sliderWrapper.querySelector('.slider-input');
  
  const minValue = +sliderInput.min || 0;
  const maxValue = +sliderInput.max || 100;

  const updateSlider = () => {
    sliderWrapper.style.setProperty('--slider-value', 100 * +sliderInput.value / (maxValue - minValue));
  }

  sliderInput.addEventListener('input', () => {
    updateSlider();
  });

  updateSlider();
});












function LineChart(config){ 
             // user defined properties 
             this.canvas = document.getElementById(config.canvasId); 
             this.minX = config.minX; //from  w ww.j a  v a  2  s.c o  m
             this.minY = config.minY; 
             this.maxX = config.maxX; 
             this.maxY = config.maxY; 
             this.unitsPerTickX = config.unitsPerTickX; 
             this.unitsPerTickY = config.unitsPerTickY; 
              
             // constants 
             this.padding = 10; 
             this.tickSize = 10; 
             this.axisColor = "#555"; 
             this.pointRadius = 5; 

            this.font = "12pt Calibri"; 

            this.fontHeight = 12; 
            // relationships   
            this.context = this.canvas.getContext("2d"); 
            this.rangeX = this.maxX - this.minY; 
            this.rangeY = this.maxY - this.minY; 
            this.numXTicks = Math.round(this.rangeX / this.unitsPerTickX); 
            this.numYTicks = Math.round(this.rangeY / this.unitsPerTickY); 
            this.x = this.getLongestValueWidth() + this.padding * 2; 
            this.y = this.padding * 2; 
            this.width = this.canvas.width - this.x - this.padding * 2; 
            this.height = this.canvas.height - this.y - this.padding - this.fontHeight; 
            this.scaleX = this.width / this.rangeX; 
            this.scaleY = this.height / this.rangeY; 
             
            // draw x y axis and tick marks 
            this.drawXAxis(); 
            this.drawYAxis(); 
         } 


        LineChart.prototype.getLongestValueWidth = function(){ 
            this.context.font = this.font; 
            var longestValueWidth = 0; 
            for (var n = 0; n <= this.numYTicks; n++) { 
                var value = this.maxY - (n * this.unitsPerTickY); 
                longestValueWidth = Math.max(longestValueWidth, this.context.measureText(value).width); 
            } 
            return longestValueWidth; 
         }; 

        LineChart.prototype.drawXAxis = function(){ 
            var context = this.context; 
            context.save(); 
            context.beginPath(); 
            context.moveTo(this.x, this.y + this.height); 
        context.lineTo(this.x + this.width, this.y + this.height); 
        context.strokeStyle = this.axisColor; 
        context.lineWidth = 2; 
        context.stroke(); 
         
        // draw tick marks 
        for (var n = 0; n < this.numXTicks; n++) { 
            context.beginPath(); 
            context.moveTo((n + 1) * this.width / this.numXTicks + this.x, this.y + this.height); 
            context.lineTo((n + 1) * this.width / this.numXTicks + this.x, this.y + this.height - this.tickSize); 
            context.stroke(); 
        } 
         
        // draw labels 
        context.font = this.font; 
        context.fillStyle = "black"; 
        context.textAlign = "center"; 
        context.textBaseline = "middle"; 
         
        for (var n = 0; n < this.numXTicks; n++) { 
            var label = Math.round((n + 1) * this.maxX / this.numXTicks); 
            context.save(); 
            context.translate((n + 1) * this.width / this.numXTicks + this.x, this.y + this.height + this.padding); 
            context.fillText(label, 0, 0); 
            context.restore(); 
        } 
        context.restore(); 
    }; 

    LineChart.prototype.drawYAxis = function(){ 
        var context = this.context; 
        context.save(); 
        context.save(); 
        context.beginPath(); 
        context.moveTo(this.x, this.y); 
        context.lineTo(this.x, this.y + this.height); 
        context.strokeStyle = this.axisColor; 
        context.lineWidth = 2; 
        context.stroke(); 
        context.restore(); 
            // draw tick marks 
            for (var n = 0; n < this.numYTicks; n++) { 
                context.beginPath(); 
                context.moveTo(this.x, n * this.height / this.numYTicks + this.y); 
                context.lineTo(this.x + this.tickSize, n * this.height /this.numYTicks + this.y); 
                context.stroke(); 
            } 
             
            // draw values 
            context.font = this.font; 
            context.fillStyle = "black"; 
            context.textAlign = "right"; 
            context.textBaseline = "middle"; 
             
            for (var n = 0; n < this.numYTicks; n++) { 
                var value = Math.round(this.maxY - n * this.maxY / this.numYTicks); 
                context.save(); 
                context.translate(this.x - this.padding, n * this.height / this.numYTicks + this.y); 
                context.fillText(value, 0, 0); 
                context.restore(); 
            } 
            context.restore(); 
        }; 


        LineChart.prototype.drawLine = function(data, color, width){ 
            var context = this.context; 
            context.save(); 
            this.transformContext(); 
            context.lineWidth = width; 
            context.strokeStyle = color; 
            context.fillStyle = color; 
            context.beginPath(); 
            context.moveTo(data[0].x * this.scaleX, data[0].y * this.scaleY); 
             
            for (var n = 0; n < data.length; n++) { 
                var point = data[n]; 
                 
                // draw segment 
            context.lineTo(point.x * this.scaleX, point.y * this.scaleY); 
            context.stroke(); 
            context.closePath(); 
            context.beginPath(); 
            context.arc(point.x * this.scaleX, point.y * this.scaleY, this.pointRadius, 0, 2 * Math.PI, false); 
            context.fill(); 
            context.closePath(); 
             
            context.beginPath(); 
            context.moveTo(point.x * this.scaleX, point.y * this.scaleY); 
        } 
        context.restore(); 
    }; 

    LineChart.prototype.transformContext = function(){ 
        var context = this.context; 
         
        this.context.translate(this.x, this.y + this.height); 
         
        context.scale(1, -1); 
    }; 

    window.onload = function(){ 
        var myLineChart = new LineChart({ 
            canvasId: "myCanvas", 
            minX: 0, 
            minY: 0, 
            maxX: 140, 
            maxY: 200, 
            unitsPerTickX: 20, 
            unitsPerTickY: 40 
        }); 
           
             
            var data = [{ 
                x: 10, 
                y: 50 
            }, { 
                x: 30, 
                y: 100 
            }, { 
                x: 40, 
                y: 50 
            }, { 
                x: 50, 
                y: 110 
            }, { 
                x: 60, 
                y: 100 
            }, { 
                x: 70, 
                y: 150 
            }, { 
                 x: 80, 
                 y: 170 
             }, {
              x: 90, 
              y: 150 
          }, {
            
            x: 100, 
            y: 170 
        }, {
          
          x: 120, 
          y: 170 
      }, {
                 x: 280, 
                 y: 100 
             }]; 
              
             myLineChart.drawLine(data, "red", 3); 
         };





         