function openModal()    {
    document.getElementById("termsModal").style.display = "flex";
}

function agreeTerms() {
    document.getElementById("termsModal").style.display = "none";
    const checkbox = document.getElementById("terms");
    checkbox.disabled = false;
    checkbox.checked = true;
}