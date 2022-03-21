var rowData = [];

var url = 'https://reqres.in/api/users';    // ?page=2

fetch(url)
    .then((response) => {
        // console.log(response);
        if(!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then((result) => {
        // console.log(result);
        // console.log(result.data);
        var data = result.data;
        getDetail(data);

        // lets globalize data with an array
        rowData = data;
    })
    .catch(error => {
        console.log(error);
    });

function getDetail(dat) {
    var detail = document.getElementById('detail');

    for(var i = 0; i < dat.length; i++) {
        var tRow = document.createElement('tr');

        tRow.innerHTML = `<th onclick="visibile(${dat[i].id})">${dat[i].id}</th>
                    <td>${dat[i].first_name}</td>
                    <td>${dat[i].last_name}</td>
                    <td>${dat[i].email_name}</td>
                    <td><img src="${dat[i].avatar}" alt="image" /></td>
                `
            // return detail.appendChild(tRow);     // display 1 item only
            detail.appendChild(tRow);               // Multi data displayed
    }
}

function visibile(ids) {
    console.log('click', rowData.find(item => item.id == ids))
}