import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import babelrc from 'babelrc-rollup';

export default {
	input: "./src/index.js",
	output: {
        strict: false,
		file: "./dist/bundle.js",
		format: "cjs",
		sourcemap: false
	},
	plugins: [
		resolve({
            jsnext: true,
            main: true
        }),
        commonjs(),
        babel({
			// ...babelrc(),
            exclude: "node_modules/**"
        })
		// production && uglify() // minify, but only in production
	]
};