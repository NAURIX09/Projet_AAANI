/* =====================================================
   PRESENTATION PERSONNELLE - INTERACTIVITÉ JAVASCRIPT
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
    initMotivationButtons();
    initContactForm();
    initScrollAnimations();
    console.log('✅ PRESENTATION chargé avec succès !');
});

/* ===== GESTION DES BOUTONS DE MOTIVATION ===== */
function initMotivationButtons() {
    const buttons = document.querySelectorAll('.motivation-btn');
    const responseDiv = document.querySelector('.motivation-response');

    const messages = {
        'Curiosité': '🧠 La curiosité m\'anime chaque jour. J\'aime explorer de nouvelles technologies et approfondir mes connaissances en développement web. Chaque problème est une opportunité d\'apprendre !',
        'Défi': '🎯 Les défis me motivent à me dépasser. Transformer une idée en réalité, résoudre des problèmes complexes, et créer des solutions innovantes m\'enthousiasme profondément.',
        'Communauté': '👥 Je crois au pouvoir de la collaboration. Partager mes connaissances, aider d\'autres développeurs et faire partie d\'une communauté créative est inspirant pour moi.',
        'Excellence': '🏆 Je vise toujours l\'excellence. Que ce soit dans le code que j\'écris ou dans les projets que je réalise, je m\'efforce de maintenir des standards élevés et de créer de la qualité.'
    };

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const buttonText = this.textContent.trim();
            let messageKey = '';
            
            if (buttonText.includes('Curiosité')) messageKey = 'Curiosité';
            else if (buttonText.includes('Défi')) messageKey = 'Défi';
            else if (buttonText.includes('Communauté')) messageKey = 'Communauté';
            else if (buttonText.includes('Excellence')) messageKey = 'Excellence';
            
            const message = messages[messageKey] || 'Message non trouvé.';
            
            responseDiv.classList.remove('active');
            setTimeout(() => {
                responseDiv.textContent = message;
                responseDiv.classList.add('active');
            }, 100);
        });
    });
}

const form = document.querySelector(".mes-form");
const message = document.querySelector(".message-text");

let visible = false;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!visible) {
        message.textContent =
            "Je vous remercie sincèrement pour votre visite et j\'espère vous revoir très bientôt 🙏✨";
        message.classList.add("show");
    } else {
        message.classList.remove("show");
    }

    visible = !visible;
});
