export const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
        return { right: !menuOpened && "-100%" };
    }
};


// Swiper Slider Settings 
export const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
        480: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2
        },
        750: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 4,
        },
    },

};


// Favourites
export const updateFavourites = (id, favourites) => {
    if (favourites.includes(id)) {
        return favourites.filter((resId) => resId !== id);
    } else {
        return [...favourites, id];
    }
};


// Check Favourites
export const checkFavourites = (id, favourites) => {
    return favourites?.includes(id) ? "#fa3e5f" : "white";
};



// Validate String Form
export const validateString = (value) => {
    return value?.length < 3 || value === null
        ? "Must have atleast 3 characters"
        : null;
};