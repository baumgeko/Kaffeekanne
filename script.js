function fuellstandAendern(neuerFuellstand) {
    const kaffeekanneHoehe = document.querySelector('.kaffeekanne').offsetHeight;
    const fuellstandInPixel = (neuerFuellstand / 1000) * kaffeekanneHoehe;

    document.getElementById('fuellstand').style.height = fuellstandInPixel + 'px';
    document.getElementById('fuellstand').setAttribute('data-value', neuerFuellstand.toString());
}
