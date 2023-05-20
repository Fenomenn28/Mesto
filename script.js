// Профиль 
const formElementProfile = document.querySelector('[name="profile-form"]');
const profileOpenPopup = document.querySelector('.profile__edit-button');
const profileClosePopup = document.querySelector('.popup__button-close_type_profile-edit');
const popupProfile = document.querySelector('.popup_type_profile-edit');
const nameInput = document.querySelector('[name="name"]');
const jobInput = document.querySelector('[name="profession"]');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
// открыть или закрыть Popup профиля
function openOrCloseProfile() {
    nameInput.value = '';
    jobInput.value = '';
    popupProfile.classList.toggle('popup_opened');
}
// Редактирование профиля 
function handleFormSubmit(evt) {
evt.preventDefault(); 
    
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;

    popupProfile.classList.remove('popup_opened');
}

profileOpenPopup.addEventListener('click', openOrCloseProfile);
profileClosePopup.addEventListener('click', openOrCloseProfile);
formElementProfile.addEventListener('submit', handleFormSubmit);
//_________________________________________________________
//Карты 
const cards = document.querySelector('.cards');
const popupCards = document.querySelector('.popup_type_card-edit')
const cardsOpenPopup = document.querySelector('.profile__add-button');
const cardsClosePopup = document.querySelector('.popup__button-close_type_card-edit');
const formElementCards = document.querySelector('[name="cards-form"]');
const closePopupImage = document.querySelector('.popup__button-close_type_image');
const titleInput = document.querySelector('[name="title"]');
const imageInput = document.querySelector('[name="image"]');
const popupImage = document.querySelector('.popup_type_image');
const imagePopupImage = document.querySelector('.popup__image');
const namePopupImage = document.querySelector('.popup__name');
const cardTemplate = document.querySelector('#card').content;
//создание первых 6 карт 
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
].forEach(function(item){
    const cardTemplateClone = cardTemplate.querySelector('.cards__card').cloneNode(true);
    const cardImage = cardTemplateClone.querySelector('.cards__image');
    const cardName = cardTemplateClone.querySelector('.cards__name');
    cardName.textContent = item.name;
    cardImage.src = item.link;

    //like 
    cardTemplateClone.querySelector('.cards__like').addEventListener('click', function(evt){
        evt.target.classList.toggle('cards__like_active');
    });
    //delete
    cardTemplateClone.querySelector('.cards__delete-cards').addEventListener('click',function(evt){
        evt.target.closest('.cards__card').remove();
    });
    //popupImage
    cardImage.addEventListener('click',function(evt){
        openPopup(popupImage);
        imagePopupImage.src = evt.target.src;
        namePopupImage.textContent = cardName.textContent;
    });

    cards.append(cardTemplateClone);
});
//Добавление карт
function handleFormSubmitForCards(evt) {
evt.preventDefault(); 
    const cardTemplateClone = cardTemplate.querySelector('.cards__card').cloneNode(true);
    const cardName = cardTemplateClone.querySelector('.cards__name');
    const cardImage = cardTemplateClone.querySelector('.cards__image');
    cardName.textContent = titleInput.value;
    cardImage.src = imageInput.value;

    //like
    cardTemplateClone.querySelector('.cards__like').addEventListener('click', function(evt){
        evt.target.classList.toggle('cards__like_active');
    });
    //delete
    cardTemplateClone.querySelector('.cards__delete-cards').addEventListener('click',function(evt){
        evt.target.parentElement.remove();
    });
    //popup Image
    cardImage.addEventListener('click',function(evt){
        openPopup(popupImage);
        imagePopupImage.src = evt.target.src;
        namePopupImage.textContent = cardName.textContent;
    }); 
    // добавление в DOM и закрытие
    cards.prepend(cardTemplateClone);
    popupCards.classList.remove('popup_opened');

};
//открыть или закрыть Popup добавления карт
function openOrCloseCards () {
    titleInput.value = '';
    imageInput.value = '';
    popupCards.classList.toggle('popup_opened');
};
//открыть или закрыть Popup - пока что popup image
function openPopup(popup) {
    popup.classList.add('popup_opened');
} 
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

closePopupImage.addEventListener('click', function(){
    closePopup(popupImage);
});
cardsOpenPopup.addEventListener('click', openOrCloseCards);
cardsClosePopup.addEventListener('click', openOrCloseCards);
formElementCards.addEventListener('submit', handleFormSubmitForCards);





