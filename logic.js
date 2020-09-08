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
        1, "delivery", 35, 5,
        "Some buisness name",
        10, null,
        2, null,
        "Eran", null,
        "holon", null,
        "histadrut",
        4, "a", 1, 22,
        "052-222222", "053-333333",
        "asmahta", 33, "", "",
        "sec asmahta",
        "20/09/2020", "13:13",
        99, 100, "10/10/2020",
        "", 235245, 456456,
        returnedFormat, null, "",
        Date.now(),
        "eee@eee.eee",
        "20/11/2020", "20:20"
    )
}