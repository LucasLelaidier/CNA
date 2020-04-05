let firstParagraph = (data) => {
    for(let block in data["blocks"]) {
        for(var key in data["blocks"][block]) {
            if(key === "type" && data["blocks"][block][key] === "paragraph") {
                return data["blocks"][block]["data"]["text"].substring(0, 122) + "...";
            }
        }
    }
}	

let isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

let getDate = (type) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    if(type === "normal") {
        return dd + '/' + mm + '/' + yyyy;
    } else {
        return yyyy + '-' + mm + '-' + dd;
    }
}

exports.firstParagraph = firstParagraph;
exports.isEmpty = isEmpty;
exports.getDate = getDate;
