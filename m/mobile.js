(function () {
    var App;

    var interval_r;
    var interval_l;

    App = {};

    App.init = function () {

        loadSounds();
        cacheDom();

        App.passcodeInput = [];
        
        App.socket = io.connect('http://199.96.158.117:9999/');

        App.socket.on('enemyKilled', function (data) {
            enemyKilled();
            return;
        });

        App.socket.on('gameOver', function (data) {
            gameOver();
            return;
        });

        App.socket.on('startGame', function(data){
            hideInstructions();
        });

        App.socket.on('retry', function(data){
            hideGameOver();
        });


    };

    $("#control_left").live('touchstart', function () {

        App.socket.emit('btnPressed', {
            btn: 'l'
        });

    });

    $("#control_right").live('touchstart', function () {

        App.socket.emit('btnPressed', {
            btn: 'r'
        });

    });

    $("#control_shoot").live('touchstart', function () {

        App.socket.emit('btnPressed', {
            btn: 'x'
        });

        App.sound.shoot.play();

    });


    $("#control_left").live('touchend', function () {

        App.socket.emit('btnUp', {
            btn: 'l'
        });

    });

    $("#control_right").live('touchend', function () {

        App.socket.emit('btnUp', {
            btn: 'r'
        });

    });

    $("#control_shoot").live('touchend', function () {

        App.socket.emit('btnUp', {
            btn: 'x'
        });

    });

    $("#submit_passcode").live('touchstart', function () {

        

    });


    $("#numberPad .button").live('touchstart', function(){
        val = $(this).text();
        if(val == 'Go'){
            submitPasscode();
            return;
        }

        if(val == 'C'){
            $("#numberPad .btn").removeClass('green');
            App.passcodeInput = [];
            return;
        }

        var i = App.passcodeInput.length;
        if(i < 4){
            App.passcodeInput[i] = val;
        } else {
            $("#numberPad .btn").removeClass('green');
            App.passcodeInput = [];
            App.passcodeInput[0] = val;
        }

        $(this).addClass('green');

        console.log(App.passcodeInput);

    });

    $("#retry").live('touchstart', function () {

        App.socket.emit('retry', {
        
        });

    });

    $(function () {
        return App.init();
    });

    function enemyKilled() {

        App.sound.kill.play();
        Dom.body.css('background-color', '#fff');

        console.log(Dom.body);

        setTimeout(function () {
            Dom.body.css('background-color', '#0f0f05');
        }, 50);

    }

    function gameOver() {
        App.sound.die.play();
        $("#gameover").fadeIn(300);
    }

    function hideGameOver(){
        $("#gameover").fadeOut(400);
    }

    function loadSounds() {

        App.sound = {};

        App.sound.shoot = new Audio('/audio/shoot.mp3');
        App.sound.shoot.load();
        App.sound.shoot.volume = 1;

        App.sound.kill = new Audio('/audio/kill.mp3');
        App.sound.kill.load();
        App.sound.kill.volume = 1;

        App.sound.hit = new Audio('/audio/hit.mp3');
        App.sound.hit.load();
        App.sound.hit.volume = 1;

        App.sound.die = new Audio('/audio/die.mp3');
        App.sound.die.load();
        App.sound.die.volume = 1;

    }

    function cacheDom() {
        App.dom = {};
        App.dom.body = $("body");
    }

    function hideInstructions(){
        $("#instructions").fadeOut(500);
    }


    function submitPasscode(){
        passcode = App.passcodeInput.join('');
        App.socket.emit('sendPasscode', {
            passcode: passcode
        });
    }

}).call(this);