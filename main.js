// add method format to string: https://sebhastian.com/javascript-format-string/
if (!String.prototype.format) {
    String.prototype.format = function () {
      let args = arguments;

      return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != "undefined" ? args[number] : match;
      });
    };
}
  

const OPEN_WATHER_ICON="http://openweathermap.org/img/wn/{0}@2x.png";
const OPEN_WATHER_API="https://api.openweathermap.org/data/2.5/weather?lat={0}&lon={1}&appid={2}";
const OPEN_WATHER_KEY="55c6c3cfbfcdc79bde4a63cf2d5bdcbf";

const EVENTO = {
    nombre:"feria de las plasntas",
    lugar: {
        latitud:-24.183346784048,
        longitud:-65.33130398918436
    }
};