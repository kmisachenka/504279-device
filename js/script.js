var moreAboutUsLink = document.querySelector('.more-about-us');
var contacts = document.querySelector('.modal-contact');
var overlay = document.querySelector('.modal-overlay');
var closeContactsButton = contacts.querySelector('.modal-close');

var contactsForm = contacts.querySelector('.contact-form');
var loginInput = contacts.querySelector('[name=login]');
var emailInput = contacts.querySelector('[name=email]');
var textInput = contacts.querySelector('[name=text]');
var inputs = contacts.querySelectorAll('.contact-item__input');

var mapLink = document.querySelector('.map-link');
var mapModal = document.querySelector('.modal-map');
var mapClose = mapModal.querySelector('.modal-close');

var removeElementClassIfExist = function (element, clazz) {
    if (element.classList.contains(clazz)) {
        element.classList.remove(clazz);
    }
};

var showOverlay = function () {
    overlay.classList.add('modal-overlay--show');
};

var hideOverlay = function () {
    overlay.classList.remove('modal-overlay--show');
};

var showModal = function (modal) {
    modal.classList.add('modal-show');
    showOverlay();
};

var hideModal = function (modal) {
    modal.classList.remove('modal-show');
    hideOverlay();
};

var clearInputs = function () {
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value) {
            inputs[i].value = '';
        }
        removeElementClassIfExist(inputs[i], 'contact-item__input--error');
    }
};

var hideOverlayIfActive = function (modal) {
    if (modal.classList.contains('modal-show')) {
        hideModal(modal);
    }
};

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        event.preventDefault();
        hideOverlayIfActive(contacts);
        hideOverlayIfActive(mapModal);
        clearInputs();
    }
});

overlay.addEventListener('click', function (event) {
    event.preventDefault();
    hideOverlayIfActive(contacts);
    hideOverlayIfActive(mapModal);
    clearInputs();
});

moreAboutUsLink.addEventListener('click', function (event) {
    event.preventDefault();
    showModal(contacts);
    loginInput.focus();
});

closeContactsButton.addEventListener('click', function (event) {
   event.preventDefault();
   hideModal(contacts);
   removeElementClassIfExist(contacts, 'modal-error');
   clearInputs();
});

var highlightIfInvalid = function (input) {
  var value = input.value;
  if (!value || value.length === 0) {
      input.classList.add('contact-item__input--error');
  }
};

contactsForm.addEventListener('submit', function (event) {
    if (!loginInput.value || !emailInput.value || !textInput.value) {
        event.preventDefault();
        contacts.classList.remove("modal-error");
        void contacts.offsetWidth;
        contacts.classList.add('modal-error');

        highlightIfInvalid(loginInput);
        highlightIfInvalid(emailInput);
        highlightIfInvalid(textInput);
    }
});

mapLink.addEventListener('click', function (event) {
    event.preventDefault();
    showModal(mapModal);
});

mapClose.addEventListener('click', function (event) {
    event.preventDefault();
    hideModal(mapModal);
});


/* Слайдер сервисов */

var deliveryButton = document.querySelector('.delivery');
var warrantyButton = document.querySelector('.warranty');
var creditButton = document.querySelector('.credit');

var deliveryItem = document.querySelector('.service-item--delivery');
var warrantyItem = document.querySelector('.service-item--warranty');
var creditItem = document.querySelector('.service-item--credit');

var deactivateButtons = function () {
    [deliveryButton, warrantyButton, creditButton].map(function (button) {
        button.classList.remove('services-button--active');
    });

    [deliveryItem, warrantyItem, creditItem].map(function (item) {
        item.classList.remove('services-item--active');
    });
};

var activateButtonOnClick = function (button, item) {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        deactivateButtons();
        button.classList.add('services-button--active');
        item.classList.add('services-item--active');
    })
};

activateButtonOnClick(deliveryButton, deliveryItem);
activateButtonOnClick(warrantyButton, warrantyItem);
activateButtonOnClick(creditButton, creditItem);

/* Основной слайдер */

var selfieInput = document.querySelector('.promo-slider__input--selfie');
selfieInput.classList.add('promo-slider__input--checked');

var flushSliderState = function () {
    var inputs = document.querySelectorAll('.promo-item--active .promo-slider__input');
    for (var i = 0; i < inputs.length; i++) {
        removeElementClassIfExist(inputs[i], 'promo-slider__input--checked');
    }

    var items = document.querySelectorAll('.promo-item');
    for (var j = 0; j < items.length; j++) {
        removeElementClassIfExist(items[j], 'promo-item--active');
    }
};


var slider = function () {
    var activeItem = document.querySelector('.promo-item--active');

    var selfieInput = activeItem.querySelector('.promo-slider__input--selfie');
    var selfieItem = document.querySelector('.promo-selfie');

    var fitnessTrackerInput = activeItem.querySelector('.promo-slider__input--fitness-tracker');
    var fitnessTrackerItem = document.querySelector('.promo-fitness-tracker');

    var droneInput = activeItem.querySelector('.promo-slider__input--drone');
    var droneItem = document.querySelector('.promo-drone');

    selfieInput.addEventListener('click', function (event) {
        event.preventDefault();
        flushSliderState();
        selfieItem.classList.add('promo-item--active');
        activeItem = document.querySelector('.promo-item--active');
        var input = activeItem.querySelector('.promo-slider__input--selfie');
        input.classList.add('promo-slider__input--checked');
        slider();
    });

    fitnessTrackerInput.addEventListener('click', function (event) {
        event.preventDefault();
        flushSliderState();
        fitnessTrackerItem.classList.add('promo-item--active');
        activeItem = document.querySelector('.promo-item--active');
        var input = activeItem.querySelector('.promo-slider__input--fitness-tracker');
        input.classList.add('promo-slider__input--checked');
        slider();
    });

    droneInput.addEventListener('click', function (event) {
        event.preventDefault();
        flushSliderState();
        droneItem.classList.add('promo-item--active');
        activeItem = document.querySelector('.promo-item--active');
        var input = activeItem.querySelector('.promo-slider__input--drone');
        input.classList.add('promo-slider__input--checked');
        slider();
    });
};

slider();
