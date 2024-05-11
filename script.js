//your JS code here. If required.
document.getElementById("btn").addEventListener("click",function (event) {
	event.preventDefault();
	const promis = new Promise((resolve,reject)=>{
		const age = document.getElementById("age").value;
		const name = document.getElementById("name").value;
		setTimeout(()=>{
			if(age>18){
			resolve("Welcome, "+name+". You can vote.")
			}
		else{
			reject("Oh sorry "+name+". You aren't old enough.")
		}
		},4000)
	})
promise.then((masg)=>{
	alert(masg);
}).catch((msg)=>{
	alert(msg);
})
})