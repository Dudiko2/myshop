# Contents

- [About](#about)
- [Demo](#demo)
- [Technologies](#technologies)
- [Local Installation](#local-installation)

## About

This project demonstrates an e-commerce website that uses `Next.js` on the frontend and Shopify as the backend. The data stored store on Shopify is retrieved using `Shopify Storefront API`.

## Demo

https://my-shop-sage.vercel.app/

## Technologies

- React
- Next.js
- TypeScript
- Shopify JS Buy SDK

## Local Installation

### Prerequisites

Have a Shopify Partners account, a development store and a Storefront API access token. [Learn more here](https://shopify.dev/custom-storefronts/tools/js-buy)

### Install

1. Clone this repository
2. Create a file named `.env.local` inside the root directroy of the project and insert the required environment variables:

```
STOREFRONT_DOMAIN=<your-store-domain>
STOREFRONT_TOKEN=<your-storefront-token>
```

3. Install dependencies `npm install`

To run the development server, use `npm run dev`
