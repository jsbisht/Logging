/**
 * Created by WORKER on 19-04-2015.
 */
function Logger() {
    return {
        isEnabled: true,
        log: console.log,
        logDir: console.dir,
        enable: function() {
            this.isEnabled = true;
            console.dir = this.logDir;
            console.log = this.log;
        },
        disable: function() {
            this.isEnabled = false;
            console.dir = function() {};
            console.log = function() {};
        },
        toggle: function() {
            this.isEnabled ? this.disable() : this.enable();
        }
    }
}

module.exports = Logging;
