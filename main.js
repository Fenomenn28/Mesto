(()=>{"use strict";function e(e){e.classList.add("popup_opened"),document.addEventListener("keydown",n)}function t(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",n)}function n(e){"Escape"===e.key&&t(document.querySelector(".popup_opened"))}var o=function(e,t,n,o){var r=e.querySelector(".".concat(t.name,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,console.log(n)};function r(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled",!0))}function c(e){var t=e.querySelector(".popup__button-save");t.classList.add("popup__button-save_inactive"),t.setAttribute("disabled",!0)}function a(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}var u=document.querySelector(".popup__image"),i=document.querySelector(".popup__name"),s=document.querySelector("#card").content,l=document.querySelector(".popup_type_image");function d(t,n,o,r,c,d){var p=s.querySelector(".cards__card").cloneNode(!0),f=p.querySelector(".cards__image"),_=p.querySelector(".cards__name"),m=p.querySelector(".cards__number-of-likes"),v=p.querySelector(".cards__delete-cards"),h=p.querySelector(".cards__like");return f.src=t,_.textContent=n,m.textContent=o.length,f.alt="Что-то пошло не так c изображением ".concat(_.textContent),o.find((function(e){return e._id===d}))&&h.classList.add("cards__like_active"),h.addEventListener("click",(function(e){e.target.classList.contains("cards__like_active")?function(e){return fetch("https://nomoreparties.co/v1/plus-cohort-25/cards/likes/".concat(e),{method:"DELETE",headers:{authorization:"c3c4d044-b1fb-4b5c-845a-bef8a6b1e8ce"}}).then((function(e){return a(e)}))}(c).then((function(e){m.textContent=e.likes.length})).then((function(){return e.target.classList.remove("cards__like_active")})).catch((function(e){console.log(e)})):function(e){return fetch("https://nomoreparties.co/v1/plus-cohort-25/cards/likes/".concat(e),{method:"PUT",headers:{authorization:"c3c4d044-b1fb-4b5c-845a-bef8a6b1e8ce"}}).then((function(e){return a(e)}))}(c).then((function(e){m.textContent=e.likes.length})).then((function(){return e.target.classList.add("cards__like_active")})).catch((function(e){console.log(e)}))})),r!==d?v.classList.add("cards__delete-cards_inactive"):v.addEventListener("click",(function(e){(function(e){return fetch("https://nomoreparties.co/v1/plus-cohort-25/cards/".concat(e),{method:"DELETE",headers:{authorization:"c3c4d044-b1fb-4b5c-845a-bef8a6b1e8ce"}}).then((function(e){return a(e)}))})(c).then((function(){return e.target.closest(".cards__card").remove()})).catch((function(e){console.log(e)}))})),f.addEventListener("click",(function(t){e(l),u.src=t.target.src,u.alt="Что-то пошло не так c изображением ".concat(_.textContent),i.textContent=_.textContent})),p}var p,f=document.querySelector('[name="profile-form"]'),_=document.querySelector(".profile__edit-button"),m=document.querySelector(".popup__button-close_type_profile-edit"),v=document.querySelector(".popup_type_profile-edit"),h=document.querySelector('[name="name"]'),y=document.querySelector('[name="profession"]'),b=document.querySelector(".profile__name"),S=document.querySelector(".profile__profession"),q=document.querySelector(".popup_type_card-edit"),g=document.querySelector(".profile__add-button"),C=document.querySelector(".popup__button-close_type_card-edit"),L=document.querySelector('[name="cards-form"]'),k=document.querySelector('[name="title"]'),E=document.querySelector('[name="image"]'),x=document.querySelector(".cards"),T=document.querySelector(".popup__button-close_type_image"),A=document.querySelector(".popup_type_image"),z=document.querySelector(".popup_type_avatar-edit"),j=document.querySelector(".profile__avatar-button-edit"),P=document.querySelector(".popup__button-close_type_avatar-edit"),w=document.querySelector('[name="avatar"]'),B=document.querySelector('[name="avatar-form"]'),D=document.querySelector(".profile__avatar"),N=document.querySelector(".popup__button-save_type_profile-edit"),O=document.querySelector(".popup__button-save_type_cards-edit"),J=document.querySelector(".popup__button-save_type_avatar-edit");f.addEventListener("submit",(function(e){e.preventDefault(),N.textContent="Сохранение...",function(e,t){return fetch("https://nomoreparties.co/v1/plus-cohort-25/users/me",{method:"PATCH",headers:{authorization:"c3c4d044-b1fb-4b5c-845a-bef8a6b1e8ce","Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return a(e)}))}(h.value,y.value).then((function(e){b.textContent=e.name,S.textContent=e.about})).then((function(){return t(v)})).catch((function(e){console.log(e)})).finally((function(){return N.textContent="Сохранить"}))})),L.addEventListener("submit",(function(e){e.preventDefault(),O.textContent="Сохранение...",function(e,t){return fetch("https://nomoreparties.co/v1/plus-cohort-25/cards",{method:"POST",headers:{authorization:"c3c4d044-b1fb-4b5c-845a-bef8a6b1e8ce","Content-Type":"application/json"},body:JSON.stringify({link:e,name:t})}).then((function(e){return a(e)}))}(E.value,k.value).then((function(e){var t=d(e.link,e.name,e.likes,e.owner._id,e._id,e.owner._id);x.prepend(t)})).then((function(){return t(q)})).catch((function(e){console.log(e)})).finally((function(){return O.textContent="Сохранить"}))})),B.addEventListener("submit",(function(e){e.preventDefault(),J.textContent="Сохранение...",function(e){return fetch("https://nomoreparties.co/v1/plus-cohort-25/users/me/avatar",{method:"PATCH",headers:{authorization:"c3c4d044-b1fb-4b5c-845a-bef8a6b1e8ce","Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return a(e)}))}(w.value).then((function(e){D.src=e.avatar})).then((function(){return t(z)})).catch((function(e){console.log(e)})).finally((function(){return J.textContent="Сохранить"}))})),_.addEventListener("click",(function(){h.value=b.textContent,y.value=S.textContent,e(v),c(v)})),v.addEventListener("click",(function(e){e.target===v&&t(v),e.target===m&&t(v)})),g.addEventListener("click",(function(){k.value="",E.value="",e(q),c(q)})),q.addEventListener("click",(function(e){e.target===q&&t(q),e.target===C&&t(q)})),A.addEventListener("click",(function(e){e.target===A&&t(A),e.target===T&&t(A)})),j.addEventListener("click",(function(){w.value="",e(z),c(z)})),z.addEventListener("click",(function(e){e.target===z&&t(z),e.target===P&&t(z)})),p={formSelector:".popup__form",inputSelector:".popup__edit",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"popup__edit_type-error"},Array.from(document.querySelectorAll(p.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),c=e.querySelector(t.submitButtonSelector);r(n,c,t),n.forEach((function(a){a.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?o(e,t,t.dataset.error,n):t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.name,"-error"));t.classList.remove(n.inputErrorClass),o.textContent=""}(e,t,n):o(e,t,t.validationMessage,n)}(e,a,t),r(n,c,t)}))}))}(e,p)})),Promise.all([fetch("https://nomoreparties.co/v1/plus-cohort-25/users/me",{headers:{authorization:"c3c4d044-b1fb-4b5c-845a-bef8a6b1e8ce","Content-Type":"application/json"}}).then((function(e){return a(e)})),fetch("https://nomoreparties.co/v1/plus-cohort-25/cards",{headers:{authorization:"c3c4d044-b1fb-4b5c-845a-bef8a6b1e8ce"}}).then((function(e){return a(e)}))]).then((function(e){b.textContent=e[0].name,S.textContent=e[0].about,e[1].forEach((function(t){var n=d(t.link,t.name,t.likes,t.owner._id,t._id,e[0]._id);x.append(n),D.src=e[0].avatar}))})).catch((function(e){console.log(e)}))})();