module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: require("path").resolve(__dirname, "build")
    }
}