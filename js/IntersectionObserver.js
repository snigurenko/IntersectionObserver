const titles = document.querySelectorAll('h1, h2, h3'); 
  const options = {
    root: null, // the viewport
    threshold: 0,
    rootMargin: "-50px 0px -350px",
  };
// variant one
const observer = new  IntersectionObserver(function
  (entries) {
    entries.forEach(entry => {
      entry.intersectionRatio > 0
      // as an option u can use '${entry.target.dataset.delay}' at animation, and add 'data-delay' to the html tag
      ? entry.target.style.animation = `title 2s forwards ease-out`
      : entry.target.style.animation = 'none'
  
    })
  }, options);

  titles.forEach(el => {
    observer.observe(el)
  })


  // variant two
  const sectionsEl= document.querySelectorAll('p, li, table')

  const observer2 = new  IntersectionObserver(function
    (entries) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return
        }
      
        entry.target.classList.toggle('inverse')
        observer2.unobserve(entry.target)
      })
    }, options);
  
    sectionsEl.forEach(section => {
      observer2.observe(section)
    })
      
  