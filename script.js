var baseURL = 'https://reqres.in/api/users';
var rawData = [];
// let id = 0;

fetch(`${baseURL}?page=2`)
    .then((response) => {
        // console.log(response)
        if(!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then((result) => {
        // console.log(result.data);
        var data = result.data;
        getDetail(data);

        // lets globalize data with an array
        rawData = data;
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });
    
function getDetail(data) {
    // console.log(data);
    // var detail = document.getElementById("detail");

    // for(let x of data) {
    // // console.log(x);
    // var tRow = document.createElement('tr');
    //     tRow.innerHTML += `
    //         <th onclick="visibile(${x.id})"> ${x.id} </th> 
    //         <td>${x.first_name}</td>
    //         <td>${x.email}</td>            
    //         `
    //     detail.appendChild(tRow);
    // }

    var leftData = document.getElementById('leftData').innerHTML;
    var renders = Mustache.render(leftData, { table : data });

    document.getElementById('detail').innerHTML = renders;
}

function visibile(id) {
    // console.log(id)

    fetch(`${baseURL}/${id}`)
        .then((response) => response.json())
        .then((result) => {
            // console.log(result.data);
            var userDetail= result.data;
            // document.getElementById("inDetail").innerHTML = `<div class="content">
            //   ${userDetail.id} - ${userDetail.first_name} - ${userDetail.last_name} - ${userDetail.email} - <img src='${userDetail.avatar}' alt='avatar.image' />
            // </div>`;

        var template = document.getElementById('template').innerHTML;
        var rendered = Mustache.render(template, userDetail);

        document.getElementById('inDetail').innerHTML = rendered;
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });

    // for (let x of rawData) {
    //   console.log(x);
    //   document.getElementById("inDetail").innerHTML += `<div class="content">
    //       ${x.id} - ${x.first_name} - ${x.last_name} - ${x.email} - <img src='${x.avatar}' alt='avatar.image' />
    //     </div>`;
    // }

    // for(let i = 0; i < rawData.length; i++) {
    //     // console.log(rawData);
    //     var tData = rawData[i];
    //     // console.log(tData);
    //     if(tData.id == id) {            
    //         document.getElementById('inDetail').innerHTML = `
    //         <div class="content d-flex">
    //         <div class="col-4 m-5">
    //             <img src='${tData.avatar}' alt='avatar.image' />
    //         </div>
    //         <div class="col-4 m-5">
    //             <i class="fa-solid fa-user"></i> Name: ${tData.first_name} ${tData.last_name} <br /> 
    //             <i class="fa-solid fa-envelope"></i> Email: ${tData.email}
    //         </div>
    //         </div>`;
    //     }
    // }

}
