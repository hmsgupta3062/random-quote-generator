// contains various data processing methods applied on the data fetched as per the data source

exports.extract1 = (data) => {
    return data['facts'][0]
}

exports.extract2 = (data) => {
    return data['text']
}

exports.extract3 = (data) => {
    return data['data']['fact']
}

exports.extract4 = (data) => {
    return data
}