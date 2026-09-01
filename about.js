let stats = document.querySelectorAll(".stat strong");

let values = [12000, 450, 60, 98];

let observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            stats.forEach((stat, index) => {

                let target = values[index];
                let count = 0;
                let increment = target / 100;

                let counter = setInterval(() => {

                    count += increment;

                    if (count >= target) {
                        count = target;
                        clearInterval(counter);
                    }

                    if (index === 3) {
                        stat.textContent =
                            Math.floor(count) + "%";
                    } else {
                        stat.textContent =
                            Math.floor(count).toLocaleString() + "+";
                    }

                }, 20);

            });

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.5
});


let statsSection = document.querySelector(".abt-stats-grid");

observer.observe(statsSection);