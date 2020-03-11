setTimeout(function() {
  var h2 = document.getElementsByTagName('h2');
  for (let i = 0; i < h2.length; ++i) {
    var span = h2[i].getElementsByTagName('span')[0];
    if (!span) continue;
    if (['Home', 'ホーム'].includes(span.textContent)) {
      span.style.fontSize = '30pt';
      span.style.color = 'red';
    }
  }
}, 500);
