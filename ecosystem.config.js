module.exports = {
    apps: [
        {
            name: 'web',
            script: './main.js',
            env: {
                NODE_ENV: 'production',
                PORT: 1001,
            },
        },
    ],
};