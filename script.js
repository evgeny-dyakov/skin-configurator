const skinConfigurationButtons = document.querySelectorAll('.skin-configurator__button');
const skinConfiguratorSkins = document.querySelectorAll('.skin-configurator__skin-bg');
const deviceWrapper = document.querySelector('.skin-configurator__device-wrapper');
const deviceSkinsFront = document.querySelectorAll('.skin-configurator__device-skin--front');
const deviceSkinsBack = document.querySelectorAll('.skin-configurator__device-skin--back');
const buttonBlockingLayer = document.querySelector('.skin-configurator__button-blocking-layer');

function removeActiveClass () {
  for (let i = 0; i < skinConfigurationButtons.length; i++) {
    if (skinConfigurationButtons[i].classList.contains('skin-configurator__button--active')) {
      skinConfigurationButtons[i].classList.remove('skin-configurator__button--active');
      skinConfiguratorSkins[i].classList.remove('skin-configurator__skin-bg--active');
      deviceSkinsFront[i].classList.remove('skin-configurator__device-skin--active');
      deviceSkinsBack[i].classList.remove('skin-configurator__device-skin--active');
    }
  }
}

function addActiveClass (i) {
  skinConfigurationButtons[i].classList.add('skin-configurator__button--active');
  skinConfiguratorSkins[i].classList.add('skin-configurator__skin-bg--active');
  deviceSkinsFront[i].classList.add('skin-configurator__device-skin--active');
  deviceSkinsBack[i].classList.add('skin-configurator__device-skin--active');
}

function runAnimation () {
  deviceWrapper.classList.add('skin-configurator__device-wrapper--change');
  buttonBlockingLayer.classList.add('skin-configurator__button-blocking-layer--active');

  setTimeout(() => {
    deviceWrapper.classList.remove('skin-configurator__device-wrapper--change');
    buttonBlockingLayer.classList.remove('skin-configurator__button-blocking-layer--active');
  }, 1300);
}

function addSkinConfigurationButtonsClickHandler (i) {
  skinConfigurationButtons[i].addEventListener('click', () => {
    if (skinConfigurationButtons[i].classList.contains('skin-configurator__button--active')) {
      return;
    }

    removeActiveClass();
    addActiveClass(i);
    runAnimation();
  });
}

for (let i = 0; i < skinConfigurationButtons.length; i++) {
  addSkinConfigurationButtonsClickHandler(i);
}
