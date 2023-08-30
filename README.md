# Tyruswoo Camera Control for RPG Maker MZ

Allows greater control of the camera! Perfect for cutscenes!

Make the camera follow any event, or a specific location on the map, or return to following the player as is the default.

## Plugin commands

| Command                   | Action                                        |
|---------------------------|-----------------------------------------------|
| Watch Leader              | Camera watches the party leader.              |
| Watch Follower 1          | Camera watches the party's first follower.    |
| Watch Follower 2          | Camera watches the party's second follower.   |
| Watch Follower 3          | Camera watches the party's third follower.    |
| Watch Follower 4          | Camera watches the party's fourth follower.   |
| Watch Follower 5          | Camera watches the party's fifth follower.    |
| Watch Follower 6          | Camera watches the party's sixth follower.    |
| Watch Follower 7          | Camera watches the party's seventh follower.  |
| Watch Follower 8          | Camera watches the party's eighth follower.   |
| Watch Follower 9          | Camera watches the party's ninth follower.    |
| Watch Player/Follower     | Camera on player. (May use Follower Control.) |
| Watch Event               | Camera watches an event on the map.           |
| Watch Map at Current View | Camera stops and watches current view.        |
| Watch Map at Coordinates  | Camera locks on given coordinates.            |

## Basics of how to use this plugin

1. Inside an event, use a plugin command, and select the
   Tyruswoo_CameraControl plugin.
2. From the dropdown menu, select who/what you want the camera to watch.
   Now the camera will watch your selected target!
3. After you are done with story or other parts of your game, you may want
   to return the camera to normal. To return the camera to normal, use the
   Watch Leader plugin command.

**Tip:** For cutscenes with camera movement, you can create an event named
     "Camera" that has no picture, has Through On, and has no content.
     In your cutscene event, use the Camera Control plugin's Watch Event
     plugin command to target the camera event. Then, your cutscene event
     can use "Set Move Route" on the camera event to make the camera watch
     wherever the camera event moves!
- **Extra tip:** With Set Move Route, you can move the camera event
  diagonally by using the Move Lower Left, Move Lower Right,
  Move Upper Left, and Move Upper Right. Now you can have your camera
  pan diagonally!

## Examples of ways to use this plugin

- During a story scene ("cutscene"), make the camera follow a certain
  event. This may be a character in the story, or the camera may watch an
  invisible event that exists to be the camera's target.
- When the camera is watching an event, you can change the speed of the
  camera's movement by changing the speed of the event. (You may want
  the event's step Frequency set to "Highest" so that the camera moves
  smoothly.)
- Use one of the Watch Map plugin commands to target the map. Then, use the
  Scroll Map commands to move the camera's view from there. When the
  camera is watching the map, you can move the camera however you like
  using Scroll Map commands!
- You can watch the event running the plugin command by selecting the
  Watch Event plugin command, but then leaving the Event ID blank or zero.

## Moving the camera's view without this plugin

You can use the "Scroll Map..." event command within and event's contents.
This event command is found in Event Command tab 2, under Movement. This
is useful for basic cutscene content. However, there are some drawbacks.
- The Scroll Map event command does not allow for diagonal movement of the
  camera.
- The Scroll Map event command forces waiting if more than one scroll map
  event command is scheduled. This can be bad for "escape the dungeon"
  autoscrolling, in which the player is intended to be mobile while the
  camera's view is moving.

### For more help using the Camera Control plugin, see [Tyruswoo.com](https://www.tyruswoo.com).

## Version History

**v1.0**  9/12/2020
- Camera Control released for RPG Maker MZ!

**v1.1**  9/26/2020
- Fixed a bug in which orientational shift required the
  Tyruswoo_TileControl plugin. Now, orientational shift is
  calculated by the Camera Control plugin without needing
  Tyruswoo_TileControl.

**v1.1.1** - 8/30/2023
- This plugin is now free and open source under the [MIT license](https://opensource.org/license/mit/).

> **Remember, only you can build your dreams!**
> 
> *Tyruswoo*
