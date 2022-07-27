class PanelScrollManager{

	constructor(){
		this._behavior = 'smooth';
		this._maxTraveledPanel = 0;
		this._isCalculationActive = false;
	}

	// Current panel. 	
	get CurrentPanel(){
		let vh =  window.visualViewport.height / document.documentElement.scrollHeight;
		let currentPos = document.documentElement.scrollTop; 
		let newPanel=Math.floor(currentPos / vh / document.documentElement.scrollHeight);

		return newPanel;
	}

	// The deepest reached panel.  
	get DeepestReachedPanel(){
		if( !this._isCalculationActive )
			console.error("The calculation of the deepest panel is not active. Turn it on with `SetPanelCalculation()`");	
		return this._maxTraveledPanel;
	}

	// Go to the panel `index`, the first panel is 0.
	GoToPanel(index){
		let vh = window.visualViewport.height / document.documentElement.scrollHeight;
		let currentPos =index * vh * document.documentElement.scrollHeight;

		window.scrollTo({
			top:currentPos,
			behavior: this._behavior
		})
	}

	GoToId(id){
		document.getElementById(id).scrollIntoView({
       		behavior: this._behavior
      	})	
	}

	// Got to the panel `index`, the first panel is 0. You can use 'smooth', 'instant', 'auto' for behavior, default is 'smooth'.
	GoToPanelWithBehavior(index,behavior){
		let temp = this._behavior;
		this.SetBehavior(behavior);
		this.GoToPanel(index);	
		this.SetBehavior(temp);
	}


	// Active it for, get in any moment the deepest panel with `MaxTraveledPanel`
	SetPanelCalculation(){
		let self = this;
		addEventListener('scroll',function(){
			self._maxTraveledPanel = Math.max(self.CurrentPanel, self._maxTraveledPanel);
			self._isCalculationActive = true;
		});
	}

	// Set a behavior. You can use 'smooth', 'instant' or 'auto', default is 'smooth'
	SetBehavior(behavior){
		this._behavior = behavior;
	}
}


export { PanelScrollManager };
