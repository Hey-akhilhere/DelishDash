# React

- React is fast because of reconcilition and difference algorithm.

# Parcel

- Dev Build
- Creates Local Sever
- HMR (Hot Module Replacement)- Parcel Refresh Page Automatically.
- For HMR, Parcel Uses an Algorithm called File Watching Algorithm - Written in C++
- Caching, Faster Builds
- Tree Shaking - Remove unused code
- Minification
- Image Optimization
- Bundling
- Compressing
- Consistent Hashing ( way Generate filenames for output bundles)
- Code Splitting
- Differential Bundling - Support Of Older Browsers
- Diagnostic
- Error Handling
- Support HTTPS
- Different Dev and Prod Bundles

# JSX

- is a HTML LIKE Syntax developed by facebook users to create Elements in a developer friendly to code and readable makes developer work easy.
- JSX is not a part of react
- JSX is transpiled or compiled into react element by babel which is a javascript compiler.
- One important feature is it sanitizes the code - It prevents cross site attacking XSS. It Escapes the malicious data.

# React Component

- Two types of components - Class Based Component (OLD Way of writing code), Functional Component (NEW Way of writing code)
- Everything in a React is component.
- Functional Component - a function which returns jsx nothing but returns react element
- Component Composition - One component in another component

# Hook - useStae() and useEffect()

- A hook is normal java script function that reacts gives us.
- useState() used to create a state variable. - Named import.
- useEffect

# Fetching Data From Backend to UI

- Two approaches to fetch data from backend
  - Loads -> API -> Render
  - Loads -> Render -> API -> Render
- Second Approach is best for better UX.
