const moreAboutUsLink = document.querySelector('.more-about-us');
const contacts = document.querySelector('.modal-contact');
const overlay = document.querySelector('.modal-overlay');
const closeContactsButton = contacts.querySelector('.modal-close');

const contactsForm = contacts.querySelector('.contact-form');
const loginInput = contacts.querySelector('[name=login]');
const emailInput = contacts.querySelector('[name=email]');
const textInput = contacts.querySelector('[name=text]');
const inputs = contacts.querySelectorAll('.contact-item__input');

const mapLink = document.querySelector('.map-link');
const mapModal = document.querySelector('.modal-map');
const mapClose = mapModal.querySelector('.modal-close');

const removeElementClassIfExist = (element, clazz) => {
    if (element.classList.contains(clazz)) {
        element.classList.remove(clazz);
    }
};

const showOverlay = () => {
    overlay.classList.add('modal-overlay--show');
};

const hideOverlay = () => {
    overlay.classList.remove('modal-overlay--show');
};

const showModal = modal => {
    modal.classList.add('modal-show');
    showOverlay();
};

const hideModal = modal => {
    modal.classList.remove('modal-show');
    hideOverlay();
};

const clearInputs = () => {
    inputs.forEach(input => {
        if (input.value) {
            input.value = '';
        }
        removeElementClassIfExist(input, 'contact-item__input--error');
    });
};

const hideOverlayIfActive = modal => {
    if (modal.classList.contains('modal-show')) {
        hideModal(modal);
    }
};

window.addEventListener("keydown", event => {
    if (event.keyCode === 27) {
        event.preventDefault();
        hideOverlayIfActive(contacts);
        hideOverlayIfActive(mapModal);
        clearInputs();
    }
});

overlay.addEventListener('click', event => {
    event.preventDefault();
    hideOverlayIfActive(contacts);
    hideOverlayIfActive(mapModal);
    clearInputs();
});

moreAboutUsLink.addEventListener('click', event => {
    event.preventDefault();
    showModal(contacts);
    loginInput.focus();
});

closeContactsButton.addEventListener('click', event => {
   event.preventDefault();
   hideModal(contacts);
   removeElementClassIfExist(contacts, 'modal-error');
   clearInputs();
});

const hightlightIfInvalid = input => {
  const { value } = input;
  if (!value || value.length === 0) {
      input.classList.add('contact-item__input--error');
  }
};

contactsForm.addEventListener('submit', event => {
    if (!loginInput.value || !emailInput.value || !textInput.value) {
        event.preventDefault();
        contacts.classList.remove("modal-error");
        void contacts.offsetWidth;
        contacts.classList.add('modal-error');

        hightlightIfInvalid(loginInput);
        hightlightIfInvalid(emailInput);
        hightlightIfInvalid(textInput);
    }
});

mapLink.addEventListener('click', event => {
    event.preventDefault();
    showModal(mapModal);
});

mapClose.addEventListener('click', event => {
    event.preventDefault();
    hideModal(mapModal);
});


/* Слайдер сервисов */

const deliveryButton = document.querySelector('.delivery');
const warrantyButton = document.querySelector('.warranty');
const creditButton = document.querySelector('.credit');

const deliveryItem = document.querySelector('.service-item--delivery');
const warrantyItem = document.querySelector('.service-item--warranty');
const creditItem = document.querySelector('.service-item--credit');

const deactivateButtons = () => {
  Array.of(deliveryButton, warrantyButton, creditButton).forEach(button => {
     button.classList.remove('services-button--active');
  });
  Array.of(deliveryItem, warrantyItem, creditItem).forEach(item => {
      item.classList.remove('services-item--active');
  })
};

const activateButtonOnClick = (button, item) => {
    button.addEventListener('click', event => {
        event.preventDefault();
        deactivateButtons();
        button.classList.add('services-button--active');
        item.classList.add('services-item--active');
    })
};

activateButtonOnClick(deliveryButton, deliveryItem);
activateButtonOnClick(warrantyButton, warrantyItem);
activateButtonOnClick(creditButton, creditItem);





