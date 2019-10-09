window.Madex = window.Madex || {}
Madex.toast = function (options) {
	var toast = document.createElement('div')
	toast.classList = 'toast'
	if (options.classes)
		toast.classList += ' ' + options.classList
	toast.innerHTML = options.html

	var toastContainer = document.getElementById('toast-container')
	if (toastContainer == null) {
		toastContainer = document.createElement('div')
		toastContainer.id = 'toast-container'
		document.body.appendChild(toastContainer)
	}

	toast.style.transform = 'translateY(80%)'
	toast.style.transition = `transform ${(options.inDuration || 300) / 1000}s ease, top 0.2s ease`
	toastContainer.appendChild(toast)
	setTimeout(function () {
		toast.style.transform = 'translateY(0%)'
		setTimeout(function () {
			toast.style.transition = `transform ${(options.outDuration || 375) / 1000}s ease, opacity ${(options.outDuration || 375) / 1000}s ease`
			setTimeout(function () {
				toast.style.transform = 'translateY(-100%)'
				toast.style.opacity = '0'
				setTimeout(function () {
					toastContainer.removeChild(toast)
				}, options.outDuration || 375)
			}, options.displayLength || 4000)
		}, options.inDuration || 300)
	}, 20)
}