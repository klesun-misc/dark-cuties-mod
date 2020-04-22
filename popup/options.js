// Saves options to chrome.storage
function save_options() {
  var all = document.getElementById('all').checked;
  var gasTracker = document.getElementById('gasTracker').checked;
  var darkTheme = document.getElementById('darkTheme').checked;
  var currencyChanger = document.getElementById('currencyChanger').checked;
  var customBG = document.getElementById('customBG').checked;
  var genomeMapper = document.getElementById('genomeMapper').checked;
  chrome.storage.sync.set({
    all: all,
    gasTracker: gasTracker,
    darkTheme: darkTheme,
    currencyChanger: currencyChanger,
    customBG: customBG,
    genomeMapper: genomeMapper,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Success. Please refresh the game page.';
    setTimeout(function() {
      status.textContent = '';
    }, 2500);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default gasTracker = false.
  chrome.storage.sync.get({
    gasTracker: false,
    darkTheme: false,
    currencyChanger: false,
    customBG: false,
    genomeMapper: false,
	all: false,
  }, function(items) {
	  console.log(items);
    document.getElementById('all').checked = items.all;
    document.getElementById('gasTracker').checked = items.gasTracker;
    document.getElementById('darkTheme').checked = items.darkTheme;
    document.getElementById('currencyChanger').checked = items.currencyChanger;
    document.getElementById('customBG').checked = items.customBG;
    document.getElementById('genomeMapper').checked = items.genomeMapper;
  });
  document.getElementById('versionNumber').textContent = chrome.runtime.getManifest().version;
}

function copyEthAddres(elem) {	
  var range, selection, worked;

  if (document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(elem);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();        
    range = document.createRange();
    range.selectNodeContents(elem);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  
  document.execCommand('copy');
  document.getElementById('status').textContent  = "Address copied to clipboard.";

  setTimeout(function() {
	document.getElementById('status').textContent  = "";
  }, 2000);
}

document.getElementById("all").onclick = function fun()
{
  if (document.getElementById('all').checked) 
  {
    document.getElementById('gasTracker').checked = true;
    document.getElementById('darkTheme').checked = true;
    document.getElementById('currencyChanger').checked = true;
    document.getElementById('customBG').checked = true;
    document.getElementById('genomeMapper').checked = true;
  } else {
    document.getElementById('gasTracker').checked = false;
    document.getElementById('darkTheme').checked = false;
    document.getElementById('currencyChanger').checked = false;
    document.getElementById('customBG').checked = false;
    document.getElementById('genomeMapper').checked = false;
  }
}
document.getElementById("coffeeEth").onclick = function copy()
{
	copyEthAddres(document.querySelector("#coffeeEth span"));
}
document.getElementById("coffeeTrx").onclick = function copy()
{
	copyEthAddres(document.querySelector("#coffeeTrx span"));
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);