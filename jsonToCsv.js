//Takes the obj in sales_report.json and turn it to CSV string with commas. - works tested on replit
exports.jsonToCsv = (obj) => {
    const header = 'firstName,lastName,county,city,role,sales';
    const headerArray = header.split(',');

    // to create an array of obj 
    let x = [];
    let current = obj;
    x.push(current);

    let csv = '';

    while (x.length > 0) {
        //remove the 1st.
        let current = x.shift();

        for (var i = 0; i < headerArray.length; i++) {
            csv += current[headerArray[i]] + ',';
        }
        csv += csv.substr(0, csv.length - 1) + '\n';

        if (current.children.length > 0) {
            current.children.forEach(child => { x.push(child) });
        }

    }
    return header + '\n' + csv.substr(0, csv.length - 2)
}