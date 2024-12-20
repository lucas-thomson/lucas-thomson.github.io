window.addEventListener('scroll', function() {
    var video = document.getElementById('video');
    
    // Get the scroll position
    var scrollPosition = window.scrollY;
    
    // Get the total height of the page
    var pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Calculate the percentage of page scrolled
    var scrollPercent = (scrollPosition / pageHeight);
    
    // Calculate the video duration based on scroll position
    var videoDuration = video.duration;
    
    // Set the video's current time based on scroll percentage
    video.currentTime = videoDuration * scrollPercent;
});