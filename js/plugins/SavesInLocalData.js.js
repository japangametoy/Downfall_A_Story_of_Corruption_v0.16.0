//=============================================================================
// SavesInLocalData.js
//=============================================================================

/*:
 * @plugindesc Causes desktop save files to be saved in/loaded from local application directories rather than alongside game data.
 * @author Catball Games/Carrie Cygielnik
 *
 * @help This plugin does not provide plugin commands.
 */

(function() {
	StorageManager.localFileDirectoryPath = function() {
		var gui = require('nw.gui');
		var win = nw.Window.get();

		var base = gui.App.dataPath + "\\" + window.$dataSystem.gameTitle + "\\";
		return path.join(base, 'save/');
	};
}) ();