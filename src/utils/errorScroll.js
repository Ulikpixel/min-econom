export const errorScroll = (error) => {
    const data = Object.keys(error);
    const field = document.querySelector(`[name="${data[0]}"]`);
    const select = document.querySelector('.select-error');
    const errorTag = field || select;
    if (errorTag) {
        errorTag.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    }
};