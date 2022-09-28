# BHXTravel

## Prerequisites
- [Nodejs 18+](https://nodejs.org/en/download/)

## Getting Started
1. Install all dependencies
```
npm install
```

2. Launch Application
```
npm run dev
```

3. Import Content to your Builder.io Account
```
builder create -n bhxtravel-demo -k [PRIVATE KEY] -i ./content
```
Note: You can find Private Key in [Account Settings -> Organization](https://builder.io/account/organization).

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
