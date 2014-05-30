
module.exports = {

    /**
     * Returns the name of the environment this is running in. ('dev', 'stage', 'prod' or false)
     *
     * @returns {Boolean|String}
     */
    getEnvironment: function() {
        os = require('os');

        if (os.hostname() === 'node1.viastudio.com') {
            if (__filename.match(/\/var\/www\/viastaging/i) !== null) {
                return 'stage';
            } else if (__filename.match(/\/var\/www\/virtualhost/i) !== null) {
                return 'prod';
            }
        } else {
            return 'dev';
        }

        return false;
    }

}