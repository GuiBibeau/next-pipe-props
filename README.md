## next pipe props

[![NPM](https://nodei.co/npm/next-pipe-props.png?compact=true)](https://npmjs.org/package/next-pipe-props)
</br>
Next-pipe-props is a zero dependency pacakge meant to give a pipe helper when getting ssr or static props to a Next.js page.

## installation

simply install with yarn

```
yarn add next-pipe-props
```

or npm

```
npm install next-pipe-props --save
```

## usage:

next-pipe-props let's you pipe different functions (async works as well) in order to construct your final prop object.
The data is piped from the first function and passed down as the argument to the next function. The best developer experience comes from passing full objects and returning your final prop object. the

```ts
import { pipeProps } from "next-pipe-props";

function About({ helloWorld }) {
  return <div>{helloWorld}</div>;
}

export default About;

export const getStaticProps = pipeProps(
  async () => {
    return { initialData: "hello" };
  },
  ({ initialData }) => {
    return { helloWorld: initialData + " world" };
  }
);
```
