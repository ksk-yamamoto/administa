
var keyMirror = function(obj) {
  var ret = {};
  var key;
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object.');
  }
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      ret[key] = key;
    }
  }
  return ret;
};

export default keyMirror({
  INITIALIZE:         null,
  APP_TRANSITION:     null,
  RESOURCE_BUILD:     null,
  RESOURCE_FETCH:     null,
  RESOURCE_LIST:      null,
  RESOURCE_UPDATED:   null,
  RESOURCE_INVALID:   null,
  RESOURCE_DELETED:   null,
  DIALOG_OPENED:      null,
  DIALOG_CLOSED:      null,
  MENU_INITIALIZED:   null,
  USER_INITIALIZED:   null,

});
