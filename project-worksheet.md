# Project Overview

## Project Schedule

| Day   | Deliverable                            | Status     |
| ----- | -------------------------------------- | ---------- |
| Day 1 | Finish worksheet                       | Complete   |
| Day 1 | Mobile layout and Base Styling         | Complete   |
| Day 2 | Tablet/Desktop layout and Base Styling | Complete   |
| Day 3 | MVPs and Styling                       | Complete   |
| Day 4 | Fix bugs, polish Styling, and any misc | Complete   |
| Day 5 | Present                                | Incomplete |

## Project Description

This project is my portfolio webpage. It will use html, css, javascript and jquery, along with being responsive for mobile, tablet, and desktop screens. I want it to have a simple/minimal, not too busy, design but also not be too boring. My goal is to have the future projects be the real showcase of the page and incorporate some of my personality in there as well.

## Wireframes

- [Mobile](https://res.cloudinary.com/djqfsbgaf/image/upload/v1643057072/sei%20project01-portfolio/mobile_wireframe_xwnpoj.jpg)
- [Tablet](https://res.cloudinary.com/djqfsbgaf/image/upload/v1643057070/sei%20project01-portfolio/tablet_wireframe_gvkdmo.jpg)
- [Desktop](https://res.cloudinary.com/djqfsbgaf/image/upload/v1643057074/sei%20project01-portfolio/desktop_wireframe_toy7gq.jpg)

## Time/Priority Matrix

#### MVP

- Responsive layouts
- Sticky navbar
- Image carousel
- "Get in touch" form

#### PostMVP

- Hover animations
- Additional design styles (more fonts, more colors, etc)
- Specific images that are relevant to section

## Functional Components

#### MVP

| Component                                    | Priority | Estimated Time | Actual Time |
| -------------------------------------------- | :------: | :------------: | :---------: |
| Responsive layouts (mobile, tablet, desktop) |    H     |      3hr       |     3hr     |
| Styling                                      |    H     |      2hr       |     4hr     |
| Sticky navbar                                |    H     |      1hr       |     1hr     |
| navbar hamburger menu for mobile             |    H     |      2hr       |     1hr     |
| Image carousel                               |    H     |      2hr       |     2hr     |
| 3 project sections                           |    H     |      2hr       |     2hr     |
| About me/skills section                      |    H     |      1hr       |     1hr     |
| "Get in touch" section                       |    H     |      1hr       |     1hr     |
| "Get in touch" form                          |    M     |      2hr       |     2hr     |
| Total                                        |    H     |     16hrs      |    17hrs    |

#### PostMVP

| Component                                    | Priority | Estimated Time | Actual Time |
| -------------------------------------------- | :------: | :------------: | :---------: |
| Hover animations                             |    L     |     1.5hr      |     -hr     |
| Additional design styles                     |    L     |      2hr       |     4hr     |
| Specific images that are relevant to section |    L     |      2hr       |     -hr     |
| Total                                        |    H     |     5.5hrs     |    4hrs     |

## Additional Libraries

Bootstrap/Bootstrap Icons and Jquery

## Code Snippet

I used this jquery to interact with the dom when a user submits the form. When the user clicks submit it replaces a div used as filler with a bootstrap alert that uses the name input value for the users name. Then the user clicks the 'x' button to remove the alert, the alert goes away and is replaced with the filler div again.

```
  const $form = $("#contactForm");

  function submitForm(event) {
    event.preventDefault();
    const $name = $(".name").val();
    $(".filler").replaceWith(
      `<div class="alert alert-success alert-dismissible text-center" role="alert"><i class="bi bi-check-circle-fill"></i> Message sent successfully, ${$name}! <button type="button" class="btn-close" data-bs-dismiss="" aria-label="Close"></button></div>`
    );
    $(".name").val("");
    $(".message").val("");
  }
  $form.on("submit", submitForm);

  function replaceFiller() {
    const $filler = $('<div class="filler">');
    $(".alert").replaceWith($filler);
  }
  $(".wrapper").on("click", ".btn-close", replaceFiller);
```

## Issues and Resolutions

Most of my issues involved styling and getting things to look well together/the way I wanted. One example was figuring out how to control the size of the bootstrap carousel. I google searched 'bootstrap 5 carousel size' and I found this thread to be the most helpful: "https://forum.bootstrapstudio.io/t/how-do-you-decrease-carousel-size/5109". That's when I used the div.wrapper to control the width of the carousel and give the rest of the page a border.
