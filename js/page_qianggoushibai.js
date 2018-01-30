window.onload = function () {
  console.log(location.href)
  chrome.storage.local.get('isAuto', function (result) {
    console.log(result.isAuto)
    if (result.isAuto === 10) {
      var handler = null
      var tryBtn = null

      handler = setInterval(function () {
        tryBtn = document.getElementById('tryBtn')
        if (tryBtn != null) {
          if (confirm('是否重新抢购')) {
            tryBtn.click()
            clearInterval(handler)
          } else {
            clearInterval(handler)
          }
        }
      }, 400)
    }
  })
}
