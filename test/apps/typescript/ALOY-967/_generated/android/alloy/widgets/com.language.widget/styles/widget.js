module.exports = [{ "isApi": true, "priority": 1000.0002, "key": "Label", "style": { top: "5dp", color: "#000", font: { fontSize: 13, fontWeight: "bold" }, height: Ti.UI.SIZE, width: Ti.UI.SIZE } }, { "isId": true, "priority": 100000.0003, "key": "header", "style": { top: "30dp" } }, { "isId": true, "priority": 100000.0004, "key": "myLabel", "style": { text: L("language__intro_text") } }];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'com.language.widget/' + s :
  s.substring(0, index) + '/com.language.widget/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}