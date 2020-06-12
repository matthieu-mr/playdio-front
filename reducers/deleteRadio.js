export default function(deleteRadio = false, action) {
    if(action.type == 'deleteRadio') {
      var newDeleteRadio = !deleteRadio;
      return newDeleteRadio;
    } else {
      return deleteRadio;
    }
  }