const BASE_URL = 'https://run.hfd.co.il/RunCom.Server/Request.aspx?APPNAME=run&PRGNAME=ship_create_anonymous'
const detailedUrl = BASE_URL + '_details'

function sendData(data) {
    const params = {
        ARGUMENTS: []
    }
    params.ARGUMENTS = generateParamsArr(data)

    return axios.get(BASE_URL, params)
}

function generateParamsArr(data) {
    var arr = []
    for (const field in data) {
        switch (typeof field) {
            case "string":
                arr.push("-A" + field)
                break;
            case "number":
                arr.push("-N" + field)
                break;
            default:
                break;
        }
    }
    return arr
}