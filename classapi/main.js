const bodyelem= document.getElementById('body');
const idelem = document.getElementById('id');
const titleelem = document.getElementById('title');
const useridelem = document.getElementById('userid');
const url="https://jsonplaceholder.typecode.com/posts";
const data = {
    title:'foo',
    body:'bar',
    id:1
};
const options={
    method:'POST',
    body:JSON.stringify(data),
    headers:{
        "content-type":"application/json; charset=UTF-8"
    }
};
getData();

async function getData(){
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
    bodyelem.innerHTML = json.body;
    titleelem.innerHTML =json.title;
    idelem.innerHTML=json.id;
    useridelem.innerHTML=json.userId;
    console.log(json);

}