# Web Design Fundamentals Project

This README aims to explain the key concepts of web styling and design, focusing on various techniques and practices used in modern web development.

## Table of Contents

- [CSS vs Inline Styling](#css-vs-inline-styling)
- [Using CSS-in-JS with Aphrodite](#using-css-in-js-with-aphrodite)
- [Conditional Styling in JavaScript](#conditional-styling-in-javascript)
- [Responsive Design](#responsive-design)
- [Creating Animations](#creating-animations)

## CSS vs Inline Styling

🔍 **Differences:**

1. **CSS File:**
   - Separation of concerns: CSS files separate styling from HTML structure.
   - Reusability: Styles can be reused across multiple HTML elements or pages.
   - Easier maintenance and update of styles.

2. **Inline Styling:**
   - Specificity: Inline styles are directly applied to elements, overriding external CSS.
   - Quick testing and preview of style changes.
   - Useful for dynamic styling with JavaScript.

**Example:**

```css
/* CSS File */
.button {
  background-color: blue;
  color: white;
}

/* Inline Styling */
<button style="background-color: blue; color: white;">Click Me</button>

## Using CSS-in-JS with Aphrodite
### 🎨 Introduction to Aphrodite:

Aphrodite is a CSS-in-JS library that allows you to write CSS directly in JavaScript files.

Example:

```javascript
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    color: 'white'
  }
});

<button className={css(styles.button)}>Press Me</button>

```


