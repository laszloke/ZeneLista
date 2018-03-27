module.exports = {
    "extends": "standard",
    "plugins": [ "jest" ],
    "env": {
      "jest/globals": true
    },
    "rules": {
      "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
    }
  }
