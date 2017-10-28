import Vue from 'vue';
import Contact from '../vue/Contact.vue'
import OrderedList from '../vue/OrderedList.vue'
import Search from '../vue/Search.vue'
import TextBlock from '../vue/TextBlock.vue'

function toggleOpenAccordion(el) {
    var openClassName = 'accordion__list-element--open';
    var listElement = el.closest('.accordion__list-element.js');
    if (listElement.classList.contains(openClassName)) {
        listElement.classList.remove(openClassName);
    } else {
        listElement.classList.add(openClassName);
    }
}

function toggleOpenNavMenu(navLink) {
    console.log('toggleOpenNavMenu');
    var openClassName = 'page-container--nav-menu-open';
    var pageContainer = navLink.closest('.page-container.js');
    if (pageContainer.classList.contains(openClassName)) {
        pageContainer.classList.remove(openClassName);
    } else {
        pageContainer.classList.add(openClassName);
    }
}

window.onload = function() {

    (function addNavClickEventHandler() {
        var navLink = document.getElementsByClassName('header__nav-link js')[0];
        navLink.addEventListener('click', toggleOpenNavMenu.bind(null, navLink));
        var closeNavButton = document.getElementsByClassName('header__nav-menu-close-button js')[0];
        closeNavButton.addEventListener('click', toggleOpenNavMenu.bind(null, closeNavButton));
    })();

    (function addAccordionFillerContent() {  // TODO remove this before launch
        var elements = document.getElementsByClassName('accordion__list-element js');
        for (var i = 0; i < elements.length; i++) {
            var content = elements[i].getElementsByClassName('accordion__list-element-content')[0];
            content.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        }
    })();

    (function addAccordionClickEventHandlers() {
        var elements = document.getElementsByClassName('accordion__list-element js');
        for (var i = 0; i < elements.length; i++) {
            var button = elements[i].getElementsByClassName('accordion__list-element-button')[0];
            button.addEventListener('click', toggleOpenAccordion.bind(null, elements[i]))
        }
    })();
    Vue.component('ordered-list', OrderedList);
    Vue.component('ol-element', OrderedList.childComponents.Element);
    Vue.component('text-block', TextBlock);
    Vue.component('search', Search);
    Vue.component('contact', Contact);
    new Vue({
        el: '.page-container'
    })
};