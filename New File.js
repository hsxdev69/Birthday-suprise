// Sirf ye wala part (Script ke andar) update karein, ya pura code copy karein

        function startCountdown() {
            document.getElementById('bgMusic').play().catch(() => {});
            showScreen('countdown-screen');

            let count = 3;
            const countElement = document.getElementById('count');
            countElement.classList.add('zoom');

            const timer = setInterval(() => {
                count--;
                countElement.classList.remove('zoom');
                void countElement.offsetWidth; 
                
                if (count > 0) {
                    countElement.innerText = count;
                    countElement.classList.add('zoom');
                } else {
                    clearInterval(timer);
                    showScreen('loading-screen');
                    
                    // Time kam kar diya: 4s se 1.5s kar diya
                    setTimeout(() => {
                        showScreen('home-screen');
                    }, 1500); 
                }
            }, 1000);
        }
