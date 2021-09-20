/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/
function main(){
   putBeeper();
   put_beeper();
   put_beeper();
   put_beeper();
   put_beeper();
   pickBeeper();
   pick_beeperr();
   pick_beeperl();
   pick_beeperl();
   pick_beeperl();
   turnRight();
   turnRight();
}
function put_beeper() {
   move();
   turnLeft();
   move();
   putBeeper();
   turnRight();
}
function pick_beeperr() {
   turnRight();
   move();
   turnRight();
   move();
   pickBeeper();
}
function pick_beeperl() {
   turnLeft();
   move();
   turnRight();
   move();
   pickBeeper();
}
