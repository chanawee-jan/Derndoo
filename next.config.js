const withImages = require('next-images');

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: 'empty'
//       }
//     }

//     return config
//   }
// }

module.exports = withImages({
    distDir: "nextjs",
    webpack(config, options) {
        return config
    }
    
});
// module.exports = {
//     distDir: "nextjs",
//   };


