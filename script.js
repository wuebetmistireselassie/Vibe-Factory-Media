document.addEventListener("DOMContentLoaded", () => {
    // 1. Sidebar Logic
    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    const openSidebarBtn = document.getElementById("openSidebar");
    const closeSidebarBtn = document.getElementById("closeSidebar");

    // Open Sidebar
    openSidebarBtn.addEventListener("click", () => {
        sidebar.classList.add("active");
        sidebarOverlay.classList.add("active");
    });

    // Close Sidebar via Close Button
    closeSidebarBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
        sidebarOverlay.classList.remove("active");
    });

    // Close Sidebar when clicking outside (on the overlay)
    sidebarOverlay.addEventListener("click", () => {
        sidebar.classList.remove("active");
        sidebarOverlay.classList.remove("active");
    });

    // Close Sidebar when clicking a menu link
    const closeOnClickLinks = document.querySelectorAll('.close-on-click');
    closeOnClickLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove("active");
            sidebarOverlay.classList.remove("active");
        });
    });

    // 2. Video Modal Logic
    const modal = document.getElementById('videoModal');
    const closeBtn = document.getElementById('closeModal');
    const youtubePlayer = document.getElementById('youtubePlayer');

    // Function to open modal and play video
    window.openVideoModal = function(videoId) {
        youtubePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    }

    // Function to close modal and stop video
    function closeModal() {
        modal.classList.remove('active');
        youtubePlayer.src = ''; // Stop video
        document.body.style.overflow = 'auto'; // Restore background scrolling
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            closeModal();
        }
    });
});
