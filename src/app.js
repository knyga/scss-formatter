var OrderProvider = function(text) {
    this._text = text;
};
OrderProvider.prototype.toString = function() {
    return this._text;
};
OrderProvider.prototype.format = function(ruleName) {
    this._text = this.formatters[ruleName](this._text);
    return this;
};
OrderProvider.prototype.formatters = {
    orderRules: require('./formatters/order-rules'),
    formatSelectorLines: require('./formatters/format-selector-lines'),
    zeroPx: require('./formatters/zero_px')
};

window.formatScss = function(text) {
    var op = new OrderProvider(text);

    return op
        .format('orderRules')
        .format('formatSelectorLines')
        .format('zeroPx')
        .toString();
};