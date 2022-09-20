const {createLogger, transports} = require('winston');

const infoLogger = createLogger({
    transports: [
        new transports.File({
            filename: './logs/inforLogs.log',
            level: 'info'
        })
    ]
})

module.exports = infoLogger;