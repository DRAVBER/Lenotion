// Добавьте этот код внутри тега <script> в конце body
particlesJS('particles-js', {
    particles: {
        number: { 
            value: 150,  // Количество частиц
            density: { 
                enable: true, 
                value_area: 800 
            } 
        },
        color: { 
            value: "#22d3ee"  // Цвет частиц (неоновый циан)
        },
        shape: { 
            type: "circle",  // Форма: круг
            stroke: { 
                width: 0, 
                color: "#000" 
            }
        },
        opacity: { 
            value: 0.7,  // Прозрачность
            random: true 
        },
        size: { 
            value: 3,  // Размер частиц
            random: true 
        },
        move: { 
            enable: true, 
            speed: 2,  // Скорость движения
            direction: "none", 
            random: true, 
            straight: false, 
            out_mode: "out", 
            bounce: false 
        }
    },
    interactivity: {  // Взаимодействие с мышью
        detect_on: "canvas",
        events: { 
            onhover: { 
                enable: true, 
                mode: "repulse"  // Частицы отталкиваются от курсора
            },
            onclick: { 
                enable: true, 
                mode: "push"  // Добавляет частицы при клике
            }
        }
    },
    retina_detect: true  // Оптимизация для Retina-экранов
});