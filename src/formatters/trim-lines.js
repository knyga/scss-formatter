module.exports = function(text) {
    return text.replace(/.+/gi, function(match) {
        return $.trim(match);
    });
}