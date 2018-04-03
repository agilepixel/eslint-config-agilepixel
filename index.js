module.exports = {

    rules: {
      arrow-parens: ["error", "as-needed"],
      brace-style: "error",
      comma-dangle: ["warn", {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore"
      }],
      consistent-this: "warn",
      compat/compat: "warn",
      implicit-arrow-linebreak: ["error", "beside"],
      indent: ["error", 4],
      keyword-spacing: ["error", { after: true, before: true }],
      linebreak-style: ["error", "unix"],
      one-var: ["error", "never"],
      no-console: "off",
      no-fallthrough: "error",
      no-multi-spaces: "error",
      no-useless-rename: "error",
      no-unneeded-ternary: "error",
      padded-blocks: ["error", "never"],
      prefer-const: "error",
      prefer-destructuring: "warn",
      prefer-rest-params: "warn",
      prefer-spread: "warn",
      prefer-template: "error",
      quotes: ["error", "single"],
      semi: ["error", "always", { omitLastInOneLineBlock: true}],
      semi-style: "error",
      sort-vars: "error",
      switch-colon-spacing: ["error", {after: true, before: false}],
      template-curly-spacing: ["error", "never"],
      valid-jsdoc: "warn",
      yoda: "error"
  }

};