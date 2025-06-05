const nameButton = document.getElementById("name-button");
const input = document.getElementById("name-input");
const namingOutput = document.getElementById("naming-output");
const copyButton = document.getElementById('copy-button');

nameButton.addEventListener("click", () => {
    const textToRename = input.value;
    if(textToRename){
        namingOutput.textContent = textToRename.toLowerCase().replace(/\s+/g, '-');
        copyButton.style.display = "block";
        namingOutput.style.display = "block";
    }

});


copyButton.addEventListener('click', function () {
    const outputText = document.getElementById('naming-output').textContent;
    navigator.clipboard.writeText(outputText);
});