// Shared footer component
function createFooter() {
  return `
    <footer class="bg-gray-900 text-white py-12 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center space-x-2 mb-4 md:mb-0">
            <div class="w-8 h-8 bg-gradient-to-r from-wellness-500 to-hydration-500 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-sm">S&S</span>
            </div>
            <span class="text-xl font-bold">Sip & Scroll</span>
          </div>
          <div class="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <a href="privacy.html" class="hover:text-wellness-400 transition-colors">Privacy Policy</a>
            <a href="terms.html" class="hover:text-wellness-400 transition-colors">Terms of Service</a>
            <a href="support.html" class="hover:text-wellness-400 transition-colors">Support</a>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sip & Scroll. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

// Insert footer on page load
document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    footerContainer.innerHTML = createFooter();
  }
});
