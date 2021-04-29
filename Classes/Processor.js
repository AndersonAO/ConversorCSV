class Processor{

    static Process(data){
        var rowStr = data.split('\r\n');
        var rows = [];
        rowStr.forEach(row =>{
            rows.push(row.split(';'));
        })

        return rows
    }
}

module.exports = Processor;