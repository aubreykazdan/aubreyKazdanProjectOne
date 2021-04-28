console.log("Hello world!");

// INDEX.HTML------------------------------------


    // (1) When you hover or focus on h1 element, font-size increases
    // (a) create a method which finds the <h1> element on the page
    const heading = document.querySelector('h1.captured');
    // (b) create a method which changes the font size of the <h1> element when hovered over
    heading.addEventListener('mouseover', function(){
        // decrease font size when the mouse cursor is over the <h1> element
        heading.style.fontSize = "12rem";
        // change the colour of the <h1> to #ec8e26(orange) to create a noticeable difference
        heading.style.color = "#ec8e26";
    });

    // (2) When you hover away from the h1 element after hovering over it, the font-size goes back to default
    heading.addEventListener('mouseout', function(){
        // (a) decrease font size when the mouse cursor is away the <h1> element
        heading.style.fontSize = "13.8rem";
        // (b) change the colour of the <h1> to #ec8e26(orange)
        heading.style.color = "#2C2C2C";
    });


