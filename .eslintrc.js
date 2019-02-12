module.exports = {
    "extends": "airbnb",
    "env": {
      "jest":true
    },
    "rules": {
      "no-console":0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      'max-len': ["error", { "code": 150 }],
      "jsx-a11y/label-has-for": 0,
    }
};