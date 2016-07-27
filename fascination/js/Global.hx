package ;

extern class Global {

	//public var $:Dynamic;
	//public var :Dynamic;
	public static var $:Dynamic;

	//public function  (name:String, doc:Dynamic):Void;
	public function acceptData (owner:Dynamic):Void;
	public function addHandle (attrs:String, handler:Dynamic):Void;
	public function assert (fn:Dynamic):Void;
	public function completed ():Void;
	public function createButtonPseudo (type:String):Void;
	public function createCache ():Function(string, Object);
	public function createInputPseudo (type:String):Void;
	public function createPositionalPseudo (fn:Dynamic):Void;
	public function defaultDisplay (nodeName:String):Void;
	public function getText (elem:Array|Element):Void;
	public function getWindow (elem:Dynamic):Void;
	public function isXML (elem:Element|Object):Bool;
	public function load (url:Dynamic, params:Dynamic, _callback:Dynamic):Void;
	public function markFunction (fn:Dynamic):Void;
	public function select (selector:String|Function, context:Element, ?results:Array <Dynamic>, ?seed:Array <Dynamic>):Void;
	public function setDocument (?doc:Element|Object):Dynamic;
	public function siblingCheck (a:Element, b:Element):Float;
	public function testContext (?context:Element|Object):Element|Object|Boolean;
	public function uniqueSort (results:ArrayLike):Void;

}