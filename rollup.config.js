import babel from 'rollup-plugin-babel'

export default {
    input: 'src/es6tpl/test.js',
    output: {
        file: 'dist/test.js',
        format: 'cjs'
    },
    banner: '/* es6 environment by fed123.com */',
    plugins: [
        babel({
            "presets": [[
                "env",
                {
                    "modules": false
                }
            ]],
            // "plugins": [
            //     ["transform-react-jsx", {
            //         "pragma": "h"
            //     }]
            // ]
        })
    ]
}
