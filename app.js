
(function(){
  function key(day, k){ return 'k100_' + day + '_' + k; }
  // Day pages: completion toggle
  var t = document.getElementById('complete-toggle');
  if (t){
    var day = t.getAttribute('data-day');
    t.checked = localStorage.getItem(key(day,'done')) === '1';
    t.addEventListener('change', function(){ localStorage.setItem(key(day,'done'), t.checked ? '1' : '0'); });
  }
  // Exercise checkboxes
  document.querySelectorAll('.ex-check').forEach(function(cb){
    var k = key(cb.getAttribute('data-day'), 'ex' + cb.getAttribute('data-idx'));
    cb.checked = localStorage.getItem(k) === '1';
    cb.addEventListener('change', function(){ localStorage.setItem(k, cb.checked ? '1' : '0'); });
  });
  // Log fields
  document.querySelectorAll('.log-field').forEach(function(inp){
    var k = key(inp.getAttribute('data-day'), inp.getAttribute('data-k'));
    var v = localStorage.getItem(k);
    if (v !== null) inp.value = v;
    inp.addEventListener('input', function(){ localStorage.setItem(k, inp.value); });
  });
  // Index: progress + done cards
  var done = 0;
  document.querySelectorAll('[data-daycard]').forEach(function(card){
    var n = card.getAttribute('data-daycard');
    if (localStorage.getItem(key(n,'done')) === '1'){ card.classList.add('done'); done++; }
  });
  var pc = document.getElementById('progress-count');
  if (pc) pc.textContent = done;
})();
