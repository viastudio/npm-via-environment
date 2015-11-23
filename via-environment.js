
module.exports = {

    /**
     * Returns the name of the environment this is running in. ('dev', 'stage', 'prod' or false)
     *
     * @returns {Boolean|String}
     */
    getEnvironment: function() {
        os = require('os');

        if (os.hostname().match(/node1|node2|web1/i)) {
            if (__filename.match(/\/var\/www\/viastaging/i) !== null) {
                return 'stage';
            } else if (__filename.match(/\/var\/www\/virtualhost/i) !== null) {
                return 'prod';
            }
        } else if (os.hostname().match(/mrbostonstaging/i)) {
            return 'stage';
        } else {
            return 'dev';
        }

        return false;
    }

}