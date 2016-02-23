var settings = Alloy.Models.settings;

function doOpen() {
  settings.fetch();

  Ti.API.debug('doOpen() - ' + JSON.stringify(settings));
}

function doClick(e) {
  var name = $.textName.getValue();
  var gender = $.textGender.getValue();
  var nationality = $.textNationality.getValue();

  Ti.API.debug('doClick() - ' + name + ' / ' + gender + ' / ' + nationality);

  settings.save({
    name: name,
    gender: gender,
    nationality: nationality
  });
}

$.index.open();
