(function ($) {
  "use strict";

  const $documentOn = $(document);
  const $windowOn = $(window);

  $documentOn.ready( function() {
    //>> Mobile Menu Js Start <<//
    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    //>> Sidebar Toggle Js Start <<//
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });
    $(".sidebar__toggle").on("click", function () {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });

    //>> Body Overlay Js Start <<//
    $(".body-overlay").on("click", function () {
      $(".offcanvas__area").removeClass("offcanvas-opened");
      $(".df-search-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
    });

    //>> Sticky Header Js Start <<//
    $windowOn.on("scroll", function () {
      if ($(this).scrollTop() > 250) {
        $("#header-sticky").addClass("sticky");
      } else {
        $("#header-sticky").removeClass("sticky");
      }
    });      

    //>> Video Popup Start <<//
    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".video-popup").magnificPopup({
      type: "iframe",
      callbacks: {},
    });

    //>> Counterup Start <<//
    $(".count").counterUp({
      delay: 15,
      time: 4000,
    });

    //>> Wow Animation Start <<//
    new WOW().init();

    //>> Nice Select Start <<//
    $("select").niceSelect();

    //>> Testimonial Contact Slider Start <<//
    if ($(".testi-content-slider").length > 0) {
      const testiContentSlider = new Swiper(".testi-content-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        pagination: {
          el: ".dot-2",
          clickable: true,
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> Testimonial-slider Slider Start <<//
    if ($(".testimonial-slider").length > 0) {
      const testimonialSliders = new Swiper(".testimonial-slider", {
        spaceBetween: 30,
        speed: 8000,
        loop: true,
        effect: "cards",
        cardsEffect: {
          perSlideOffset: 8,
          perSlideRotate: 2,
          slideShadows: false,
        },
        grabCursor: true,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
      });
    }

    //>> Testimonials Slider Start <<//
    if ($(".testimonial-slider-2").length > 0) {
      const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
        spaceBetween: 30,
        speed: 2500,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> Client Slider Start <<//
    if ($(".brand-slider").length > 0) {
      const brandSlider = new Swiper(".brand-slider", {
        spaceBetween: 30,
        speed: 1500,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },

        breakpoints: {
          1199: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 2,
          },
        },
      });
    }

    //>> Project Hover Js Start <<//
    const getSlide = $('.main-box, .box').length - 1;
    const slideCal = 100 / getSlide + '%';
    
    $('.box').css({
        "width": slideCal
    });
    
    $(document).on('mouseenter', '.box', function() {
        $('.box').removeClass('active');
        $(this).addClass('active');
    });     

    //>> Search Popup Start <<//
    const $searchWrap = $(".search-wrap");
    const $navSearch = $(".nav-search");
    const $searchClose = $("#search-close");

    $(".search-trigger").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate({ opacity: "toggle" }, 500);
      $navSearch.add($searchClose).addClass("open");
    });

    $(".search-close").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate({ opacity: "toggle" }, 500);
      $navSearch.add($searchClose).removeClass("open");
    });

    function closeSearch() {
      $searchWrap.fadeOut(200);
      $navSearch.add($searchClose).removeClass("open");
    }

    $(document.body).on("click", function (e) {
      closeSearch();
    });

    $(".search-trigger, .main-search-input").on("click", function (e) {
      e.stopPropagation();
    });

    //>> Mouse Cursor Start <<//
    function mousecursor() {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "a, .cursor-pointer", function () {
            ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
    $(function () {
      mousecursor();
    });

    //>> Back To Top Slider Start <<//
    $windowOn.on("scroll", function () {
      if ($(this).scrollTop() > 20) {
        $("#back-top").addClass("show");
      } else {
        $("#back-top").removeClass("show");
      }
    });

    $documentOn.on("click", "#back-top", function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  }); // End Document Ready Function

  //>> Typed Text Start <<//
  document.addEventListener("DOMContentLoaded", function () {
    const typedEl = document.querySelector(".type-text");
  
    if (typedEl) {
      new Typed(typedEl, {
        strings: [
          '<span class="highlight">Software</span> Development',
          '<span class="highlight">Product</span> Research',
          '<span class="highlight">Technology</span> Consulting',
          '<span class="highlight">Web</span> Applications',
          '<span class="highlight">AI</span> Solutions',
          '<span class="highlight">Cloud</span> Development',
          '<span class="highlight">API</span> Development',
          '<span class="highlight">SaaS</span> Solutions',
          '<span class="highlight">Digital</span> Products',
          '<span class="highlight">Business</span> Automation',
          '<span class="highlight">Technical</span> Research',
          '<span class="highlight">Website</span> Maintenance'
        ],
        typeSpeed: 100,
        backSpeed: 40,
        startDelay: 0,
        backDelay: 200,
        loop: true,
        showCursor: false,
        smartBackspace: true,
      });
    }
  });

  //>> Thumb Hover Start <<//
   document.addEventListener("DOMContentLoaded", function () {
    const newsThumbs = document.querySelectorAll(".news-item-2");
  
    newsThumbs.forEach((item) => {
      const thumbHover = item.querySelector(".thumb-hover");
  
      // Skip if .thumb-hover not found
      if (!thumbHover) return;
  
      let animationFrame;
  
      item.addEventListener("mousemove", (event) => {
        if (animationFrame) cancelAnimationFrame(animationFrame);
  
        animationFrame = requestAnimationFrame(() => {
          const rect = item.getBoundingClientRect();
          const dx = event.clientX - rect.left;
          const dy = event.clientY - rect.top;
  
          thumbHover.style.transform = `translate(${dx}px, ${dy}px) rotate(24.15deg)`;
        });
      });
  
      item.addEventListener("mouseleave", () => {
        thumbHover.style.transform = "translate(-50%, -50%) rotate(0deg)"; // Reset position
      });
    });
  });

  function loader() {
    $(window).on("load", function () {
      // Animate loader off screen
      $(".preloader").addClass("loaded");
      $(".preloader").delay(0).fadeOut();
    });
  }

  loader();
})(jQuery); // End jQuery

document.addEventListener("DOMContentLoaded", function () {
    var audioBtn = document.getElementById("welcome-audio-btn");
    var welcomeAudio = document.getElementById("welcome-audio");

    if (audioBtn && welcomeAudio) {
        audioBtn.addEventListener("click", function (event) {
            event.preventDefault();
            welcomeAudio.play();
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var carouselSettings = [
        { delay: 3960, speed: 400 },
        { delay: 9360, speed: 1200 },
        { delay: 5580, speed: 900 },
        { delay: 12600, speed: 300 },
        { delay: 7740, speed: 1500 }
    ];

    document.querySelectorAll(".project-carousel .swiper").forEach(function (container, index) {
        var pagination = container.querySelector(".swiper-pagination");
        if (!pagination) return;

        var settings = carouselSettings[index % carouselSettings.length];
        var swiper = new Swiper(container, {
            loop: true,
            autoplay: { delay: settings.delay, disableOnInteraction: false },
            pagination: {
                el: pagination,
                clickable: true
            },
            slidesPerView: 1,
            spaceBetween: 20,
            speed: settings.speed,
            grabCursor: true
        });

        var parent = container.closest(".project-carousel");
        var titleEl = parent.querySelector(".project-caption .caption-title");
        var textEl = parent.querySelector(".project-caption .caption-text");

        function updateProjectCaption() {
            var activeSlide = swiper.slides[swiper.activeIndex];
            if (!activeSlide) return;

            var heading = activeSlide.dataset.captionTitle || "";
            var paragraph = activeSlide.dataset.captionText || "";

            if (textEl) {
                textEl.textContent = paragraph;
            }

            if (!titleEl) {
                return;
            }

            if (titleEl.typedInstance) {
                titleEl.typedInstance.destroy();
            }

            titleEl.textContent = "";
            titleEl.typedInstance = new Typed(titleEl, {
                strings: [heading],
                typeSpeed: 45,
                backSpeed: 18,
                startDelay: 200,
                backDelay: 800,
                loop: false,
                showCursor: false,
                smartBackspace: true
            });
        }

        updateProjectCaption();
        swiper.on("slideChangeTransitionStart", updateProjectCaption);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.icon-switcher').forEach(function(switcher) {
        var icons = switcher.querySelectorAll('.switch-icon');
        if (icons.length < 2) return;
        var current = 0;
        icons[current].classList.add('active');
        setInterval(function() {
            icons[current].classList.remove('active');
            current = (current + 1) % icons.length;
            icons[current].classList.add('active');
        }, 3000);
    });
});

//<-- NEWSLETTER FORM HANDLER -->
document.addEventListener("DOMContentLoaded", function () {
    var benefits = document.querySelectorAll(".newsletter-benefits li");
    benefits.forEach(function (item, index) {
        item.style.opacity = 0;
        item.style.transform = "translateY(12px)";
        setTimeout(function () {
            item.style.transition = "opacity .35s ease, transform .35s ease";
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }, 120 * index + 120);
    });
    if (typeof Typed !== "undefined") {
        new Typed(".newsletter-typed", {
            strings: [
                "Software Recommendations",
                "Software Buying Guides",
                "Hidden Software Gems",
                "AI tools Worth Using",
                "Product Comparisons",
                "Technology Updates",
                "New how-to Guides",
                "Subscriber Requests",
                "Research Insights",
                "Security Alerts",
                "Lauren S. Releases",
                "New Tools We Build"
            ],
            typeSpeed: 45,
            backSpeed: 25,
            backDelay: 2200,
            smartBackspace: true,
            loop: true,
            showCursor: false
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var newsletterEmail = document.getElementById("newsletter-email");
    var newsletterBtn = document.getElementById("newsletter-btn");
    var subscriberCount = document.getElementById("subscriber-count");
    var newsletterNotification = document.getElementById("newsletter-notification");

    var icons = {
        success: `<i class="fas fa-check" style="margin-right: 12px;"></i>`,
        warning: `<i class="fas fa-exclamation" style="margin-right: 12px;"></i>`,
        danger: `<i class="fas fa-times" style="margin-right: 12px;"></i>`
    };

    function showAlert(message, type = "success") {
        var alertClass = `alert alert-${type === "success" ? "success" : type === "danger" ? "danger" : "warning"}`;
        newsletterNotification.innerHTML = `<div class="${alertClass} d-flex align-items-center">${icons[type] || ""}<div>${message}</div></div>`;
        newsletterNotification.style.display = "block";
        clearTimeout(newsletterNotification.timeoutId);
        newsletterNotification.timeoutId = setTimeout(function () {
            newsletterNotification.style.display = "none";
        }, 6000);
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    newsletterEmail.addEventListener("input", function() {
        newsletterEmail.classList.remove("is-invalid", "is-valid");
    });

    async function fetchAndSetCount(animate = true) {
        try {
            var response = await fetch("https://api.lauren-salvo.dev/api/count");
            var data = await response.json();
            if (typeof data.count === "undefined") return;
            var newCount = parseInt(data.count, 10);
            var currentCount = parseInt(subscriberCount.textContent.replace(/,/g, ""), 10);
            if (!animate || isNaN(currentCount)) {
                subscriberCount.textContent = newCount.toLocaleString();
            } else {
                animateCountUp(currentCount, newCount);
            }
        } catch (e) {
            // silently fail if count cannot be fetched
        }
    }

    function animateCountUp(start, end) {
        var duration = 800;
        var frameRate = 1000 / 60;
        var totalFrames = Math.round(duration / frameRate);
        var frame = 0;
        var animate = function () {
            frame++;
            var progress = frame / totalFrames;
            var value = Math.round(start + (end - start) * progress);
            subscriberCount.textContent = value.toLocaleString();
            if (frame < totalFrames) {
                requestAnimationFrame(animate);
            } else {
                subscriberCount.textContent = end.toLocaleString();
            }
        };
        requestAnimationFrame(animate);
    }

    function showLoading(message) {
        if (!newsletterNotification) return;
        newsletterNotification.innerHTML = `<div class="alert alert-info d-flex align-items-center"><i class="fas fa-spinner fa-spin" style="margin-right: 12px;"></i><div>${message}</div></div>`;
        newsletterNotification.style.display = "block";
        clearTimeout(newsletterNotification.timeoutId);
    }

    function hideLoading() {
        if (!newsletterNotification) return;
        newsletterNotification.style.display = "none";
        newsletterNotification.innerHTML = "";
        clearTimeout(newsletterNotification.timeoutId);
    }

    async function subscribeUser(email) {
        newsletterBtn.disabled = true;
        showLoading("Subscribing...");
        try {
            var response = await fetch("https://api.lauren-salvo.dev/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({ email: email })
            });
            var data = await response.json();
            hideLoading();
            if (response.ok) {
                newsletterEmail.value = "";
                showAlert(data.message || "Thanks! You're subscribed.", "success");
                fetchAndSetCount(false);
            } else {
                showAlert(data.message || "Subscription failed.", "danger");
                newsletterEmail.classList.add("is-invalid");
            }
        } catch (e) {
            hideLoading();
            showAlert("An error occurred. Please try again.", "danger");
            newsletterEmail.classList.add("is-invalid");
        } finally {
            newsletterBtn.disabled = false;
        }
    }

    newsletterBtn.addEventListener("click", function (e) {
        e.preventDefault();
        var email = newsletterEmail.value.trim();
        if (!email) {
            showAlert("Please enter your email address.", "warning");
            newsletterEmail.classList.add("is-invalid");
            return;
        }
        if (!validateEmail(email)) {
            showAlert("Please enter a valid email address.", "warning");
            newsletterEmail.classList.add("is-invalid");
            return;
        }
        subscribeUser(email);
    });

    newsletterEmail.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            newsletterBtn.click();
        }
    });

    fetchAndSetCount();
});

//<-- CONTACT FORM HANDLER -->
document.addEventListener("DOMContentLoaded", function() {
    const contactPopupForm = document.getElementById("contactPopupForm");
    if (!contactPopupForm) return;

    // use the shared newsletter notification element for popup messages
    const contactPopupNotification = document.getElementById("newsletter-notification");
    const contactPopupTitle = document.getElementById("contactPopupTitle");
    const contactPopupIntro = document.getElementById("contactPopupIntro");
    const categoryButtons = document.querySelectorAll(".contact-popup-category");
    const categoryInput = contactPopupForm.querySelector('input[name="category"]');
    const messageField = contactPopupForm.querySelector('textarea[name="message"]');

    if (!contactPopupNotification || !contactPopupTitle || !contactPopupIntro || !categoryInput || !messageField) return;

    const categorySettings = {
        "Start a Project": {
            title: "Open a New Project",
            intro: "Every engagement begins with understanding your business. Share a few details below and we'll review everything before recommending the next step.",
            placeholder: "Tell us what you need help with...\n• What are you building?\n• What's your biggest challenge?\n• Do you have a deadline?"
        },
        "Technology Consultation": {
            title: "Talk With Lauren S.",
            intro: "Share what technology decisions you're weighing and where you need clarity.",
            placeholder: "Tell us what you need help with...\n• What system are you evaluating?\n• What outcomes matter most?\n• Do you have a timeline?"
        },
        "Request a Guide": {
            title: "Request a Guide",
            intro: "Tell us what area you'd like help navigating and we'll share tailored recommendations.",
            placeholder: "Tell us what guidance you need...\n• What topic are you exploring?\n• What problem are you solving?\n• What's your current approach?"
        },
        "Something Else": {
            title: "Something Else",
            intro: "If your inquiry doesn't fit neatly in the categories above, describe it and we'll take care of the rest.",
            placeholder: "Tell us about your question or project...\n• What's most important for us to know?\n• What outcome do you want?\n• Anything else we should consider?"
        }
    };

    function updateCategory(category) {
        const settings = categorySettings[category];
        if (!settings) return;
        categoryInput.value = category;
        contactPopupTitle.textContent = settings.title;
        contactPopupIntro.textContent = settings.intro;
        messageField.placeholder = settings.placeholder;
        categoryButtons.forEach(button => {
            button.classList.toggle("active", button.dataset.category === category);
        });
    }

    function showContactLoading(message) {
        if (!contactPopupNotification) return;
        contactPopupNotification.innerHTML = `<div class="alert alert-info d-flex align-items-center"><i class="fas fa-spinner fa-spin" style="margin-right: 12px;"></i><div>${message}</div></div>`;
        contactPopupNotification.style.display = "block";
        clearTimeout(contactPopupNotification.timeoutId);
    }

    function hideContactLoading() {
        if (!contactPopupNotification) return;
        contactPopupNotification.style.display = "none";
        contactPopupNotification.innerHTML = "";
        clearTimeout(contactPopupNotification.timeoutId);
    }

    categoryButtons.forEach(button => {
        button.addEventListener("click", function() {
            updateCategory(this.dataset.category);
        });
    });

    contactPopupForm.addEventListener("submit", async function(e) {
        e.preventDefault();
        const formData = new FormData(contactPopupForm);
        const name = formData.get("name").trim();
        const email = formData.get("email").trim();
        const company = formData.get("company").trim();
        const category = formData.get("category").trim();
        const message = formData.get("message").trim();

        if (!name) {
            showNotification("Please enter your name.", "warning");
            return;
        }

        if (!email || !validateEmail(email)) {
            showNotification("Please enter a valid email address.", "warning");
            return;
        }

        if (!message) {
            showNotification("Please tell us about your project.", "warning");
            return;
        }

        showContactLoading("Sending your message...");
        try {
            const response = await fetch("https://api.lauren-salvo.dev/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    company: company,
                    category: category,
                    message: message
                })
            });

            const data = await response.json();
            hideContactLoading();

            if (response.ok) {
                showNotification("Thanks! We'll be in touch.", "success");
                contactPopupForm.reset();
                updateCategory("Start a Project");
            } else {
                showNotification(data.message || "Unable to send message.", "error");
            }
        } catch (error) {
            hideContactLoading();
            showNotification("Connection error. Try again.", "error");
        }
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showNotification(message, type = "success") {
        // newsletter-notification expects HTML content; reuse it for popup messages
        contactPopupNotification.innerHTML = `<div class="alert alert-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'warning'}">${message}</div>`;
        contactPopupNotification.style.display = 'block';
        clearTimeout(contactPopupNotification.timeoutId);
        contactPopupNotification.timeoutId = setTimeout(function() {
            contactPopupNotification.style.display = 'none';
            contactPopupNotification.innerHTML = '';
        }, 6000);
    }

    updateCategory("Start a Project");
});

//<-- COOKIE PREFERENCE HANDLER -->
(function() {
    const STORAGE_KEY = 'lauren_s_cookie_preferences';
    const banner = document.getElementById('cookie-banner');
    const overlay = document.getElementById('cookie-overlay');
    const preferences = document.getElementById('cookie-preferences');
    const miniBtn = document.getElementById('cookie-mini-button');
    const acceptBtn = document.getElementById('cookie-accept');
    const essentialBtn = document.getElementById('cookie-essential');
    const preferencesOpen = document.getElementById('cookie-preferences-open');
    const preferencesClose = document.getElementById('cookie-preferences-close');
    const minimizeBtn = document.getElementById('cookie-minimize');
    const savePreferencesBtn = document.getElementById('cookie-save-preferences');
    const acceptAllBtn = document.getElementById('cookie-accept-all');
    const analyticsSwitch = document.getElementById('cookie-analytics-switch');
    const preferencesSwitch = document.getElementById('cookie-preferences-switch');

    const defaultPreferences = {
        essential: true,
        analytics: false,
        preferences: false
    };

    function setCookie(name, value, days = 365) {
        const d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))};expires=${d.toUTCString()};path=/;SameSite=Lax`;
    }

    function getCookie(name) {
        const match = document.cookie.match('(?:^|; )' + name + '=([^;]*)');
        if (!match) return null;
        try {
            return JSON.parse(decodeURIComponent(match[1]));
        } catch (err) {
            return null;
        }
    }

    function hasCookie() {
        return getCookie(STORAGE_KEY) !== null;
    }

    function savePreferences(pref) {
        setCookie(STORAGE_KEY, pref, 365);
    }

    function applyPreferences(pref) {
        savePreferences(pref);
        if (pref.analytics) {
            window.cookieAnalyticsEnabled = true;
        }
        closePreferences();
    }

    function updatePreferenceToggles(pref) {
        if (analyticsSwitch) {
            analyticsSwitch.checked = !!pref.analytics;
        }
        if (preferencesSwitch) {
            preferencesSwitch.checked = !!pref.preferences;
        }
    }

    function setPreferencesVisibility(isVisible) {
        if (!preferences) return;
        preferences.style.display = isVisible ? 'block' : 'none';
        preferences.setAttribute('aria-hidden', String(!isVisible));
        if (isVisible) {
            preferences.removeAttribute('inert');
        } else {
            preferences.setAttribute('inert', '');
            if (preferences.contains(document.activeElement) && miniBtn) {
                miniBtn.focus();
            }
        }
    }

    function showBanner() {
        if (banner) {
            banner.classList.remove('hidden');
            banner.setAttribute('aria-hidden', 'false');
        }
        if (overlay) {
            overlay.style.display = 'none';
        }
        setPreferencesVisibility(false);
        if (miniBtn) {
            miniBtn.classList.remove('show');
        }
    }

    function hideBanner() {
        if (banner) {
            banner.classList.add('hidden');
            banner.setAttribute('aria-hidden', 'true');
        }
        if (miniBtn) {
            miniBtn.classList.add('show');
        }
    }

    function openPreferences() {
        const pref = getCookie(STORAGE_KEY) || defaultPreferences;
        updatePreferenceToggles(pref);
        if (banner) {
            banner.classList.add('hidden');
            banner.setAttribute('aria-hidden', 'true');
        }
        if (overlay) {
            overlay.style.display = 'block';
        }
        setPreferencesVisibility(true);
        if (miniBtn) {
            miniBtn.classList.remove('show');
        }
    }

    function closePreferences() {
        setPreferencesVisibility(false);
        if (overlay) {
            overlay.style.display = 'none';
        }
        hideBanner();
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            applyPreferences({ essential: true, analytics: true, preferences: true });
        });
    }

    if (essentialBtn) {
        essentialBtn.addEventListener('click', function() {
            applyPreferences({ essential: true, analytics: false, preferences: false });
        });
    }

    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', hideBanner);
    }
    if (miniBtn) {
        miniBtn.addEventListener('click', showBanner);
    }
    if (preferencesOpen) {
        preferencesOpen.addEventListener('click', openPreferences);
    }
    if (preferencesClose) {
        preferencesClose.addEventListener('click', closePreferences);
    }
    if (overlay) {
        overlay.addEventListener('click', closePreferences);
    }

    if (savePreferencesBtn) {
        savePreferencesBtn.addEventListener('click', function() {
            applyPreferences({
                essential: true,
                analytics: analyticsSwitch ? analyticsSwitch.checked : false,
                preferences: preferencesSwitch ? preferencesSwitch.checked : false
            });
        });
    }

    if (acceptAllBtn) {
        acceptAllBtn.addEventListener('click', function() {
            applyPreferences({ essential: true, analytics: true, preferences: true });
        });
    }

    if (!hasCookie()) {
        showBanner();
    } else {
        hideBanner();
    }
})();

// <-- SERVICE DRAWER HANDLER -->
document.addEventListener("DOMContentLoaded", function () {
  var drawer = document.getElementById("serviceDrawer");
  var backdrop = document.getElementById("drawerBackdrop");
  var closeBtn = document.getElementById("drawerClose");
  var titleEl = drawer.querySelector(".drawer-title");
  var descEl = drawer.querySelector(".drawer-description");
  var listEl = drawer.querySelector(".drawer-feature-list");
  var projectsEl = drawer.querySelector(".drawer-projects");
  var pricingEl = drawer.querySelector(".drawer-pricing");
  var endUserEl = drawer.querySelector(".drawer-end-user");

  function toggleDrawer(open) {
    if (open) {
      drawer.classList.add("open");
      backdrop.classList.add("open");
      drawer.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    } else {
      drawer.classList.remove("open");
      backdrop.classList.remove("open");
      drawer.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  function openService(item) {
    if (!item) return;
    var title = item.dataset.serviceTitle || item.dataset.service || "Service";
    var description = item.dataset.serviceDescription || "";
    var features = (item.dataset.serviceFeatures || "").split("|").filter(Boolean);
    var projects = item.dataset.serviceProjects || "";
    var pricing = item.dataset.servicePricing || "";
    var endUser = item.dataset.endUser || "";

    titleEl.textContent = title;
    descEl.textContent = description;
    projectsEl.textContent = projects;
    pricingEl.textContent = pricing;
    endUserEl.textContent = endUser;
    listEl.innerHTML = "";

    features.forEach(function (feature) {
      var li = document.createElement("li");
      li.textContent = feature;
      listEl.appendChild(li);
    });

    toggleDrawer(true);
  }

  document.querySelectorAll(".service-open-btn").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var item = this.closest(".services-item");
      openService(item);
    });
  });

  closeBtn.addEventListener("click", function () {
    toggleDrawer(false);
  });

  backdrop.addEventListener("click", function () {
    toggleDrawer(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      toggleDrawer(false);
    }
  });
});
