# BHXTravel
![Vercel](https://vercelbadge.vercel.app/api/bhxtravel/bhxtravel)

This [NextJS](https://nextjs.org/) project is powered by [Builder.io](https://www.builder.io/) and hosted on [Vercel infrastructure](https://vercel.com/pricing).

![Overall infrastructure overview](docs/infrastructure.drawio.svg?raw=true "Overview")

## Prerequisites
- [Nodejs 18+](https://nodejs.org/en/download/)

## Getting Started
1. Install all dependencies
```
npm install
```

2. Rename .env.sample to .env and supply the values. You can copy the env variables from [vercel -> bhxtravel -> settings -> environment variables](https://vercel.com/bhxtravel/bhxtravel/settings/environment-variables).

3. Launch Application
```
npm run dev
```

### Setting up your own Builder.io Account
You can register for [free builder.io account](https://www.builder.io/m/pricing) and import content & experiment with components.
After successful registration copy your API private key. You can find Private Key in [Account Settings -> Organization](https://builder.io/account/organization).

1. Install Builder.io cli
```
npm install @builder.io/cli -g
```

2. Import Content to your Builder.io Account. If you prefer to work with the latest content, you can download the latest [weekly snapshot](https://github.com/poly-glot/bhxtravel/actions/workflows/backup.yml) created by [Github backup workflow](https://github.com/poly-glot/bhxtravel/blob/main/.github/workflows/backup.yml).
```
builder create -n bhxtravel-demo -k [PRIVATE KEY] -i ./content
```

4. Visit [Builder.io](https://builder.io/account/space) Admin panel & select newly created "space". Copy & Update the "Public API Key" in .env file.

5. Visit [Content Admin](https://builder.io/content) to start modifying content.

## Overview

# Tips
## Editor Setup

### IntelliJ
- Install PostCSS Plugin
- Change CSS Dialect to PostCSS in Language & Frameworks -> Stylesheets -> Dialects

## Adding Icons
- Add SVG icon(s) to icons/ folder
- Run the following command in your terminal
```
npm run icons
```
- Push changes

### Deploy
Every time a commit is made to the main branch, [Vercel](https://vercel.com/bhxtravel/bhxtravel) automatically deploys the application.
