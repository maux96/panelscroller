function SetPanel(index){
	let currentPos =index * (window.visualViewport.height/document.documentElement.scrollHeight)* document.documentElement.scrollHeight
	window.scrollTo({
        top:currentPos,
        behavior:'smooth'
    })
}

function calcCurrentPanel(){

	let vh =  window.visualViewport.height / document.documentElement.scrollHeight;
	let currentPos = document.documentElement.scrollTop; 
	let newPanel=Math.floor(currentPos/vh/document.documentElement.scrollHeight);
	return newPanel;

}



