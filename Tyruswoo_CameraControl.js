//=============================================================================
// Camera Control
// For RPG Maker MZ
// By Tyruswoo
//=============================================================================

/*
 * MIT License
 *
 * Copyright (c) 2023 Kathy Bunn and Scott Tyrus Washburn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var Imported = Imported || {};
Imported.Tyruswoo_CameraControl = true;

var Tyruswoo = Tyruswoo || {};
Tyruswoo.CameraControl = Tyruswoo.CameraControl || {};

/*:
 * @target MZ
 * @plugindesc MZ v1.1.2 Provides greater control of the camera!
 * @author Tyruswoo
 * @url https://www.tyruswoo.com
 *
 * @help Tyruswoo Camera Control for RPG Maker MZ
 * ============================================================================
 * Plugin commands:
 *    Watch Leader                Camera watches the party leader.
 *    Watch Follower 1            Camera watches the party's first follower.
 *    Watch Follower 2            Camera watches the party's second follower.
 *    Watch Follower 3            Camera watches the party's third follower.
 *    Watch Follower 4            Camera watches the party's fourth follower.
 *    Watch Follower 5            Camera watches the party's fifth follower.
 *    Watch Follower 6            Camera watches the party's sixth follower.
 *    Watch Follower 7            Camera watches the party's seventh follower.
 *    Watch Follower 8            Camera watches the party's eighth follower.
 *    Watch Follower 9            Camera watches the party's ninth follower.
 *    Watch Player/Follower       Camera on player. (May use Follower Control.)
 *    Watch Event                 Camera watches an event on the map.
 *    Watch Map at Current View   Camera stops and watches current view.
 *    Watch Map at Coordinates    Camera locks on given coordinates.
 * ============================================================================
 * Basics of how to use this plugin:
 * 1. Inside an event, use a plugin command, and select the
 *    Tyruswoo_CameraControl plugin.
 * 2. From the dropdown menu, select who/what you want the camera to watch.
 *    Now the camera will watch your selected target!
 * 3. After you are done with story or other parts of your game, you may want
 *    to return the camera to normal. To return the camera to normal, use the
 *    Watch Leader plugin command.
 * ============================================================================
 * Tip: For cutscenes with camera movement, you can create an event named
 *      "Camera" that has no picture, has Through On, and has no content.
 *      In your cutscene event, use the Camera Control plugin's Watch Event
 *      plugin command to target the camera event. Then, your cutscene event
 *      can use "Set Move Route" on the camera event to make the camera watch
 *      wherever the camera event moves!
 *       - Extra tip: With Set Move Route, you can move the camera event
 *         diagonally by using the Move Lower Left, Move Lower Right,
 *         Move Upper Left, and Move Upper Right. Now you can have your camera
 *         pan diagonally!
 * ============================================================================
 * Examples of ways to use this plugin:
 *  - During a story scene ("cutscene"), make the camera follow a certain
 *    event. This may be a character in the story, or the camera may watch an
 *    invisible event that exists to be the camera's target.
 *  - When the camera is watching an event, you can change the speed of the
 *    camera's movement by changing the speed of the event. (You may want
 *    the event's step Frequency set to "Highest" so that the camera moves
 *    smoothly.)
 *  - Use one of the Watch Map plugin commands to target the map. Then, use the
 *    Scroll Map commands to move the camera's view from there. When the
 *    camera is watching the map, you can move the camera however you like
 *    using Scroll Map commands!
 *  - You can watch the event running the plugin command by selecting the
 *    Watch Event plugin command, but then leaving the Event ID blank or zero.
 * ============================================================================
 * Moving the camera's view without this plugin:
 *
 * You can use the "Scroll Map..." event command within and event's contents.
 * This event command is found in Event Command tab 2, under Movement. This
 * is useful for basic cutscene content. However, there are some drawbacks.
 *  - The Scroll Map event command does not allow for diagonal movement of the
 *    camera.
 *  - The Scroll Map event command forces waiting if more than one scroll map
 *    event command is scheduled. This can be bad for "escape the dungeon"
 *    autoscrolling, in which the player is intended to be mobile while the
 *    camera's view is moving.
 * ============================================================================
 * Visit Tyruswoo.com to ask for help, donate, or browse more of our plugins.
 * ============================================================================
 * Version History:
 *
 * v1.0  9/12/2020
 *        - Camera Control released for RPG Maker MZ!
 *
 * v1.1  9/26/2020
 *        - Fixed a bug in which orientational shift required the
 *          Tyruswoo_TileControl plugin. Now, orientational shift is
 *          calculated by the Camera Control plugin without needing
 *          Tyruswoo_TileControl.
 * 
 * v1.1.1  8/30/2023
 *        - This plugin is now free and open source under the MIT license.
 * 
 * v1.1.2  9/23/2024
 *        - Fixed a crash affecting saves that were made before Camera Control
 *          was installed and turned ON.
 * ============================================================================
 * MIT License
 *
 * Copyright (c) 2023 Kathy Bunn and Scott Tyrus Washburn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 * ============================================================================
 * Remember, only you can build your dreams!
 * -Tyruswoo
 *
 * @command leader
 * @text Watch Leader
 * @desc Camera watches the party leader. This is the default for RPG Maker.
 *
 * @command follower_1
 * @text Watch Follower 1
 * @desc Camera watches the first follower (in current marching order).
 *
 * @command follower_2
 * @text Watch Follower 2
 * @desc Camera watches the second follower (in current marching order).
 *
 * @command follower_3
 * @text Watch Follower 3
 * @desc Camera watches the third follower (in current marching order).
 *
 * @command follower_4
 * @text Watch Follower 4
 * @desc Camera watches the fourth follower (in current marching order).
 *
 * @command follower_5
 * @text Watch Follower 5
 * @desc Camera watches the fifth follower (in current marching order).
 *
 * @command follower_6
 * @text Watch Follower 6
 * @desc Camera watches the sixth follower (in current marching order).
 *
 * @command follower_7
 * @text Watch Follower 7
 * @desc Camera watches the seventh follower (in current marching order).
 *
 * @command follower_8
 * @text Watch Follower 8
 * @desc Camera watches the eighth follower (in current marching order).
 *
 * @command follower_9
 * @text Watch Follower 9
 * @desc Camera watches the ninth follower (in current marching order).
 *
 * @command player
 * @text Watch Player/Follower
 * @desc Camera watches the player. In default RPG Maker, this is the leader. With Follower Control, can change party member watched.
 *
 * @command event
 * @text Watch Event
 * @desc Camera watches an event. (Leave ID empty, or use Event ID 0, to watch the current event.)
 *
 * @arg eventId
 * @type number
 * @text Event ID
 * @desc Select an event by event ID. Use 0 (or empty) for this event.
 *
 * @command map
 * @text Watch Map at Current View
 * @desc Camera watches the location on the map that is currently at the center of the camera's view.
 *
 * @command map_at_coordinates
 * @text Watch Map at Coordinates
 * @desc Camera watches a location on the map, using (x,y) coordinates. May use relative or absolute coordinates.
 *
 * @arg coordinates
 * @type struct<cameraCoordinates>
 * @default {"x":"0","y":"0"}
 * @text X,Y Coordinates
 * @desc (x,y) location to watch with camera. +x for east, +y for south. If relative: -x for west, -y for north.
 *
 * @arg relativity
 * @type struct<cameraRelativity>
 * @default {"mode":"Relative to Event","eventId":"","party_member":"","orientational_shift":""}
 * @text Relativity
 * @desc Coordinates may be interpreted as absolute, or relative to an event or the player.
 */

/*~struct~cameraCoordinates:
 * @param x
 * @type number
 * @default 0
 * @min -256
 * @max 256
 * @text X
 * @desc X coordinate value.
 *
 * @param y
 * @type number
 * @default 0
 * @min -256
 * @max 256
 * @text Y
 * @desc Y coordinate value.
 */

/*~struct~cameraRelativity:
 * @param mode
 * @type select
 * @option Absolute
 * @option Relative to Event
 * @option Relative to Player
 * @default Relative to Event
 * @text Relativity Mode
 * @desc Select how coordinates are to be interpreted. If relative, defaults either to this event or to player.
 *
 * @param eventId
 * @parent mode
 * @type number
 * @text Event ID
 * @desc Event ID number of the event whose coordinates are to be used for "Relative to Event." 0 (or empty) for this event.
 *
 * @param party_member
 * @parent mode
 * @type select
 * @option Player
 * @option Leader
 * @option Follower 1
 * @option Follower 2
 * @option Follower 3
 * @option Follower 4
 * @option Follower 5
 * @option Follower 6
 * @option Follower 7
 * @option Follower 8
 * @option Follower 9
 * @text Party Member
 * @desc Party member whose coordinates are used for "Relative to Player". Default: Player. Can use Follower Control plugin.
 *
 * @param orientational_shift
 * @parent mode
 * @type struct<cameraShift>
 * @text Orientational Shift
 * @desc With "Relative to Event" or "Relative to Player", modify coordinates based on direction character is facing.
 */

/*~struct~cameraShift:
 * @param forward_shift
 * @type number
 * @default 0
 * @min -256
 * @max 256
 * @text Forward Shift
 * @desc Modify coordinates based on the direction the character is facing. Positive for forward. Negative for backward.
 *
 * @param rightward_shift
 * @type number
 * @default 0
 * @min -256
 * @max 256
 * @text Rightward Shift
 * @desc Modify coordinates based on the direction the character is facing. Positive for rightward. Negative for leftward.
 */

(() => {
    const pluginName = "Tyruswoo_CameraControl";
	
	// Default values for plugin command arguments.
	const defaultCoordinates = {"x":"0", "y":"0"};
	const defaultRelativity = {"mode":"Relative to Event","eventId":"","party_member":"","orientational_shift":""};
	const defaultOrientationalShift = {"forward_shift":"0","rightward_shift":"0"};
	
	// Variables
	Tyruswoo.CameraControl._pluginCommandEventId = 0; //Keep track of the most recent event to run a plugin command.

	//=============================================================================
	// Camera Control Functions
	//=============================================================================

	// New method.
	// Modeled from the similar Tyruswoo_TileControl function, known as Tyruswoo.TileControl.extract_xyz_array().
	// With input of args from Camera Control plugin command, outputs an array [x, y], with accounting for relativity options.
	Tyruswoo.CameraControl.extract_xy_array = function(args) {
		const coordinates = args.coordinates ? JSON.parse(args.coordinates) : defaultCoordinates;
		const relativity = args.relativity ? JSON.parse(args.relativity) : defaultRelativity;
		const orientational_shift = relativity.orientational_shift ? JSON.parse(relativity.orientational_shift) : defaultOrientationalShift;
		var x = Number(coordinates.x);
		var y = Number(coordinates.y);
		if(relativity.mode == "Relative to Event") {
			const eventId = Number(relativity.eventId) ? Number(relativity.eventId) : Tyruswoo.CameraControl._pluginCommandEventId;
			const e = $gameMap.event(eventId);
			if(e) {
				const f = Number(orientational_shift.forward_shift) ? Number(orientational_shift.forward_shift) : 0;
				const r = Number(orientational_shift.rightward_shift) ? Number(orientational_shift.rightward_shift) : 0;
				const xy_shift = Tyruswoo.CameraControl.orientationalShift(e.direction(), f, r);
				x = x + e.x + xy_shift[0];
				y = y + e.y + xy_shift[1];
			};
		} else if(relativity.mode == "Relative to Player") {
			var p = $gamePlayer; //By default, the party leader is selected.
			if(Imported.Tyruswoo_FollowerControl) { //However, if Tyruswoo_FollowerControl is installed, then the currently selected follower is automatically selected.
				p = Tyruswoo.FollowerControl.follower();
			};
			if(relativity.party_member == "Leader") {
				p = $gamePlayer; //Regardless of whether Tyruswoo_FollowerControl is installed, the "Leader" option can be used to select the leader.
			} else if(relativity.party_member.substr(0, 8) == "Follower") {
				const n = Number(relativity.party_member.substr(9)); //Get the number found after this string's last space.
				p = $gamePlayer.followers().follower(n - 1);
			};
			if(p) {
				const f = Number(orientational_shift.forward_shift) ? Number(orientational_shift.forward_shift) : 0;
				const r = Number(orientational_shift.rightward_shift) ? Number(orientational_shift.rightward_shift) : 0;
				const xy_shift = Tyruswoo.CameraControl.orientationalShift(p.direction(), f, r);
				x = x + p.x + xy_shift[0];
				y = y + p.y + xy_shift[1];
			};
		};
		return [x, y];
	};

	// New method
	// Modeled from the similar Tyruswoo_TileControl function, known as Tyruswoo.TileControl.orientationalShift().
	Tyruswoo.CameraControl.orientationalShift = function(direction, f = 0, r = 0) { //direction, forward shift, and rightward shift.
		var xShift = 0;
		var yShift = 0;
		switch(direction) {
			case 2:
				xShift -= r;
				yShift += f;
				break;
			case 4:
				xShift -= f;
				yShift -= r;
				break;
			case 6:
				xShift += f;
				yShift += r;
				break;
			case 8:
				xShift += r;
				yShift -= f;
				break;
		};
		return [xShift, yShift];
	};

	//=============================================================================
	// PluginManager
	//=============================================================================
	
	// leader
	PluginManager.registerCommand(pluginName, "leader", args => {
		$gameMap._camFollow = "leader";
		const w = $gamePlayer;
		$gamePlayer.center(w._realX, w._realY);
	});

	// player
	PluginManager.registerCommand(pluginName, "player", args => {
		$gameMap._camFollow = "player";
		const w = (Imported.Tyruswoo_FollowerControl && Tyruswoo.FollowerControl.follower()) ? Tyruswoo.FollowerControl.follower() : $gamePlayer;
		$gamePlayer.center(w._realX, w._realY);
	});

	// follower_1
	PluginManager.registerCommand(pluginName, "follower_1", args => {
		$gameMap._camFollow = "follower_1";
		const w = $gamePlayer.followers().follower(0);
		$gamePlayer.center(w._realX, w._realY);
	});

	// follower_2
	PluginManager.registerCommand(pluginName, "follower_2", args => {
		$gameMap._camFollow = "follower_2";
		const w = $gamePlayer.followers().follower(1);
		$gamePlayer.center(w._realX, w._realY);
	});

	// follower_3
	PluginManager.registerCommand(pluginName, "follower_3", args => {
		$gameMap._camFollow = "follower_3";
		const w = $gamePlayer.followers().follower(2);
		$gamePlayer.center(w._realX, w._realY);
	});

	// follower_4
	PluginManager.registerCommand(pluginName, "follower_4", args => {
		$gameMap._camFollow = "follower_4";
		const w = $gamePlayer.followers().follower(3);
		$gamePlayer.center(w._realX, w._realY);
	});

	// follower_5
	PluginManager.registerCommand(pluginName, "follower_5", args => {
		$gameMap._camFollow = "follower_5";
		const w = $gamePlayer.followers().follower(4);
		$gamePlayer.center(w._realX, w._realY);
	});

	// follower_6
	PluginManager.registerCommand(pluginName, "follower_6", args => {
		$gameMap._camFollow = "follower_6";
		const w = $gamePlayer.followers().follower(5);
		$gamePlayer.center(w._realX, w._realY);
	});

	// follower_7
	PluginManager.registerCommand(pluginName, "follower_7", args => {
		$gameMap._camFollow = "follower_7";
		const w = $gamePlayer.followers().follower(6);
		$gamePlayer.center(w._realX, w._realY);
	});

	// follower_8
	PluginManager.registerCommand(pluginName, "follower_8", args => {
		$gameMap._camFollow = "follower_8";
		const w = $gamePlayer.followers().follower(7);
		$gamePlayer.center(w._realX, w._realY);
	});

	// follower_9
	PluginManager.registerCommand(pluginName, "follower_9", args => {
		$gameMap._camFollow = "follower_9";
		const w = $gamePlayer.followers().follower(8);
		$gamePlayer.center(w._realX, w._realY);
	});

	// event
	PluginManager.registerCommand(pluginName, "event", args => {
		$gameMap._camFollow = "event";
		const eventId = Number(args.eventId) ? Number(args.eventId) : Tyruswoo.CameraControl._pluginCommandEventId; //If args.eventId is zero or null, then use current event's ID.
		$gameMap._camFollowEventID = eventId;
		const e = $gameMap.event($gameMap._camFollowEventID);
		if ($gameMap._camFollowEventID && $gameMap._camFollowEventID > 0 && typeof e != "undefined") {
			$gamePlayer.center(e._realX, e._realY); // Make sure the camera stays centered on this event, regardless of its position.
		};
	});

	// map
	PluginManager.registerCommand(pluginName, "map", args => {
		$gameMap._camFollow = "map";
	});

	// map_at_coordinates
	PluginManager.registerCommand(pluginName, "map_at_coordinates", args => {
		$gameMap._camFollow = "map";
		const xy = Tyruswoo.CameraControl.extract_xy_array(args);
		var x = xy[0];
		var y = xy[1];
		if(x < 0) {x = 0;};
		if(y < 0) {y = 0;};
		if(x >= $gameMap.width()) {x = $gameMap.width() - 1};
		if(y >= $gameMap.height()) {y = $gameMap.height() - 1};
		if(x >= 0 && y >= 0) {$gamePlayer.center(x, y);};
	});

	//=============================================================================
	// Game_Interpreter
	//=============================================================================

	// Alias method.
	// Plugin Command
	Tyruswoo.CameraControl.Game_Interpreter_command357 = Game_Interpreter.prototype.command357;
	Game_Interpreter.prototype.command357 = function(params) {
		Tyruswoo.CameraControl._pluginCommandEventId = this.eventId(); //Keep track of the most recent event that used a plugin command.
		return Tyruswoo.CameraControl.Game_Interpreter_command357.call(this, params);
	};

	//=============================================================================
	// Game_Map
	//=============================================================================

	// Alias method
	Tyruswoo.CameraControl.Game_Map_initialize = Game_Map.prototype.initialize;
	Game_Map.prototype.initialize = function() {
		Tyruswoo.CameraControl.Game_Map_initialize.call(this);
		this._camFollow = "leader";
		this._camFollowEventID = 0;
	};

	//=============================================================================
	// Game_Player
	//=============================================================================

	// Alias method
	Tyruswoo.CameraControl.Game_Player_updateScroll = Game_Player.prototype.updateScroll;
	Game_Player.prototype.updateScroll = function(lastScrolledX, lastScrolledY) {
		if (!$gameMap._camFollow) {
			// This is a saved game with no _camFollow declared.
			// Use default updateScroll method.
			Tyruswoo.CameraControl.Game_Player_updateScroll.call(
				this, lastScrolledX, lastScrolledY);
		} else if($gameMap._camFollow == "player") {
			if (Imported.Tyruswoo_FollowerControl && Tyruswoo.FollowerControl.follower() != $gamePlayer) {
				// If Tyruswoo_FollowerControl is installed, center its selected follower.
				const w = (Imported.Tyruswoo_FollowerControl && Tyruswoo.FollowerControl.follower()) ?
					Tyruswoo.FollowerControl.follower() : $gamePlayer;
				$gamePlayer.center(w._realX, w._realY);
			} else {
				// Use the default updateScroll method.
				Tyruswoo.CameraControl.Game_Player_updateScroll.call(
					this, lastScrolledX, lastScrolledY);
			};
		} else if ($gameMap._camFollow.substr(0, 8) == "follower") {
			// Get the number at the end of this string.
			const n = Number($gameMap._camFollow.substr(9));
			const w = $gamePlayer.followers().follower(n - 1);
			// Make sure the camera stays centered, regardless of watched character's position.
			$gamePlayer.center(w._realX, w._realY);
		} else if ($gameMap._camFollow == "event") {
			const eventID = $gameMap._camFollowEventID;
			const e = $gameMap._events[eventID];
			if (eventID > 0 && typeof e != "undefined") {
				// Keep the camera centered on this event, regardless of its position.
				$gamePlayer.center(e._realX, e._realY);
			};
		} else if ($gameMap._camFollow != "map") {
			// In all other cases except "map", use default updateScroll method.
			Tyruswoo.CameraControl.Game_Player_updateScroll.call(
				this, lastScrolledX, lastScrolledY);
		};
	};

})();
