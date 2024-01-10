# Wyatt Barger Dev Portfolio

![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)



## TABLE OF CONTENTS
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
- [References](#references)




### DESCRIPTION


This is my first portfolio made using react with less than a week deadline, which was assigned with minimal direction near the end of my full stack javascript coding bootcamp at Washington University. I have tried to make a presentable but clean portfolio that is reponsive, and makes  use of the features of react, and deliver a enjoyable and easy user experience to anyone who might take the time to view my portfolio. This project should offer a good starter point for refractoring to a cleaner product as currentlyit represents a mvp, however it also should provide a good opprotunity to use a draft once more advanced technologies are learned and an updated portfolio is able to be made.

Portfolio Update 1-9-24:

Check for comments left before turning in the mvp for grading to see what areas of the portfolio can be improved on. Some that come to mind right away without doing much looking are the navbar links not remaining the color of the hover effect when they are the page that is being viewed by the client. The contact page needs to be changed to an email form which is more appropriate than having the email directly linked as I currently have it. Maybe there is a way to change the button so that it opens a form. 


### LICENSE

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### TESTS


This was my first attempt at making a React project on my own, and the current version as of this README was created to meet a class deadline, so there are adjustments to the code I am aware I need to correct, and do plan to correct them. For example, much of my websites elements could have the responsivness improved if they were properly defined as components, such as my SVG images. This also would have allowed me to style them directly with TailwindCSS. This issues is also notable in the Portfolio.jsx page, where one card should have been created as a component with props passed to the children so that the appropriate customization could be added as desired. These are issues that are due to inexperience with the technology, have been noted by the developer, and will be fixed in as timely a manner as is possible.

### QUESTIONS

[wyattbarger](https://github.com)


[wyattbarger@icloud.com](mailto:wyattbarger@icloud.com)

- Please click the above email address to reach out to me directly! Please include a subject line so that I don't miss your email!


### REFERENCES

[This Stack Overflow resource was provided during the meeting reviewing React to help me reference images in a way that prevents errors in pathing.](https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react)

[This is a codepen project I like to use to figure out what filter property I can apply to an image in css to get the color to change in my development environment. This way I can pull in various sizes of the image assets I want to use early in the project and then recolor them as needed in the code base.](https://codepen.io/sosuke/pen/Pjoqqp)

[This is the website for flowbite, as opposed to listing the source for each section of the documentation used. This is used as an alternative to Tailwinds that offers more feature than the free version, with clear documentation on how to implement the technology into your React app. This technology was pointed out to me by Andres Jimenez when I mentioned that I planned on using Tailwind with this project. Link is to the quick start guide, but please note I will be using all of the documentation necessary for each part of component styling used.](https://www.flowbite-react.com/docs/getting-started/quickstart)

[NPM page for react-responsive which will be used to handle modile responsiveness within the project. Documentation present in this link will be referenced as needed.](https://www.npmjs.com/package/react-responsive)

[This is the documentation I used to figure out how to establish a 'Router' component using react-router-dom to get my Header components NavBar to function properly. I also used the sub categories of this documentation as need for the router and the associated functionality.](https://reactrouter.com/en/main/routers/picking-a-router)

[This was another source that I used to reference when working with the react-router-dom elements of my project.](https://www.w3schools.com/react/react_router.asp)

[This is the section from the Flowbite react library documentation on their footer components, this was necessary as I had my own idea of how I wanted my footer to look so this documentation allowed me to find out the proper way to use these components along with tailwind CSS styling and div wrappers to acheive my desired design.](https://www.flowbite-react.com/docs/components/footer)

[This article was used as it gave me a way to implement a piece of advice given to me in my first review session with Andres Jimenez, about importing my images instead of pathing to them directly in my code. This article offers a shorthand way of importing and declaring something as a React component in one line. It also explains many of the reasons to do this, as Andres also did.](https://betterprogramming.pub/react-best-way-of-importing-svg-the-how-and-why-f7c968272dd9)

[Tailwind css documentation refering to justify items, used to get a refresh on how to style inline with className, this specific section of the documentation was useful whe syling the footer element.](https://v2.tailwindcss.com/docs/justify-items)

[This is useful for the share button functionality I would like to add to make the url copy to the users clipboard so it can be shared by pasting it in a desired location.](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp)

[Another source like the one about used to help implement the code I needed to acheive the desired share button functionality.](https://www.freecodecamp.org/news/how-to-get-the-current-url-with-javascript/#:~:text=You%20can%20do%20this%20by,location.)

[I used this website to help get ideas for how to color and style my website.](https://coolors.co/000000-1b1d20-292b30-363940-444850-515660-80848c-989ba2-afb2b8-ffffff)

[This source was used for finding out the best way to use gradients with tailwind css, along with the tailwindcss documentation. No code was taken from this website.](https://blog.logrocket.com/guide-adding-gradients-tailwind-css/)

[MDN docs on clip path that was also useful for trying to style my gradient on the about.jsx page that I was making.](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)

[Here is the Flowbite docs for tailwindcss cards, I used the Call to action cards format to customize to make a nice card on my /contact route that will open a draft email to my personal email, and link to my LinkedIn profile page. I had to change the styling and everything to better match my work, so this was mainly used as a frame.](https://flowbite.com/docs/components/card/)

[For some reason I could not get my styles to apply from my App.css page for the linear gradient I wanted to display in the background of the contact page. This is the source that I used to figure out how to add inline styling to react just to get an mvp reached. I didn't need to copy any code character for character but did need to reference the article pretty meticulously to get it to work.](https://www.pluralsight.com/guides/inline-styling-with-react)

[Added this effect to where my resume will be unblurred when the mouse is hovered for extra styling.](https://www.w3schools.com/howto/howto_css_transition_hover.asp)

[An example of the useState from React being used to conditionally style css, I wanted to see if there was something similar I could do for my ABout.jsx page for when the user is hovering over the button to contact me.](https://medium.com/geekculture/using-reacts-state-to-update-css-dynamically-c9b45570340c)

[Another source on useState that I referenced for the styling involved with About.jsx. No code was used but this source was helpful because it also went more into how ternary operators can be used which is exactly what I was looking for.](https://medium.com/geekculture/using-reacts-state-to-update-css-dynamically-c9b45570340c)

[MDN docs on the mouse enter event, also looked at the mouse leave event on this site as well. This was a bit harder to figure out but htis article helped point me in the same direction as how OnClick={} is handled in react, just instead these will probably need to be set to whether mouseHover is true or false in About.jsx.](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event)

[I also used this documentation for the mouse leave event, and also referenced the mouse enter event on this site, as mentioned in the above source this took me a bit longer than I expected to figure out the best way to implement this.](https://www.w3schools.com/jsref/event_onmouseleave.asp)

Review session with Andres Jimenez 11-1-23 
Review session with Andres Jimenez 11-5-23 
