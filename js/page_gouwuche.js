window.onload = function () {
  console.log(location.href)
  chrome.storage.local.get('isAuto', function (result) {
    console.log(result.isAuto)
    if (result.isAuto === 10) {
      var handler = null
      var GotoShoppingCart = null

      handler = setInterval(function () {
        GotoShoppingCart = document.getElementById('GotoShoppingCart')
        if (GotoShoppingCart != null) {
          GotoShoppingCart.click()
          clearInterval(handler)
        }
      }, 400)
    }
  })
}
