module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "babel",
        "react",
        "prettier"
    ],
    "rules": {
        "arrow-parens": ["error", "as-needed"],
        "babel/semi": 1,
        "indent": ["error", 4, { "ignoredNodes": ['TemplateLiteral'] }],
        "template-curly-spacing": ['off'],
        "max-len": [2, 120, 4, {"ignoreUrls": true}],
        "react/jsx-indent": ["off"],
        "react/jsx-indent-props": ["off"],
        "react/jsx-filename-extension": ["off"]
    }
  };
  