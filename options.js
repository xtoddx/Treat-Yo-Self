// Generated by CoffeeScript 1.3.1
(function() {
  var restore_options, save_options;

  save_options = function() {
    return chrome.storage.sync.set({
      'value': theValue
    }, function() {
      return console.log('Settings saved');
    });
  };

  restore_options = function() {
    return chrome.storage.sync.get('value');
  };

}).call(this);
