module.exports = {
  apps : [
      {
        name: "covid",
        script: "./server.js",
        watch: true,
        env: {
            "PORT": 3001,
            "NODE_ENV":"production"
        }
      }
  ]
}
