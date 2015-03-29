
var Hello = function(){
    var self = {
        say: function(){
            console.info('Hello World');
        }
    };
    return self;
}();

module.exports = Hello;