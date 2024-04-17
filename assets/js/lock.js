// Start Control + Any Key Shift + Any Key Block

window.onload = function() {

    document.addEventListener("contextmenu", function(e) {

        e.preventDefault();

    }, false);

    document.addEventListener("keydown", function(e) {

        // Copy (Ctrl + C)

        if(e.ctrlKey && e.keyCode == 67) {

            disabledEvent(e);

        }

        // Inspect (Ctrl + Shift + I)

        if(e.ctrlKey && e.shiftKey && e.keyCode == 73) {

            disabledEvent(e);
            
        }

        // Clear Browser (Ctrl + Shift + J)

        if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {

            disabledEvent(e);
            
        }

        // Print (Ctrl + P)

        if(e.ctrlKey && e.keyCode == 80) {

            disabledEvent(e);
            
        }

        // Page Source (Ctrl + U)

        if(e.ctrlKey && e.keyCode == 85) {

            disabledEvent(e);
            
        }

        // Paste (Ctrl + V)

        if(e.ctrlKey && e.keyCode == 86) {

            disabledEvent(e);
            
        }

        // Cut (Ctrl + X)

        if(e.ctrlKey && e.keyCode == 88) {

            disabledEvent(e);
            
        }

        if(event.keyCode == 123) {

            disabledEvent(e);

        }

    }, false);

    function disabledEvent(e) {

        if(e.stopPropagation) {

            e.stopPropagation();

        }

        else if(window.event) {

            window.event.cancelBubble = true;

        }

        e.preventDefault();

        return false;

    }

};