var settings = Alloy.Models.settings;

function doOpen() {
  settings.fetch();
}

function doSaveClick(e) {
  var name = $.textName.getValue();
  var gender = $.textGender.getValue();
  var nationality = $.textNationality.getValue();

  settings.save({
    name: name,
    gender: gender,
    nationality: nationality
  });
}

function doGenderClick(e) {
  var opts = {
    title: 'Select gender',
    options: [
      'Male', 'Female', 'Other', 'Cancel'
    ],
    cancel: 3
  };
  var genderDialog = Ti.UI.createOptionDialog(opts);
  genderDialog.addEventListener('click', function(e) {
    var cancel = ((OS_IOS && opts.cancel === e.index) || (OS_ANDROID && e.cancel));
    if (!cancel) {
      $.textGender.setValue(opts.options[e.index]);
    }
  });
  genderDialog.show();
}

$.index.open();
