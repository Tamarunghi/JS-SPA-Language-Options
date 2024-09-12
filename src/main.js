import i18next from 'i18next';
import './router.js';
import { renderPage, navigateTo } from './router.js';



//initialize i18next with the translations
i18next.init({
    lng: "en", // idioma por defecto
    resources: {
        en: {
            translation: {
                "home": "Home",
                "home_text": "This is the home page!",
                "page1": "Welcome to Page 1",
                "page1_text": "This is Page 1!",
                "page2": "Welcome to Page 2",
                "page2_text": "This is Page 2!"
            }
        },
        es: { // Mover 'es' dentro de 'resources'
            translation: {
                "home": "Inicio",
                "home_text": "Esta es la página de inicio", // corregido 'Esta s'
                "page1": "Bienvenido a la página 1",
                "page1_text": "Esta es la página 1", // corregido 'Esta s'
                "page2": "Bienvenido a la Página 2",
                "page2_text": "Esta es la página 2" // corregido 'Esta s'
            }
        }
    }
});


function changeLanguage(lng) {
    i18next.changeLanguage(lng, () => {
        const path = window.location.pathname;
        renderPage(path); // Re-render the current page with the new language
    });
}

document.getElementById('language-switcher').addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});
