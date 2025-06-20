function openModal()    {
    document.getElementById("termsModal").style.display = "block";
}

function agreeTerms() {
    document.getElementById("termsModal").style.display = "none";
    const checkbox = document.getElementById("termsCheckbox");
    checkbox.disabled = false;
    checkbox.checked = true;
}
