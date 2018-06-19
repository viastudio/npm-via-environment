
module.exports = {

    /**
     * Returns the name of the environment this is running in. ('dev', 'stage', 'prod' or false)
     *
     * @returns {Boolean|String}
     */
    getEnvironment: function() {
        os = require('os');

        if (os.hostname().match(/node1|node2|web1|web2/i)) {
            if (__filename.match(/\/var\/www\/viastaging/i) !== null) {
                return 'stage';
            } else if (__filename.match(/\/var\/www\/virtualhost/i) !== null) {
                return 'prod';
            }
        } else if (os.hostname().match(/mrbostonstaging/i)) {
            return 'stage';
        } else if (os.hostname().match(/mrboston-prod/i)) {
            return 'prod';
        } else if (os.hostname() == 'bang') {
            cwd = process.cwd();
            //The only way to tell if we're deploying to Denios staging vs. prod is by looking at the filesystem path.
            //This will be the name of the jenkins job workspace
            if (cwd.match(/denios.*?production.*?deploy/i)) {
                return 'prod';
            } else if (cwd.match(/denios.*?staging.*?deploy/i)) {
                return 'stage';
            } else {
                return 'dev';
            }
        } else {
            return 'dev';
        }

        return false;
    }

}
