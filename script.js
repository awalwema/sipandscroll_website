// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Add subtle scroll animations for phone mockups
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const phones = document.querySelectorAll(".phone-mockup");

  phones.forEach((phone, index) => {
    const speed = 0.1 + index * 0.05;
    const yPos = scrolled * speed;
    phone.style.transform = `translateY(${yPos}px)`;
  });
});

// Add intersection observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in");
    }
  });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll(".feature-card").forEach((card) => {
  observer.observe(card);
});

// Button click handlers
document.addEventListener("DOMContentLoaded", function () {
  // Find the "Get Notified When Available" button
  const buttons = document.querySelectorAll("button");
  let getNotifiedBtn = null;

  buttons.forEach((button) => {
    if (button.textContent.includes("Get Notified When Available")) {
      getNotifiedBtn = button;
    }
  });

  // Modal elements
  const modal = document.getElementById("email-modal");
  const form = document.getElementById("email-form");
  const cancelBtn = document.getElementById("cancel-btn");

  // Open modal
  if (getNotifiedBtn) {
    getNotifiedBtn.addEventListener("click", function () {
      modal.classList.remove("hidden");
    });
  }

  // Close modal
  cancelBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Close modal on backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  // Handle form submission (opens Google Form)
  form.addEventListener("submit", function () {
    // Close modal immediately
    modal.classList.add("hidden");

    // Update button text
    if (getNotifiedBtn) {
      getNotifiedBtn.textContent = "✓ You're on the list!";
      getNotifiedBtn.disabled = true;
    }
  });
});

// Add mobile menu functionality if needed
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

// Add loading animations
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Add CSS for fade-in animation
const style = document.createElement("style");
style.textContent = `
    .animate-fade-in {
        animation: fadeIn 0.6s ease-in-out;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .loaded .phone-mockup {
        animation-play-state: running;
    }
`;
document.head.appendChild(style);

// Add this function to your existing script.js
function scrollToHowItWorks() {
  const howItWorksSection = document.querySelector("section:nth-of-type(2)");
  if (howItWorksSection) {
    howItWorksSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Add this to your existing script.js
function initPhotoRotation() {
  const pairs = document.querySelectorAll(".photo-pair");

  if (pairs.length > 0) {
    // Add this check
    let currentIndex = 0;

    setInterval(() => {
      pairs[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % pairs.length;
      pairs[currentIndex].classList.add("active");
    }, 4000);
  }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", initPhotoRotation);

// Add this helper function:
function submitEmailViaJSONP(email) {
  return new Promise((resolve, reject) => {
    const callbackName = "jsonp_callback_" + Math.round(100000 * Math.random());

    // Create callback function
    window[callbackName] = function (data) {
      console.log("JSONP response:", data); // Debug log
      delete window[callbackName];
      if (script && script.parentNode) {
        document.body.removeChild(script);
      }
      resolve(data);
    };

    // Create script tag
    const script = document.createElement("script");
    script.src = `https://script.google.com/macros/s/AKfycbwsoHTHkD-N6_ww2Lf5Zb76Va0VqiQY5h5suR_wZcf0VW8HHTbRV3ka-vEJdnN-37qwtw/exec?email=${encodeURIComponent(
      email
    )}&source=website&callback=${callbackName}`;

    script.onload = function () {
      console.log("Script loaded successfully"); // Debug log
    };

    script.onerror = function () {
      console.log("Script load failed"); // Debug log
      delete window[callbackName];
      if (script && script.parentNode) {
        document.body.removeChild(script);
      }
      reject(new Error("Script load failed"));
    };

    // Add timeout
    setTimeout(() => {
      if (window[callbackName]) {
        console.log("Request timed out"); // Debug log
        delete window[callbackName];
        if (script && script.parentNode) {
          document.body.removeChild(script);
        }
        reject(new Error("Request timed out"));
      }
    }, 10000); // 10 second timeout

    document.body.appendChild(script);
  });
}
