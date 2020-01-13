function show_more(button_element) {
    var element = button_element;
    while (element.parentElement) {
        element = element.parentElement;
        console.log(element.tagName.toLowerCase())
        if (element.tagName && element.tagName.toLowerCase() === "section") {
            element.setAttribute('show_more', 'true');
            button_element.parentElement.style.display = 'none';
            return;
        }
    }
}