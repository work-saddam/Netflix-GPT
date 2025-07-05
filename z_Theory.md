## useRef()
The useRef hook in React is a built-in hook that provides a way to create a mutable reference that persists across component renders without causing re-renders when its value changes. It returns a plain JavaScript object with a single property, current, which can hold any mutable value.

### Difference between state and ref
A ref is similar to state, in that, we can hold and mutate values to be used in a component. However, unlike state, mutation of a ref does not trigger a re-render. This makes useRef suitable for storing mutable values that need to persist across renders without causing the component to re-render.