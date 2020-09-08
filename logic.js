window.onload = function () {

    sendButton.onclick = function () {wsSimple()}

}
function wsSimple() {
    const data = createDataAsXML()

    sendData(data)
        .then((response) => {
            console.log(response)

            const text = unescape(response.data)
            div_response.innerHTML = text
        })
        .catch((error) => console.log(error))
}


function createDataAsXML() {
    return createData("XML")
}
function createDataAsText() {
    return createData("TXT")
}

function createData(returnedFormat) {
    return new DataClass(
        3, "delivery", 35, 5,10,"Eran", 
        "holon", "hahistadrut",4,
        "052-222222",
        "sec asmahta",
        returnedFormat,
        "eee@eee.eee"
    )
}