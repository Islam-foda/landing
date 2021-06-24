# Title:
	* landing-page
# Description:
	- Creating a dynamic Unordered list in the Navigation Bar.
	- Styling the section in the viewport.
	- Clicking on navigation item make Scroling into correspondig section smoothly.
	- avilable over all windows platform.
# Usage Code:
	# JavaScript:
		* setting up the global variables.
		* create Function to build a Dynamic list refer to All sections in the DomTree. and adding event Listener to the list so it can scroll to the desired section when clicking on it.
		* second Function for observing when the section will be in the viewport by getboundigclientrect() function, and insert IF condition to set a specified class if the section is in the viewport.
		* calling the second function in an event listener that trigger scrolling
	# CSS:
		* adding media query line to adjust the navigation menu on the small screen.
	# html:
		* adding one section to check the dynamic list in the navigation bar.
