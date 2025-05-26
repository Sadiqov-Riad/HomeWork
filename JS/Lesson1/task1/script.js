let text = document.getElementsByClassName('input');

text[0].oninput = function() {
    this.value = this.value.replace(/\d/g, '');
}