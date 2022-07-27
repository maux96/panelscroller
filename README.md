# PanelScroller

A very simple JavaScript library for move around the page using the viewport height size. 

## Install

Using npm:
```bash
npm install panelscroller 
```

## Use 

First, import the package
```javascript
import { PanelScrollManager } from 'panelscroller/panelscroller'
```

We define a panel as a compoent with height size as window viewport size. Then, a n-panel will be the (n-1)-th viewport height size after the start of the page.

To go to some panel 
```javascript
const manager = new PanelScrollManager();

manager.GoToPanel(0); // go to the first panel
manager.GoToPanel(1); // go to the second panel
manager.GoToPanel(2); // go to the third panel
//...
manager.GoToPanel(n); // go to the (n-1)-th panel
```

To go to specific Id
```javascript
const manager = new PanelScrollManager();
manager.GoToID("place1");
```

Set a default behavior
```javascript
const manager = new PanelScrollManager();

manager.SetBehavior('instant');
manager.SetBehavior('smooth');
manager.SetBehavior('auto');
```

Using a specific behavior only one time
```javascript
const manager = new PanelScrollManager();

manager.GoToPanelWithBehavior(1, 'instant');
manager.GoToPanelWithBehavior(1, 'smooth');
manager.GoToPanelWithBehavior(1, 'auto');
```

You can get the deepest reached panel, this is calculated every time the `scroll` event is detected.
```javascript
const manager = new PanelScrollManager();

manager.SetPanelCalculation(); // Activate this feature.
manager.DeepestReachedPanel() // Get the panel number.
```
