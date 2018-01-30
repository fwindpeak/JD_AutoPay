window.onload = function () {
  console.log(location.href)
  chrome.storage.local.get('isAuto', function (result) {
    console.log(result.isAuto)
    if (result.isAuto === 10) {
      var handler = null
      var orderSubmit = null
      // 提交订单
      handler = setInterval(function () {
        orderSubmit = document.getElementById('order-submit')
        if (orderSubmit != null) {
          orderSubmit.click()
          clearInterval(handler)
        }
      }, 300)
    }
  })
}
