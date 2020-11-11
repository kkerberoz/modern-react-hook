module.exports = {
  // roots: ["src"],
  moduleDirectories: ["./src", "node_modules"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      //   babelConfig: true,
      isolatedModules: true,
    },
  },
};
