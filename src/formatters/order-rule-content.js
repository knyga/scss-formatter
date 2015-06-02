module.exports = function(text) {
    var lines = _.map(_.filter(text.split('\n'), function(line) {
        return !_.isEmpty(line);
    }), function(line) {
        return $.trim(line);
    });

    return lines.sort();
};