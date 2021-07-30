  //login button event handler
  const startBtn = document.getElementById('start')
  startBtn.addEventListener('click', function() {
      var loginArea=document.getElementById('login-area')
      loginArea.style.display = "none"
      var tranArea=document.getElementById('transaction-area')
      tranArea.style.display = "block"
      
  })
  
  //deposit button event handler
  var depositBtn = document.getElementById('addDeposit');
  depositBtn.addEventListener('click', function () {
      var depositNum = getInput("depositAmount")

      updateSpan('currentDeposit', depositNum)
      updateSpan('currentBalance', depositNum)

      document.getElementById('depositAmount').value = "";
  })

//withdraw button event handler
  var withdrawBtn = document.getElementById('addWithdraw');
  withdrawBtn.addEventListener('click', function(){
      var withdrawNum = getInput("withdrawAmount")
    
      updateSpan("currentWithdraw", withdrawNum)
      updateSpan("currentBalance",-1 * withdrawNum)
      document.getElementById('withdrawAmount').value = "";
     
  })
  function getInput(id) {
      var withdrawAmount = document.getElementById(id).value;
      var withdrawNum = parseFloat(withdrawAmount);
      return withdrawNum;            
      
  }
  
      function updateSpan(id, depositNum ) {
      var current = document.getElementById(id).innerText;
      var currentNum = parseFloat(current);
      var totalAmount = depositNum + currentNum;
      document.getElementById(id).innerText = totalAmount;
  }