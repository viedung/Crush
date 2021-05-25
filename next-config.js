module.exports = {
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" },
      "/crush": { page: "/crush" },
      "/test": { page: "/test" },
    };
  },
};
