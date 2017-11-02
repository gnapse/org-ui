# Reusable Material Design Components and utilities

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

This package contains a few reusable components and helpers built around Material Design, and using
the React [`material-ui`](https://material-ui-next.com/) library. It is useful for React projects
that use [Material Design](https://material.io/), [Redux](http://redux.js.org/) and
[React Router](https://reacttraining.com/react-router/).

## Summary of components and helpers provided

### Confirmation & acknowledgement

Material-Design-like [confirmation & acknowledgement](https://material.io/guidelines/patterns/confirmation-acknowledgement.html)
components, alongside a Redux setup that allows to dispatch actions to show these dialogs and
alerts, and keeping the necessary state in the global redux store.

- [`src/components/flash`](https://github.com/ProjectVegas/org-ui/tree/master/src/components/flash)
- [`src/components/modal`](https://github.com/ProjectVegas/org-ui/tree/master/src/components/modal)

The `modal` module also serves the general purpose of dispatching actions to show any modal, beyond
the built-in ones for confirmation and alert.

### Dropdown menus and links

Link and dropdown menu components that are compatible with React Router out of the box, rendering
links that play well with the router, instead of trigerring a full page reload. The dropdown menu
component also deals internally with the close/open state of the dropdown, so you don't have to.

- [`src/components/DropdownMenu`](https://github.com/ProjectVegas/org-ui/tree/master/src/components/DropdownMenu)
- [`src/components/MenuItem`](https://github.com/ProjectVegas/org-ui/tree/master/src/components/MenuItem)
- [`src/components/Fab`](https://github.com/ProjectVegas/org-ui/tree/master/src/components/MenuItem)

### Complex form controls

A couple of complex form input components that we extracted from the original app in which we
created them, and that may be useful elsewhere.

- [`src/components/InputList`](https://github.com/ProjectVegas/org-ui/tree/master/src/components/InputList)
- [`src/components/OptionsSelect`](https://github.com/ProjectVegas/org-ui/tree/master/src/components/OptionsSelect)

### Other components

A few other components that don't fit in a single category, and that either abstract away even more
the details and boilerplate code needed to use some material-ui components out of the box, or else
provide some other benefit. Check out all the modules inside the
[components](https://github.com/ProjectVegas/org-ui/tree/master/src/components) directory. Ideally
component folder includes a `README` with meaningful documentation, usage examples, etc. Please
forgive us if that's not the case. Let us know by opening an issue, or better yet, a pull request.

## Storybook

This project features a [storybook](https://storybook.js.org/), or living guide, of some of the
components listed above. You can launch it with the following command:

```
yarn storybook
```

Then visit http://localhost:9009 and play around. This is useful both as a documentation of what
exists, or an aid when developing on any of the existing or new components, without having an actual
app with UI on which to test and play around.

## Contributing

This project is very young, and it may well be that the provided components have bugs, or are not
easily usable or reusable. We also welcome proposals of new components that could be useful to
include in this library. And last but not least, proposals about how to better organize the code in
the library, or about all the build setup and configuration, as well as of the dev tools we're using
are also more than welcome. Issues and pull requests are welcome.
