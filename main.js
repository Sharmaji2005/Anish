document.addEventListener("DOMContentLoaded" ,function(){
        const coords = { x:0, y:0 };
        const circles = document.querySelectorAll("#cursor");
        
        circles.forEach(function(cursor){
          cursor.x = 0;
          cursor.y = 0;
        });
        
        document.addEventListener("mousemove", function(e){
          coords.x = e.clientX;
          coords.y = e.clientY;
        
        });
        
        function animateCircles() {
          let x = coords.x;
          let y = coords.y;
        
          circles.forEach(function (cursor,index){
            cursor.style.left = x - 8 + "px";
            cursor.style.top = y - 8 + "px";
        
            cursor.style.scale = (20 - index)/20;
        
            cursor.x = x;
            cursor.y = y; 
        
            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.24;
            y += (nextCircle.y - y) * 0.24;
            
           });
            requestAnimationFrame(animateCircles);
            
        }
        animateCircles();
        });