/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
   // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
})
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withPWA(nextConfig)
///set disable: false, so that it will generate service worker in both dev and prod
///set disable: true to completely disable PWA
// if you don't need to debug service worker in dev, you can set disable: process.env.NODE_ENV === 'development'
///register: boolean - whether to let this plugin register service worker for you
// default to true
// set to false when you want to handle register service worker yourself, this could be done in componentDidMount of your root app. you can consider the register.js as an example.
//scope: string - url scope for pwa
// default: basePath in next.config.js or /
// set to /app so that path under /app will be PWA while others are not
// scope: string - url scope for pwa
// default: basePath in next.config.js or /
// set to /app so that path under /app will be PWA while others are not
//sw: string - service worker script file name
// default: /sw.js
// set to another file name if you want to customize the output file name