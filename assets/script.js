
document.addEventListener('DOMContentLoaded', function(){
            let pageTitle = document.getElementById('pageTitle');
            let text = pageTitle.innerText;
            let index = 0;

            document.getElementById('scrollToServices').addEventListener('click', function (e) {
                e.preventDefault();
                let servicesSection = document.querySelector('.services');
                let yOffset = servicesSection.getBoundingClientRect().top + window.pageYOffset;
                let y = yOffset - window.innerHeight / 2 + servicesSection.offsetHeight / 2;
                window.scrollTo({top: y, behavior: 'smooth'});
            });

            document.getElementById('scrollToTopBtn').addEventListener('click', function (e) {
                e.preventDefault();
                window.scrollTo({top: 0, behavior: 'smooth'});
            });
        });

        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("scrollToTopBtn").style.display = "block";
            } else {
                document.getElementById("scrollToTopBtn").style.display = "none";
            }
        }