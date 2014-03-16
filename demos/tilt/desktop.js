var Demo = {};

App.Run = function(){

	App.Socket.on('msg', function(response){
	    console.log("MESSAGE");

	    var sender = response.sender;
	    var action = response.action;
	    var value = response.value;

	    switch(action){
	        case "orintationUpdate":
	            Demo.OrintationUpdate(value);
	            break;
	    }

	});

}


Demo.OrintationUpdate = function(o){
	//o.x, o.y, o.z for accelerometer
	//o.alpha, o.beta, o.gamma for gyro

	rotate(o.alpha, o.gamma);

};



function rotate(newX,newY){
    var x = parseInt(document.querySelector('#rx').value,10) + (newX || 0),
        y = parseInt(document.querySelector('#ry').value,10) + (newY || 0),
    cube = document.getElementById('cube');

    cube.style.webkitTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    cube.style.MozTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    //cube.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
}




