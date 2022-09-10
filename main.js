const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scroolY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)