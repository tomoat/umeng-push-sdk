module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parser": 'babel-eslint',
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "VariableDeclarator": {
                    "var": 4,
                    "let": 4,
                    "const": 5
                }
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-unused-vars": [
            "warn",
            {
                "args": "after-used",
                "vars": "all"
            }
        ],
        "no-undef": 1,
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-console": 1
    }
};