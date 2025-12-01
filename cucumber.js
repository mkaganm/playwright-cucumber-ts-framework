module.exports = {
    default: {
        paths: ['src/features/**/*.feature'],
        requireModule: ['ts-node/register'],
        require: ['src/steps/**/*.ts', 'src/support/**/*.ts'],
        format: ['progress-bar', 'html:cucumber-report.html'],
        parallel: 1
    }
};
