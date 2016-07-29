class SphereUI {

    constructor(_scene, _babylonApp, _container, length = 50) {
        this.scene = _scene;
        this.length = length;
        this.target = _babylonApp.activeCamera.position;
        this.container = _container;
        this.babylonMod = _babylonApp;
        this.DataArr = this.babylonMod.Data.videoModel.results[0].sectionItems.itemList;
        this.init();
    }

    init(){
    	var vector = new BABYLON.Vector3(this.target.x, this.target.y, this.target.z);
		for ( var i = 0, l = this.DataArr.length; i < l; i ++ ) {
			var phi = Math.acos( -1 + ( 2 * i ) / l );
			var theta = Math.sqrt( l * Math.PI ) * phi;
			var meshOBJ = new BABYLON.Mesh.CreatePlane("vidPlane"+i, 2.0, this.scene);
			try{
				if(typeof this.DataArr[i].thumbnailSet[7] != undefined){
					console.log(meshOBJ.material);
					this.babylonMod.video.createVidTexture(meshOBJ, this.DataArr[i].thumbnailSet[7].url, this.scene);
				}else{
					this.babylonMod.video.createVidTexture(meshOBJ, this.DataArr[i].thumbnailSet[3].url, this.scene);
				}
			}catch(e){
				console.log(e);
			}
			meshOBJ.position.x = 26 * Math.cos( theta ) * Math.sin( phi );
			meshOBJ.position.y = 26 * Math.sin( theta ) * Math.sin( phi );
			meshOBJ.position.z = 26 * Math.cos( phi );
			vector.scaleToRef( meshOBJ.position, 2 );
			meshOBJ.lookAt( vector );
			this.container.push( meshOBJ );
		}

	 }

}

module.exports = SphereUI;