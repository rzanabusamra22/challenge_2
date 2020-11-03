//Takes the obj in sales_report.json and turn it to CSV string with commas. - works tested on replit
exports.jsonToCsv = (obj) => {
    const header = 'firstName,lastName,county,city,role,sales';
    const headerArr = header.split(',');

    let q = [];
    let current = obj;
    q.push(current);

    let csv = '';

    while (q.length > 0) {
        let current = q.shift();

        for (let i = 0; i < headerArr.length; i += 1) {
            csv += current[headerArr[i]] + ',';
        }

        csv = csv.substr(0, csv.length - 1) + '\n';

        if (current.children.length > 0) {
            current.children.forEach(child => q.push(child));
        }

    }

    return header + '\n' + csv.substr(0, csv.length - 2);
};