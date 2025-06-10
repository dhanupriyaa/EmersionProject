function addProgressBar() {
    const container = document.getElementById('progress-container');
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.width = '0%';
    
    container.appendChild(progressBar);
    
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 10); // Start the animation shortly after adding the bar
}

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', addProgressBar);
});