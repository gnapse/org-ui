# ScrollToTop on page navigation

React Router by default does not scroll the page all the way back to the top as it is normally expected when navigating from one page to anocher. The reasons for this are explained [here](https://reacttraining.com/react-router/web/guides/scroll-restoration), as well as possible solutions and different strategies to achieve this and other alternative scroll-on-navigation behaviors.

This component `ScrollToTop` implements the most common strategy, which brings back the expected functionality mentioned above. All you need to do is to include exactly one instance of this component anywhere, below the router on your components tree.

```javascript
function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* put the rest of your routes and UI here */}
    </Router>
  )
}
```

### Use it as a wrapper for other content

Sometimes it can be convenient to have a single node in the place of your component tree where you want to include `ScrollToTop` (e.g. inside a react-redux `Provider` component). In these cases you can use `ScrollToTop` as a wrapper that won't render anything itself, just whatever child component you pass to it.

```javascript
function App() {
  return (
    <Router>
      <ScrollToTop>
        {/* put the rest of your routes and UI here */}
      </ScrollToTop>
    </Router>
  )
}
```

### Using the onMount option

By default `ScrollToTop` will only listen to page navigation changes and reset the page scroll bacl to the top when these occur. You also optionally instruct it to reset the scroll to the top at the moment it is mounted in the DOM. This is achieved by passing it the `onMount` prop as true.

```javascript
<ScrollToTop onMount />
```

This can be useful when you use the `ScrollToTop` not in such a global place of your app, but only selectively on different pages or sets of pages. In these situations, it can happen that you come from a page that does not have it, to a page that does insert it. It can be useful to also reset the scroll to the top at that time, and if so, use this option.
