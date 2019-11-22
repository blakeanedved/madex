// var Madex = window.Madex || {}
document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('form').forEach(elem => {
		elem.setAttribute('novalidate', true)
	})
	document.querySelectorAll('.input-field').forEach(elem => {
		Array.from(elem.children).forEach(e => {
			if (e.nodeName === 'INPUT'){
				e.addEventListener('blur', () => {
					e.parentNode.classList.remove('active')
					Array.from(e.parentNode.children).forEach(el => {
						if (el.nodeName === 'LABEL' && e.value !== '')
							return
						el.classList.remove('active')
					})
				})
				e.addEventListener('focus', () => {
					e.parentNode.classList.add('active')
					Array.from(e.parentNode.children).forEach(el => {
						el.classList.add('active')
					})
				})
			}
		})
	})
})
