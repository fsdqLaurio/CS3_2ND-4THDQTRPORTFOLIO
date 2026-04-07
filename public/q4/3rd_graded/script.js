function plotPoint(x0, y0, x, y) {

    console.log(x0, y0, x, y) // checks the arguments passed to this function
   
    let in1 = document.getElementById('in1'); 
    in1.innerHTML = x0 + " " + y0 + " " + x + " " + y;
    
    var point = document.createElement('div');  
    point.className = 'point';
    /* control where to place the div on the screen using left and bottom of position:absolute */
    
    point.style.left = (x - x0 + 200 - 5) + 'px'; // subtract half the width of the point to center it by changing left css property
    point.style.bottom = (y - y0 + 200 - 5) + 'px'; // subtract half the height of the point to center it by changing bottom css property
    
    let coordinatePlane = document.getElementById('coordinatePlane');
    coordinatePlane.appendChild(point);

    let out1 = document.getElementById('out1');

    if (x > x0 && y > y0){
      out1.innerHTML = "NE"
    }
    else if (x < x0 && y < y0){
      out1.innerHTML = "SO"
    }
    else if (x > x0 && y < y0){
      out1.innerHTML = "SE"
    }
    else if (x < x0 && y > y0){
      out1.innerHTML = "NO"
    }
    else{
      out1.innerHTML = "divisa"
    }

  }