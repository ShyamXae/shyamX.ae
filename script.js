// Video Play/Pause Toggle Function
function toggleVideo(wrapperElement) {
    const video = wrapperElement.querySelector('video');
    const icon = wrapperElement.querySelector('.icon-state');

    if (video.paused) {
        video.play();
        // Change icon to pause
        icon.classList.remove('ph-play');
        icon.classList.add('ph-pause');
    } else {
        video.pause();
        // Change icon to play
        icon.classList.remove('ph-pause');
        icon.classList.add('ph-play');
    }
}

// Video Mute/Unmute Toggle Function
function toggleMute(event, btnElement) {
    // Prevent the click from bubbling up to the video wrapper (which would pause it)
    event.stopPropagation();

    const wrapper = btnElement.closest('.video-wrapper');
    const video = wrapper.querySelector('video');
    const icon = btnElement.querySelector('.mute-icon');

    if (video.muted) {
        video.muted = false;
        icon.classList.remove('ph-speaker-slash');
        icon.classList.add('ph-speaker-high');
    } else {
        video.muted = true;
        icon.classList.remove('ph-speaker-high');
        icon.classList.add('ph-speaker-slash');
    }
}

// Copy Email Function
function copyEmail(element) {
    const email = element.innerText;
    navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied to clipboard!");
    });
}

// Show Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    
    toastMsg.innerText = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
