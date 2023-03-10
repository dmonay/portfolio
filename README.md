### 1. `yarn`

### 2. `yarn start`

### 3. `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### NOTE:

The actual deploy is done through Netlify, not Render. The DNS records in Cloudflare are confusing, got a CNAME pointed to Netlify and a www subdomain CNAME pointed to render. It's the first one that takes precedence. If you need to tweak Netlify, go to

https://app.netlify.com/sites/loving-kare-2b6486/overview
