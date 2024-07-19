# Figment Elements

You can either import the staking widget only or the full Dapp.

### Staking Widget

It's the UI component that handles the ETH staking process: connect a wallet, pick an amount, create validators, sign a staking transaction, broadcast it.

### Full Dapp

In addition to the staking widget it includes:

- the staking activity: log of every staking action
- a rewards tab with staked amount, all time rewards and a chart of rewards over time

# Usage

## Using React

```jsx
import { Staking, Dapp } from "figment-elements";

...

<div /* Add any custom styling necessary here */>
  <Staking />
</div>

...

<div /* Add any custom styling necessary here */>
  <Dapp />
</div>
```

## Using plain JavaScript

```jsx
React.useEffect(() => {
  window.FIGMENT_ELEMENTS_CONFIG = {
    elements: [
      {
        containerSelector: "#figment-elements-staking-container",
        element: "STAKING",
      },
      {
        containerSelector: "#figment-elements-dapp-container",
        element: "DAPP",
      },
    ],
  };

  const script = document.createElement("script");
  script.src = "https://dapp.figment.io/elements";
  script.type = "text/javascript";

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

...

<div
  id="figment-elements-staking-container"
  /* Add any custom styling necessary here */
/>

...

<div
  id="figment-elements-dapp-container"
  /* Add any custom styling necessary here */
/>
```

# Running This Demo App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```
yarn
yarn start
```
