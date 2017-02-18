import Ember from 'ember';
import ENV from 'du-library/config/environment';

export default Ember.Route.extend({
  model() {
    var location_id = "8R4YX63ESVXRE";
    var endpoint = "https://connect.squareup.com/v1/" + location_id + "/items";

    var items = function httpGet(endpoint) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", endpoint, false ); // false for synchronous request
    console.log(ENV);
    xmlHttp.setRequestHeader("Authorization", ENV.APP.SQUARE_PERSONAL_ACCESS_TOKEN);
    xmlHttp.setRequestHeader("Accept", "application/json");
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }
    return JSON.parse(items(endpoint));
  }
});
