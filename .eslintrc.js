module.exports = {
    "extends": "standard",
    "plugins": [ "jest" ],
    "env": {
      "jest/globals": true,
      "browser": true,
      "node": true,
    },
    "rules": {
      "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
    }
  }
