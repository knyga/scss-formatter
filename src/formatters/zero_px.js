module.exports = function(text) {
    return text.replace(/: ?0(px|em|rm|%);/gi, function(match, capture) {
        return ": 0;";
    });
};