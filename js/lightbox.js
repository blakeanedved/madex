var Madex = window.Madex || {}
Madex.lightbox = function (element) {
	var l = {}
	l.el = document.getElementById(element)
	l.opened = false

	l.open = function () {
		var bcr = l.el.getBoundingClientRect()
		l.ogbcr = bcr
		l.tempborderstats = l.el.style.borderRadius
		l.el.style.top = bcr.y
		l.el.style.left = bcr.x
		l.el.style.width = `${bcr.width}px`
		l.el.style.height = `${bcr.height}px`
		l.el.style.position = 'fixed'

		l.bgel = document.createElement('div')
		document.body.append(l.bgel)
		l.bgel.style.position = 'fixed'
		l.bgel.style.left = '0'
		l.bgel.style.top = '0'
		l.bgel.style.width = '100vw'
		l.bgel.style.height = '100vh'
		l.bgel.style.zIndex = '999'
		l.bgel.style.backgroundColor = '#292929'
		l.bgel.style.opacity = '0'
		l.bgel.style.transition = 'opacity .3s ease'

		setTimeout(function(){
			l.opened = true
			l.bgel.style.opacity = '1'
			l.el.style.transition = 'width .3s ease, height .3s ease, transform .3s ease, border-radius .2s ease'
			var width, height;
			if ((bcr.width / window.innerWidth) > (bcr.height / window.innerHeight)){
				width = window.innerWidth * 0.9
				height = (window.innerWidth * 0.9) * (bcr.height / bcr.width)
			} else {
				height = window.innerHeight * 0.9
				width = (window.innerHeight * 0.9) * (bcr.width / bcr.height)
			}
			l.el.style.transform = `translate(${(window.innerWidth / 2) - (width / 2) - bcr.x}px, ${(window.innerHeight / 2) - (height / 2) - bcr.y}px)`
			l.el.style.width = `${width}px`
			l.el.style.height = `${height}px`
			l.el.style.borderRadius = '0'
		}, 20)
		this.el.classList.add('active')
	}

	l.close = function () {
		var bcr = l.el.getBoundingClientRect()
		l.el.style.top = bcr.y
		l.el.style.left = bcr.x
		l.el.style.width = `${bcr.width}px`
		l.el.style.height = `${bcr.height}px`
		setTimeout(function(){
			l.opened = false
			l.bgel.style.opacity = '0'
			l.el.style.transition = 'width .3s ease, height .3s ease, transform .3s ease, border-radius .3s ease'
			l.el.style.transform = `translate(0, 0)`
			l.el.style.width = `${l.ogbcr.width}px`
			l.el.style.height = `${l.ogbcr.height}px`
			l.el.style.borderRadius = l.tempborderstats
			delete l.tempborderstats
			setTimeout(function(){
				document.body.removeChild(l.bgel)
				delete l.bgel
				l.el.style.position = 'static'
				l.el.style.transition = ''
				l.el.classList.remove('active')
			}, 300)
		}, 20)
	}

	document.addEventListener("click", () => {
		if (l.opened == true) {
			l.close()
		}
	})

	l.el.addEventListener('click', () => {
		if (!l.opened) {
			l.open()
		}
	})

	return l
}
