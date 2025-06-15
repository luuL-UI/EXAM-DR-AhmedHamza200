// Anti-debugging protection
(function() {
    const _0x4f8b=['debugger','toString','constructor','while (true) {}','apply','call','Function','return /" + this + "/','^([^ ]+( +[^ ]+)+)+[^ ]}'];
    (function(_0x2d8f05,_0x4f8b21){
        const _0x2d8f=function(_0x5b87d4){
            while(--_0x5b87d4){
                _0x2d8f05['push'](_0x2d8f05['shift']());
            }
        };
        _0x2d8f(++_0x4f8b21);
    }(_0x4f8b,0x1f4));
    const _0x2d8f=function(_0x2d8f05,_0x4f8b21){
        _0x2d8f05=_0x2d8f05-0x0;
        let _0x2d8f=_0x4f8b[_0x2d8f05];
        return _0x2d8f;
    };
    setInterval(function(){
        const _0x5b87d4=function(){};
        _0x5b87d4['prototype']['toString']=function(){
            return _0x2d8f('0x0');
        };
        new _0x5b87d4();
    },0xfa0);
})();

// Add protection against console access
(function() {
    const originalConsole = window.console;
    window.console = {
        log: function() {},
        warn: function() {},
        error: function() {},
        info: function() {},
        debug: function() {}
    };
})();

// Add protection against right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Add protection against keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (
        (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) ||
        (e.key === 'F12') ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j'))
    ) {
        e.preventDefault();
        return false;
    }
}); 