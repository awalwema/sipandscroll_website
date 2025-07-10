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
  // Primary CTA button
  const primaryButton = document.querySelector(
    'button:contains("Start Sipping & Scrolling")'
  );
  if (primaryButton) {
    primaryButton.addEventListener("click", function () {
      // Add your app download logic here
      console.log("Primary CTA clicked - redirect to app store");
    });
  }

  // Secondary CTA button
  const secondaryButton = document.querySelector(
    'button:contains("See How It Works")'
  );
  if (secondaryButton) {
    secondaryButton.addEventListener("click", function () {
      // Scroll to how it works section
      const howItWorksSection = document.querySelector(
        "section:nth-of-type(2)"
      );
      if (howItWorksSection) {
        howItWorksSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Download button in nav
  const navDownloadButton = document.querySelector("nav button");
  if (navDownloadButton) {
    navDownloadButton.addEventListener("click", function () {
      // Add your app download logic here
      console.log("Nav download button clicked - redirect to app store");
    });
  }
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
