let btn = $('#get');
const getData = btn.click(function () {
  btn.after('<div id="programmer-data"></div>');
  $.getJSON(
    "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
    function (data) {
      // $('#programmer-data').html("");
      $('#programmer-data').html("")
      $('#programmer-data').append(`<p>Imię: ${data.imie}</p>`);
      $('#programmer-data').append(`<p>Nazwisko: ${data.nazwisko}</p>`);
      $('#programmer-data').append(`<p>Zawód: ${data.zawod}</p>`);
      $('#programmer-data').append(`<p>Firma: ${data.firma}</p>`);
    }
  )
})