
(function (safari) {
  
  var host = window.location.host;

  if (host.indexOf("bitbucket") === -1) { return }

  var mergeButton = document.getElementById("fulfill-pullrequest");

  var observer = new MutationObserver(callbackForMergePanel);
  
  mergeButton.onclick = function() {
    observer.observe(document.body, { attributes: true, childList: true });
  };

}(safari));

function callbackForMergePanel(mutations) {
  console.log("mutations", mutations);

  modifyPanelForSquash();
};

function modifyPanelForSquash() {
  var mergeStrategyOptions = document.getElementById("id_merge_strategy");

  mergeStrategyOptions.selectedIndex = 1;
  mergeStrategyOptions.value = "squash";

  var mergeStrategyDiv = document.getElementById("s2id_id_merge_strategy");
  var mergeStrategySelectClassNames = mergeStrategyDiv.getElementsByClassName("select2-chosen");
  
  if (mergeStrategySelectClassNames.length > 1) { return }

  var mergeStrategySpan = mergeStrategySelectClassNames[0];

  mergeStrategySpan.textContent = "Squash";
};