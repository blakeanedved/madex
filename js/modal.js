var Madex = window.Madex || {}
Madex.modal = function (element) {
	var m = {}
	m.el = document.getElementById(element)
	m.opened = false

	m.open = function () {
		console.log(this)
		this.opened = true

		this.el.style.transition = '.3s ease'
		this.el.style.display = 'block'
		setTimeout(() => {
			this.el.style.top = '10%'
			this.el.style.opacity = '1'
			this.el.style.transform = 'scaleX(1) scaleY(1)'
		}, 20)

		console.log(this)
	}

	m.close = function () {
		this.opened = false

		this.el.style.transition = '.3s ease'
		setTimeout(() => {
			this.el.style.top = '4%'
			this.el.style.opacity = '0'
			this.el.style.transform = 'scaleX(0.8) scaleY(0.8)'
			setTimeout(() => {
				this.el.style.display = 'none'
			}, 300)
		}, 20)
	}

	document.addEventListener("click", (event) => {
		if (m.opened == true && event.target.getAttribute('data-target') != element) {
			let targetElement = event.target
			do {
				if (targetElement == m.el) return
				targetElement = targetElement.parentNode
			} while (targetElement)
			m.close()
		}
	})

	document.querySelectorAll(`*[data-target=${element}]`).forEach(elem => {
		elem.addEventListener('click', () => {
			m.open()
		})
	})

	return m
}
