module.exports = {
  async rewrites() {
    return [
      {
        source: '/spa/:any*', // This is an example of how to use SPA setup in NextJS
        destination: '/spa',
      },
    ];
  },
};
