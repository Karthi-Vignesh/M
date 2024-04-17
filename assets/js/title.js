// Detect When User Changes Tab

document.addEventListener('visibilitychange', function() {

    if(document.visibilityState === "visible") {

        document.title = "";

    }

    else {

        document.title = "Come Back 🙏🏻";

    }

});