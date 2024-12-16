# React Carousel

This project is a simple, responsive carousel built from scratch using React, HTML, CSS, and JavaScript. The carousel features tweening animations using GSAP, allowing for smooth transitions between slides. It meets the specified requirements and adheres to basic WCAG 2.1 AA accessibility standards.

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- Auto-Advance Slides: Have the carousel automatically advance every 10 seconds
- Pause Auto-Advancing on Hover: Stop the auto-advancing feature when hovering over the carousel for better control.
- Navigate with Ease Using Arrows: Use next and previous buttons for manual navigation through the slides.
- Utilize Paging Dots: Directly navigate to specific slides using dots that also indicate the current slide index.
- Access External Links: Click on images in each slide that link to external URLs for more information.

### Built with

- [React](https://reactjs.org/) - JS library
- [SCSS](https://sass-lang.com/documentation/modules/) and [modules](https://github.com/css-modules/css-modules?tab=readme-ov-file) for styling
- [GSAP](https://gsap.com/) animations
- Semantic HTML5 markup

### Accessibility

This carousel meets basic WCAG 2.1 AA accessibility standards by:

- Providing keyboard navigation through arrow keys.
- Ensuring sufficient color contrast between text and background.
- Using semantic HTML elements for better screen reader support.

### What I learned

Implementing a carousel without using a library proved to be quite challenging, especially since I'm still familiarizing myself with Vite. Throughout the process, I encountered several bugs:

1. I was unable to render SVGs, whether they were saved in the `public` directory or within `src/assets`. I double-checked the import paths to ensure they are correct, but still wasn't successful. As a workaround, I resorted to inlining the SVG elements directly in the HTML. This is definitely something I want to investigate more in the near future.

2. While adding animations, I needed to add a `ref` to the button. However, GSAP was unable to locate the element as a target. After some research, I discovered that I had to [upgrade from react 18 to 19](https://react.dev/blog/2024/12/05/react-19#ref-as-a-prop) in order to use `ref` as a prop.

3. Not carousel related, but I renamed the `carousel` directory to `Carousel` for consistency, and that caused a failed deployment. I attempted to use `git mv` but it didn't work as expected. Ultimately, I had to take the longer route: deleted the directory > saved changes to the repo > re-added the files with the new directory name.

### Continued development

Some things to improve for future state:

1. UX: find a way to clone the slides so that when you are on the last slide and you click 'Next', the carousel seamlessly transitions back to the first slide without an extensive leftward animation.

2. UI: account for a larger number of slides with the paging dots.

3. Accessibility: implement a live region to announce the current item in the carousel

4. Accessibility: focus the selected carousel item

5. File structure: move controls to another file

6. Animation: review and enhance the slide transition for smoother and more appealing user experience

### Useful resources

- [Carousels tutorial](https://www.w3.org/WAI/tutorials/carousels/) - this served as a guide on how to implement accessible carousels

### Installation

1. Clone repository

```
git clone https://github.com/emestabillo/parks-carousel.git
cd parks-carousel
```

2. Install dependencies

```
npm install
```

3. Start the development server

```
npm run dev
```

4. Open your browser and navigate to local URL. ex. `http://localhost:3000`
