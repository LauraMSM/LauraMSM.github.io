window.addEventListener('load', function() {
    new Glider(document.querySelector('.carousel__list'), {

        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.back',
          next: '.next'
        },
        responsive: [
          {
            breakpoint: 321,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              itemWidth: 150,
              duration: 1.5,
              
            }
          },{
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              itemWidth: 150,
              duration: 1.5,
              
            }
          }, {
            breakpoint: 1025,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              itemWidth: 150,
              duration: 1.5,
              
            }
          }, {
            breakpoint: 1281,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              itemWidth: 150,
              duration: 1.5,
              
              
            } 
          }, 
        ]
    });
});

var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

function sendEmail() {
  Email.send({
    SecureToken : "97100e7d-cc3b-481d-9a3e-2bc84b04f420",
    To : 'laurasarmientomelian@gmail.com',
    From : "laurasarmientomelian@gmail.com",
    Subject : `${document.form.asunto.value}`,
    Body : `${document.form.descripcion.value}`,
  }).then(
    alert("Mensaje enviado")
  );
}
