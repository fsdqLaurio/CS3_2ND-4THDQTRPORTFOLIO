## Step 1 (Static vs Relative)
*"Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right."*

The sidebar does not touch the sides anymore. It has a small margin from the edges of the screen.

## Step 2 (Relative)
*"Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?"*

The footer is now all the way to the bottom of the page. When I scroll, it does not let me, and stays in the same position. The difference from position relative is that the footer stays fixed to the bottom, and does not move around relative to something.

## Step 3 (Absolute)
*"Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?"*

Position: absolute allowed the main content to be placed beside the sidebar element. Before, they were overlapping, but now they aren't. It differs from fixed because the content moves with the page when you scroll, whereas fixed stays fixed to the screen. It also moves elements relative to the element in which it is nearest to.

## Step 4 (Absolute)
*"Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?"*

It appears on top of the content because of the z-index. The z-index allows elements to be positioned infront or behind elements relative to its value. Swapping to a value of 1 from 2 makes it so that the notice element is pushed back.

### Challenge

1. What changes that you have to do on the code that will position .notice box on the top right corner of the .content box?
    
    Change the position of the right coordinates. 
    ex: right: 60px


2. Try to change the position of .content to relative then to fixed. What do you observed each time?

    Relative messes up the position of .content, as it went from going to the side of the sidebar element to the bottom of it. Switching it to fixed retained the old position. 



3. What do you observe on about the effect of z-index on .notice and .content boxes?

    If the z-index of the .notice is less than the z-index of content, it goes behind it. If the z-index is higher, it is now infront of it.


## Reflection
a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)?

    Static makes the position stay the original way, before any values have been put. It is the default positioning.
    Relative moves the elements relative to its parent element; whether to the side, or infront.
    Absolute has almost the same positioning as relative, but the difference is that, it retains its position when the user scrolls.
    Fixed fixes the element to the specified part of the page, and cannot be moved by any other elements.


b. How does absolute positioning depend on its parent element?

c. How do you differentiate sticky from fixed (you can research on sticky)?

d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
