
    // stats counter animation (runs once when the section scrolls into view)
    let counters = document.querySelectorAll(".counter")
    let statsSection = document.querySelector(".stats-section")
    let counted = false

    function runCounters() {
        counters.forEach((counter) => {
            let target = +counter.getAttribute("data-target")
            let current = 0
            let step = Math.ceil(target / 100)

            let timer = setInterval(() => {
                current += step
                if (current >= target) {
                    counter.textContent = target
                    clearInterval(timer)
                } else {
                    counter.textContent = current
                }
            }, 15)
        })
    }

    if (statsSection) {
        window.addEventListener("scroll", () => {
            let rect = statsSection.getBoundingClientRect()
            if (rect.top < window.innerHeight && rect.bottom > 0 && !counted) {
                counted = true
                runCounters()
            }
        })
    }
