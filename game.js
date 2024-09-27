let counter = 0;
let isStarted = false;


$(document).keypress(function() {
    if(!isStarted) {
        $("h2").text("Counter: " + counter);
        $("img").slideUp();
        setTimeout(function() {
            playGame();
        }, 1000);
    }
    isStarted = true;  
});

function playGame() {
    let isMoleClicked = false;
    let time = defineLevel();

    let randomNumber = Math.floor(Math.random() * 9) + 1;
    let mole = $("." + randomNumber);

    mole.off("click");
    mole.slideDown();

    mole.click(function() {
        isMoleClicked = true;
        counter++;
        refreshCounter(counter);
        mole.slideUp(function() {
        mole.off("click");
        playGame();
    })
        });   

    setTimeout(function() {
        if(isMoleClicked === true) {
            console.log("Mole Clicked");
        } else {
            mole.hide();
            $("h1").text("GAME OVER!");
            $("h2").text("You Whacked " + counter + " Moles! 🥳");
            startOver();
        }
        }, time);
}

function refreshCounter(counter) {
    $("h2").text("Counter: " + counter);
}

function defineLevel() {
    if(counter <= 10) {
        return 1500;
    } else if(counter > 5 && counter <= 10) {
        return 1250;
    } else if(counter > 10 && counter <= 15) {
        return 1000;
    } else if(counter > 15 && counter <= 20) {
        return 900;
    } else if(counter > 20 && counter <=25) {
        return 800;
    } else {
        return 700;
    }
}

function startOver() {
    $("h2").text("Press Any Key To Start Whacking Moles");
    isStarted = false ;
    counter = 0;
}