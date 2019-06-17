window.onload = function() {
    document.getElementById("submit-btn").onclick = function () {
        var textA = document.getElementById("textA").value;
        var textB = document.getElementById("textB").value;
        var resultTextA = document.getElementById('textA-result');
        var resultTextB = document.getElementById('textB-result');


        while (resultTextA.firstChild) {
            resultTextA.removeChild(resultTextA.firstChild);
        }
        while (resultTextB.firstChild) {
            resultTextB.removeChild(resultTextB.firstChild);
        }

        var len = textA.length >= textB.length ? textA.length : textB.length;
        for(var i = 0;i < len;i++) {
            var span = document.createElement("span");
            span.style.backgroundColor = textA[i] === textB[i] ? '' : 'orange';
            span.appendChild(document.createTextNode(typeof textA[i] !== 'undefined' ? textA[i] : ''));
            resultTextA.appendChild(span);

            span = document.createElement("span");
            span.style.backgroundColor = textA[i] === textB[i] ? '' : 'orange';
            span.appendChild(document.createTextNode(typeof textB[i] !== 'undefined' ? textB[i] : ''));
            resultTextB.appendChild(span);
        }
    };
}