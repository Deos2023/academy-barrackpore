(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
// Floating WhatsApp and Call buttons (bottom-left on every page)
    $(function() {
        if (document.getElementById('floating-cta')) return;

        // Inject styles
        if (!document.getElementById('floating-cta-style')) {
            const style = document.createElement('style');
            style.id = 'floating-cta-style';
            style.textContent = `
                #floating-cta { position: fixed; left: 16px; bottom: calc(16px + env(safe-area-inset-bottom, 0)); display: flex; flex-direction: column; gap: 12px; z-index: 1080; }
                #floating-cta .cta-btn { width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; text-decoration: none; box-shadow: 0 8px 20px rgba(0,0,0,0.25); transition: transform 0.2s ease, box-shadow 0.2s ease; }
                #floating-cta .cta-btn i { font-size: 1.5rem; line-height: 1; }
                #floating-cta .cta-btn:hover { transform: translateY(-2px) scale(1.05); box-shadow: 0 12px 28px rgba(0,0,0,0.3); }
                #floating-cta .cta-whatsapp { background: #25D366; }
                #floating-cta .cta-call { background: #0d6efd; }
                @media (max-width: 576px) { #floating-cta .cta-btn { width: 52px; height: 52px; } }
            `;
            document.head.appendChild(style);
        }

        // Build buttons
        const msg = 'Hello! I would like to know more about your courses.';
        const whatsappHref = 'https://wa.me/919748980580?text=' + encodeURIComponent(msg);
        const callHref = 'tel:+919748980580';

        const container = document.createElement('div');
        container.id = 'floating-cta';
        container.innerHTML = `
            <a href="${whatsappHref}" class="cta-btn cta-whatsapp" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
                <i class="bi bi-whatsapp"></i>
            </a>
            <a href="${callHref}" class="cta-btn cta-call" aria-label="Call us">
                <i class="bi bi-telephone-fill"></i>
            </a>
        `;
        document.body.appendChild(container);
    });

})(jQuery);

